import React from 'react'

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 top-40  transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div className="relative  bg-[#9089fc]" ></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, a.</h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-[#9089fc] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
         
        </div>
      </div>
    </div>
   
  </div>

  )
}

export default Hero
