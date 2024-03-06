import React from 'react';
import ProfilePicture from '../assets/me.jpg';
import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-scroll';


const Home = () => {
  return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center space-x-3 h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>Software Developer and Learner</h2>
                    <p className='text-gray-500 py-4 max-w-md'>Greetings! I'm a Java Software Developer at Endava and a passionate Master's student in Software Engineering.</p>
                    <p className='text-gray-500 py-4 max-w-md'>Join me in exploring my portfolio, where I merge hands-on Java expertise with a commitment to constant learning. Let's shape the future of software together !</p>

                    <div>
                        <Link to='portofolio' smooth duration={500} className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portofolio
                            <span className='group-hover:rotate-90 duration-300'><MdArrowRightAlt size={25} className='ml-1' /></span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={ProfilePicture} alt="My profile" className='rounded-2xl w-2/3 mx-auto md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home
