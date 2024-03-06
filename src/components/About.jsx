import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-full w-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20 indent-4'>
              Hello! 👋
            </p>
            
            <p className='text-xl mt-5 indent-4'>
              I am a driven Software Developer with over 2 years of experience, specializing in Java & Spring.            
            </p>

            <p className='text-xl mt-5 indent-4'>
              Currently, I'm expanding my expertise through a Master's degree in Software Engineering. 📚💡
            </p>

            <p className='text-xl mt-5 indent-4'>
              When I am not in front of my laptop you can find me on the football pitch or in the gym! ⚽️🏋️‍
            </p>

            <p className='text-xl mt-5 indent-4'>
              Let's connect! I'm always open to discussing new technologies, innovative projects, or crypto. 
            </p>

        </div>
    </div>
  )
}

export default About
