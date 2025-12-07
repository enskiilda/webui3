'use client'

import React from 'react'
import Link from 'next/link'

interface SidebarProps {
  showSidebar: boolean
  setShowSidebar: (show: boolean) => void
}

export default function Sidebar({ showSidebar, setShowSidebar }: SidebarProps) {
  const [scrollTop, setScrollTop] = React.useState(0)

  return (
    <>
      {(showSidebar || true) && (
        <div
          id="sidebar"
          className={`h-screen max-h-[100dvh] min-h-screen select-none flex-shrink-0 ${showSidebar ? 'w-[260px]' : 'w-[48px]'} ${showSidebar ? 'bg-[#f9f9f9] dark:bg-[#181818]' : 'bg-white dark:bg-[#212121]'} border-e border-[#f5f5f5] dark:border-[#2e2e2e] text-gray-900 dark:text-gray-200 text-sm overflow-x-hidden transition-all duration-300 ease-in-out`}
          data-state={showSidebar}
        >
          <div className={`my-auto flex flex-col justify-between h-screen max-h-[100dvh] ${showSidebar ? 'w-[260px]' : 'w-[48px]'} overflow-x-hidden scrollbar-hidden z-50`}>
            <div className="sidebar px-1.5 pt-2 pb-1.5 flex flex-col text-gray-600 dark:text-gray-400 sticky top-0 z-10">
              <div className="flex items-center">
                <button
                  className={`flex items-center justify-center rounded-xl size-9 hover:bg-gray-100/50 dark:hover:bg-gray-850/50 transition no-drag-region shrink-0 ${showSidebar ? 'cursor-[w-resize]' : 'cursor-[e-resize]'}`}
                  onClick={() => setShowSidebar(!showSidebar)}
                  aria-label={showSidebar ? 'Close Sidebar' : 'Open Sidebar'}
                >
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                {showSidebar && (
                  <Link href="/" className="flex flex-1 px-1.5">
                    <div id="sidebar-webui-name" className="self-center font-medium text-gray-850 dark:text-white font-primary">
                      Open WebUI
                    </div>
                  </Link>
                )}
              </div>

              <div
                className={`${scrollTop > 0 ? 'visible' : 'invisible'} sidebar-bg-gradient-to-b bg-linear-to-b from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mb-6`}
              ></div>
            </div>

            <div className="px-1.5 pt-0.5 pb-1 flex flex-col gap-0 text-gray-600 dark:text-gray-400">
              <Link
                id="sidebar-new-chat-button"
                className="group flex items-center rounded-xl w-full hover:bg-gray-100 dark:hover:bg-gray-900 transition outline-none"
                href="/"
                draggable="false"
                aria-label="New Chat"
              >
                <div className="flex items-center justify-center size-9 shrink-0">
                  <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div>
                {showSidebar && (
                  <div className="flex flex-1 items-center">
                    <div className="text-[15px] font-primary text-gray-800 dark:text-gray-200">New Chat</div>
                    <div className="flex-1"></div>
                  </div>
                )}
              </Link>

              <button
                id="sidebar-search-button"
                className="group flex items-center rounded-xl w-full hover:bg-gray-100 dark:hover:bg-gray-900 transition outline-none text-left"
                draggable="false"
                aria-label="Search"
              >
                <div className="flex items-center justify-center size-9 shrink-0">
                  <svg strokeWidth="2" className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                {showSidebar && (
                  <div className="flex flex-1 items-center">
                    <div className="text-[15px] font-primary text-gray-800 dark:text-gray-200">Search</div>
                    <div className="flex-1"></div>
                  </div>
                )}
              </button>
            </div>

            <div
              className="relative flex flex-col flex-1 overflow-y-auto scrollbar-hidden pb-3"
              onScroll={(e) => {
                const target = e.target as HTMLDivElement
                setScrollTop(target.scrollTop === 0 ? 0 : target.scrollTop)
              }}
            >
              {showSidebar && (
                <div className="px-2 mt-0.5">
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1">Chats</div>
                </div>
              )}
            </div>

            <div className="px-2.5 pb-2.5 flex flex-col text-gray-600 dark:text-gray-400">
              {showSidebar && (
                <div className="flex items-center space-x-2 p-2">
                  <img src="/favicon.png" alt="User" className="w-8 h-8 rounded-full" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">User</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">admin</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
