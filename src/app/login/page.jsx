import React, {FormEvent} from 'react'


const page = () => {


    async function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch('/api/auth/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email, password})
        })

        if (response.ok) {
        
            console.log(response);
          } else {
            console.log(error);
          }
    }
  return (
<section className="bg-gray-50">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Log in to your account
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" >
                    <div>
                        <label className="flex mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg flex w-full p-2.5" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label className="flex mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  flex w-full p-2.5" required="" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required="" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="text-gray-500">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-black bg-blue-300 hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    <p className="text-sm font-light text-gray-500">
                        Don’t have an account yet?<a href="/signup" className="font-medium text-primary-600 hover:underline ">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default page


