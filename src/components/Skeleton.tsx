interface SkeletonProps {
  className?: string
}

export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <p className="text-xs text-gray-400 mt-2">Skeleton Component Placeholder</p>
    </div>
  )
}