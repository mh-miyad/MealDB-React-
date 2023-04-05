import React from 'react'

const ErrorPage = () => {
  return (
    <div>
        <div className=" w-full flex justify-center mt-56   text-center">
        <div className="  border bg-gray-50 rounded-xl  shadow-2xl  p-10">
         <div className="animate-bounce">
         <span className="text-[10rem] text-red-500 shadow-lg shadow-red-400/30 mx-2 p-2">4</span>
          <span className="text-[10rem] text-sky-500 p-4 ">0</span>
          <span className="text-[10rem] text-green-500 shadow-green-500/40 mx-2  shadow-lg  p-2">4</span>

          <div className="text-3xl text-gray-500 font-bold py-5 px-10">No Page Found</div>
         </div>

          <button className=" text-xl text-purple-700 font-bold font-sans  ">  Go to <Link className="bg-gray-500 p-4 rounded-xl text-white" to={'/'}>Home</Link> </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage