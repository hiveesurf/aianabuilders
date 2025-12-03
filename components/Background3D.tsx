'use client'

import { useEffect, useState } from 'react'

export default function Background3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 opacity-10 pointer-events-none bg-gray-50" />
    )
  }

  // Simple CSS-based 3D-like background effect
  return (
    <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-15" />
    </div>
  )
}
