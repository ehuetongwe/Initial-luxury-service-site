/**
 * Aura Luxury Transport - Booking System & UI Script
 * Consolidated and refactored for stability.
 */

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Aura Luxury Transport - System Initializing... (Final Version)');

    // 1. Safe Configuration Loading
    const AppConfig = (typeof CONFIG !== 'undefined') ? CONFIG : {};

    // 2. Initialize Services (Supabase & EmailJS)
    let supabase = null;
    let servicesReady = false;

    try {
        // Init Supabase
        if (AppConfig.SUPABASE_URL && AppConfig.SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL') {
            if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
                supabase = window.supabase.createClient(AppConfig.SUPABASE_URL, AppConfig.SUPABASE_ANON_KEY);
                console.log('Supabase initialized.');
            } else {
                console.warn('Supabase SDK not found.');
            }
        }

        // Init EmailJS
        if (AppConfig.EMAILJS_PUBLIC_KEY && AppConfig.EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
            if (typeof emailjs !== 'undefined') {
                emailjs.init(AppConfig.EMAILJS_PUBLIC_KEY);
                console.log('EmailJS initialized.');
                servicesReady = true;
            } else {
                console.warn('EmailJS SDK not found.');
            }
        }
    } catch (err) {
        console.error('Service initialization error:', err);
    }

    // 3. UI Logic: Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // 4. UI Logic: Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // 5. UI Logic: Scroll Reveal
    const revealElements = document.querySelectorAll('.service-card, .vehicle-card, section h2, .hero h1, .hero p, .form-group');
    revealElements.forEach(el => el.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active')); // Fallback
    }

    // 6. Modal Logic
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.close-modal');
    const bookButtons = document.querySelectorAll('a[href="#contact"], .open-modal');
    const form = document.getElementById('booking-form');

    function openModal() {
        if (!modal) return;
        modal.style.display = 'block';
        void modal.offsetWidth; // Force reflow
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Optional: reset form? form.reset();
        }, 300);
    }

    if (modal) {
        // Close on X
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Open on buttons
        bookButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });
    }

    // Helper: Send reservation data to n8n webhook (non-blocking)
    function sendToN8nWebhook(payload) {
        const webhookUrl = AppConfig.N8N_WEBHOOK_URL;
        if (!webhookUrl || webhookUrl === 'YOUR_N8N_WEBHOOK_URL') {
            return;
        }
        fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(err => {
            console.warn('n8n webhook failed (lead already saved):', err);
        });
    }

    // 7. Reservation Request Pipeline
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Processing...';
            btn.disabled = true;

            const formData = {
                first_name: form.first_name.value.trim(),
                last_name: form.last_name.value.trim(),
                email: form.email.value.trim(),
                phone_number: form.phone.value.trim(),
                service_type: form.service.value,
                additional_requirements: form.message.value.trim()
            };

            // Validation: required fields
            if (!formData.first_name || !formData.last_name || !formData.email || !formData.service_type) {
                alert('Please fill in your first name, last name, email, and service type.');
                btn.innerText = originalText;
                btn.disabled = false;
                return;
            }

            if (!supabase) {
                alert('Booking service is unavailable. Please call us directly.');
                btn.innerText = originalText;
                btn.disabled = false;
                return;
            }

            try {
                // Step 1: Upsert customer by email, get back the id
                const { data: customerRows, error: upsertError } = await supabase
                    .from('customers')
                    .upsert({
                        first_name: formData.first_name,
                        last_name: formData.last_name,
                        email: formData.email,
                        phone_number: formData.phone_number || null
                    }, { onConflict: 'email' })
                    .select('id')
                    .single();

                if (upsertError) throw upsertError;
                const customerId = customerRows.id;

                // Step 2: Insert reservation_request linked to customer
                const { data: reservation, error: insertError } = await supabase
                    .from('reservation_requests')
                    .insert({
                        customer_id: customerId,
                        first_name: formData.first_name,
                        last_name: formData.last_name,
                        email: formData.email,
                        phone_number: formData.phone_number || null,
                        service_type: formData.service_type,
                        additional_requirements: formData.additional_requirements || null,
                        status: 'new',
                        source: 'luxury-site'
                    })
                    .select('id')
                    .single();

                if (insertError) throw insertError;

                // Step 3: Fire n8n webhook (non-blocking)
                sendToN8nWebhook({
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    phone_number: formData.phone_number,
                    service_type: formData.service_type,
                    additional_requirements: formData.additional_requirements,
                    source: 'luxury-site'
                });

                // Step 4: EmailJS notification (optional, non-blocking)
                if (servicesReady) {
                    emailjs.send(
                        AppConfig.EMAILJS_SERVICE_ID,
                        AppConfig.EMAILJS_TEMPLATE_ID,
                        {
                            to_name: formData.first_name + ' ' + formData.last_name,
                            to_email: formData.email,
                            service_type: formData.service_type,
                            message: formData.additional_requirements
                        }
                    ).catch(emailErr => {
                        console.warn('EmailJS notification failed (lead already saved):', emailErr);
                    });
                }

                // Step 5: Show success — lead is saved regardless of webhook/email outcome
                showSuccessMessage(formData);
                form.reset();

            } catch (error) {
                console.error('Reservation request error:', error);
                alert('We encountered an error saving your request. Please try calling us directly.');
            } finally {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        });
    }

    function showSuccessMessage(data) {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.innerHTML = `
                <div style="text-align: center; padding: 30px;">
                    <div style="font-size: 3rem; color: #D4AF37; margin-bottom: 20px;">✓</div>
                    <h2>Request Received</h2>
                    <p>Thank you, ${data.first_name}. We will contact you shortly.</p>
                    <button class="btn btn-primary" onclick="window.location.reload()">Close</button>
                </div>
            `;
        }
    }

});
