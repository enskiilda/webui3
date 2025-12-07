'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AppContextType {
  showSidebar: boolean
  setShowSidebar: (show: boolean) => void
  mobile: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      setMobile(isMobile)
      if (!isMobile) {
        const savedSidebar = localStorage.getItem('sidebar')
        setShowSidebar(savedSidebar === 'true')
      } else {
        setShowSidebar(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    localStorage.setItem('sidebar', String(showSidebar))
  }, [showSidebar])

  return (
    <AppContext.Provider value={{ showSidebar, setShowSidebar, mobile }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
