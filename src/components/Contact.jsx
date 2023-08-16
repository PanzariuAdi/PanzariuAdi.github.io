import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 pd-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch : </p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/adc0814c-c488-41c1-a726-eb88c5b27e34" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" autoComplete='true' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="email" autoComplete='true' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'/>
                    <textarea name="message" rows="10" placeholder='Enter your thoughts' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='cursor-pointer text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto'>Let's get in touch !</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact