'use client'

interface CalendarEmbedProps {
  calendlyUrl?: string
  height?: number
}

export default function CalendarEmbed({
  calendlyUrl = "https://calendly.com/elite-rides",
  height = 700
}: CalendarEmbedProps) {
  return (
    <div className="w-full bg-black border-2 border-yellow-500 rounded-xl overflow-hidden">
      {/* Calendar Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4">
        <h3 className="text-black font-bold text-xl text-center">
          Schedule Your Elite Ride
        </h3>
        <p className="text-black/80 text-center mt-1">
          Select your preferred date and time
        </p>
      </div>

      {/* Calendar Content */}
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Placeholder for Calendly iframe */}
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-yellow-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Interactive Booking Calendar
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              This is where your Calendly or booking system would be embedded.
              Replace with your actual calendar integration.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>🚗 Select your service type</p>
              <p>📅 Choose date and time</p>
              <p>📍 Specify pickup and destination</p>
              <p>💳 Complete booking details</p>
            </div>
          </div>
        </div>

        {/* Uncomment and configure when ready to use real Calendly */}
        {/*
        <iframe
          src={calendlyUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Elite Rides Booking Calendar"
          className="bg-white"
        />
        */}
      </div>

      {/* Calendar Footer */}
      <div className="bg-black border-t border-yellow-500/20 p-4 text-center">
        <p className="text-gray-300 text-sm">
          Need assistance? Call{' '}
          <span className="text-yellow-400 font-semibold">(555) 123-ELITE</span>
        </p>
      </div>
    </div>
  )
}