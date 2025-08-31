'use client'

export default function HeroNewsletterForm() {
    return (
      <div className="bg-blue-400 dark:bg-blue-500 border-2 border-gray-600">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <h3 className="max-w-xl text-lg font-medium tracking-tight text-balance text-black sm:text-xl lg:col-span-7 lg:ml-0">
          Quick, no-fluff updates on Harnett and Johnston county business and economic news. Delivered 5x a week in under 5 minutes.
          </h3>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white border border-blue-600 px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-xs hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Keep Me in the Loop!
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  