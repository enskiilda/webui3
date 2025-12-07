'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AppState {
  showSidebar: boolean
  setShowSidebar: (show: boolean) => void
  theme: string
  setTheme: (theme: string) => void
  user: any
  config: any
  models: any[]
}

const AppContext = createContext<AppState | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [theme, setTheme] = useState('system')
  const [user] = useState({
    id: 'default',
    name: 'User',
    role: 'admin',
    profile_image_url: '/favicon.png'
  })
  const [config] = useState({
    name: 'Open WebUI',
    version: '0.6.40',
    default_locale: 'pl-PL'
  })
  const [models] = useState([
    {
      id: 'nvidia:moonshotai/kimi-k2-instruct-0905',
      name: 'Kimi K2 Instruct',
      owned_by: 'openai'
    }
  ])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') ?? 'system'
    setTheme(savedTheme)
    applyTheme(savedTheme)

    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    applyTheme(theme)
  }, [theme])

  const applyTheme = (themeValue: string) => {
    let themeToApply = themeValue

    if (themeValue === 'system') {
      themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else if (themeValue === 'oled-dark') {
      themeToApply = 'dark'
    }

    document.documentElement.classList.remove('dark', 'light', 'oled-dark')
    document.documentElement.classList.add(themeToApply)

    if (themeValue === 'oled-dark') {
      document.documentElement.style.setProperty('--color-gray-800', '#101010')
      document.documentElement.style.setProperty('--color-gray-850', '#050505')
      document.documentElement.style.setProperty('--color-gray-900', '#000000')
      document.documentElement.style.setProperty('--color-gray-950', '#000000')
    } else if (themeToApply === 'dark') {
      document.documentElement.style.setProperty('--color-gray-800', '#333')
      document.documentElement.style.setProperty('--color-gray-850', '#262626')
      document.documentElement.style.setProperty('--color-gray-900', '#171717')
      document.documentElement.style.setProperty('--color-gray-950', '#0d0d0d')
    }
  }

  return (
    <AppContext.Provider value={{ showSidebar, setShowSidebar, theme, setTheme, user, config, models }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
