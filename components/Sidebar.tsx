'use client'

import { useApp } from '@/lib/context'

export default function Sidebar() {
  const { showSidebar, setShowSidebar, user } = useApp()

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${
          showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowSidebar(false)}
      />

      <div
        className={`fixed lg:relative top-0 left-0 h-screen z-50 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{ width: showSidebar ? '260px' : '0px', minWidth: showSidebar ? '260px' : '0px' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <img src="/favicon.png" alt="Logo" className="w-7 h-7" />
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">Open WebUI</span>
            </div>
            <button
              onClick={() => setShowSidebar(false)}
              className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            <button
              onClick={() => {}}
              id="sidebar-new-chat-button"
              className="w-full flex items-center space-x-2 p-3 mb-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-750 rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>New Chat</span>
            </button>

            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1">Chats</div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 p-3">
            <div className="flex items-center space-x-2">
              <img
                src={user.profile_image_url}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
                  {user.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{user.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
