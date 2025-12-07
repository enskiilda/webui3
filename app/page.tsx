'use client'

import { useApp } from '@/lib/context'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const { showSidebar, setShowSidebar } = useApp()

  return (
    <div className="app relative">
      <div className="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] flex flex-row transition-all duration-300 overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition lg:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold">New Chat</h1>
            </div>

            <div className="w-10" />
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center">
                <img src="/favicon.png" alt="Logo" className="w-16 h-16 mb-6 opacity-80" />
                <h2 className="text-3xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                  How can I help you today?
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  Start a conversation or choose a suggestion below
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
                  <button className="p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 rounded-lg transition">
                    <div className="font-medium mb-1">Help me study</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      vocabulary for a college entrance exam
                    </div>
                  </button>
                  <button className="p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 rounded-lg transition">
                    <div className="font-medium mb-1">Give me ideas</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      for what to do with my kids art
                    </div>
                  </button>
                  <button className="p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 rounded-lg transition">
                    <div className="font-medium mb-1">Tell me a fun fact</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      about the Roman Empire
                    </div>
                  </button>
                  <button className="p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 rounded-lg transition">
                    <div className="font-medium mb-1">Show me a code snippet</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      of a website sticky header
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <textarea
                  id="chat-input"
                  placeholder="Send a message..."
                  rows={1}
                  className="w-full p-4 pr-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-100"
                />
                <button className="absolute right-3 top-3 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
