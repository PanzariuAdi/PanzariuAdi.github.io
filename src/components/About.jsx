import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-full w-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20 indent-4'>
                Hello there ! I'm Panzariu Ionut-Adrian, and I've been fascinated by technology since I first laid eyes on a computer.  Born on January 8th, 2000, I've grown up with a deep-seated passion for all things tech.
            </p>
            
            <p className='text-xl mt-5 indent-4'>
                With a Bachelor's Degree in Computer Science already under my belt, I'm currently navigating the exciting realm of a Master's Degree in the same field. As a Java Developer, I'm in my element, crafting code that brings ideas to life and solving challenges.
            </p>

            <p className='text-xl mt-5 indent-4'>
                Clean code and smart software design? Count me in! I'm a staunch believer in the power of best practices. When I'm not coding, you'll find me devouring the latest tech reads, staying up-to-date with industry trends.
            </p>

            <p className='text-xl mt-5 indent-4'>
                Speaking of trends, I'm not just into tech – I'm also a fervent BTC enthusiast. The world of cryptocurrencies and blockchain technology has me captivated.
            </p>

            <p className='text-xl mt-5 indent-4'>
                And yes, I'm a Star Wars fanatic – the Force is strong with this one.
            </p>

            <p className='text-xl mt-5 indent-4'>
                I've put this portfolio together to share my journey, projects, and insights. Let's connect, collaborate, and geek out together. Thanks for dropping by !
            </p>

        </div>
    </div>
  )
}

export default About