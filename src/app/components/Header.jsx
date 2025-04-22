import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='absolute inset-x-0 top-0 z-50'>
          <nav className='flex items-center justify-center p-6 lg:px-8'>
          <div className="flex lg:flex-1">        
          
      </div>
      
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="text-sm/6 font-semibold text-gray-900">Home</a>
        <a href="/login" className="text-sm/6 font-semibold text-gray-900">Login</a>
        <a href="/signup" className="text-sm/6 font-semibold text-gray-900">Signup</a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-gray-900">Log out <span aria-hidden="true">&rarr;</span></a>
      </div>

          </nav>
          <div className="lg:hidden" >
   
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">the Company</span>
            <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
          </a>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path  d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Login</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Signup</a>
            </div>
            <div className="py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header