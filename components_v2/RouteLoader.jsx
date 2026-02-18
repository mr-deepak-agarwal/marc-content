'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLoading } from './loading-store'

export default function RouteLoader() {
  const pathname = usePathname()
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    setLoading(false)
  }, [pathname, setLoading])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur">
      <div className="h-12 w-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
