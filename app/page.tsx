'use client'

import { useApp } from '@/lib/context'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const { showSidebar, setShowSidebar, mobile } = useApp()

  return (
    <div className="app relative">
      <div className="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] flex flex-row overflow-hidden">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <div className="flex flex-col flex-1 bg-white dark:bg-[#212121] transition-all duration-300 overflow-hidden">
          <div className="flex flex-col flex-1 overflow-auto px-2 text-center">
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-full text-3xl text-gray-800 dark:text-gray-100 text-center flex items-center gap-4 font-primary">
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-2.5 w-full max-w-3xl mb-4">
                    <div className="flex justify-center items-center">
                      <div className="rounded-full size-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                        <svg className="size-16 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-medium font-primary dark:text-white">How can I help you today?</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-3xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <button className="group p-4 bg-gray-50 dark:bg-gray-850 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition text-left">
                    <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">Help me study</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">vocabulary for a college entrance exam</div>
                  </button>
                  <button className="group p-4 bg-gray-50 dark:bg-gray-850 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition text-left">
                    <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">Give me ideas</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">for what to do with my kids art</div>
                  </button>
                  <button className="group p-4 bg-gray-50 dark:bg-gray-850 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition text-left">
                    <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">Tell me a fun fact</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">about the Roman Empire</div>
                  </button>
                  <button className="group p-4 bg-gray-50 dark:bg-gray-850 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition text-left">
                    <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">Show me a code snippet</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">of a website sticky header</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pb-3 pt-2">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <textarea
                  placeholder="Send a message..."
                  rows={1}
                  className="w-full px-4 py-3 pr-12 bg-gray-50 dark:bg-gray-850 border border-gray-200 dark:border-gray-800 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button className="absolute right-2 bottom-2 p-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition">
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
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
