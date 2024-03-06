import React from 'react'
import java from '../assets/java.png'
import node from '../assets/nodejs.png'
import python from '../assets/python.png'
import github from '../assets/github.png'
import linux from '../assets/linux.png'
import aws from '../assets/aws.png'
import rust from '../assets/rust.png'


const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: java,
            name: 'Java',
            style: 'shadow-white-500'
        },
        {
            id: 2,
            src: node,
            name: 'NodeJS',
            style: 'shadow-white-500'
        },
        {
            id: 3,
            src: python,
            name: 'Python',
            style: 'shadow-white-500'
        },
        {
            id: 4,
            src: aws,
            name: 'AWS',
            style: 'shadow-white-500'
        },
        {
            id: 5,
            src: github,
            name: 'GitHub',
            style: 'shadow-white-500'
        },
        {
            id: 6,
            src: linux,
            name: 'Linux',
            style: 'shadow-white-500'
        },
        {
            id: 7,
            src: rust,
            name: 'Rust',
            style: 'shadow-white-500'
        },
    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>

                    <p className='py-6'>Some of the tools I worked with : </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        experiences.map(({ id, src, name, style }) => (
                            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{name}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>

  )
}

export default Experience
