import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={cn(
      "fixed inset-0 z-[100] bg-background flex items-center justify-center",
      "transition-opacity duration-500",
      !isLoading && "opacity-0 pointer-events-none"
    )}>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-primary"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-accent"></div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gradient mb-2">ADmyBRAND AI</h2>
          <p className="text-sm text-muted-foreground">Loading your AI-powered experience...</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation