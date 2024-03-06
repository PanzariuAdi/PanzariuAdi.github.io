import React from 'react'
import java from '../assets/java.png'
import python from '../assets/python.png'
import node from '../assets/nodejs.png'
import rust from '../assets/rust.png'

const Portofolio = () => {

    const portofolios = [
        {
            id: 1,
            src: java,
            style: 'shadow-white-500',
            title: 'Projects from Java class',
            link: 'https://github.com/PanzariuAdi/Java-Technologies'
        },
        {
            id: 2,
            src: python,
            style: 'shadow-white-500',
            title: 'Four in a row game',
            link: 'https://github.com/PanzariuAdi/FOUR-IN-A-ROW'
        },
        {
            id: 3,
            src: node,
            style: 'shadow-white-500',
            title: 'Projects from Cloud Computing class',
            link: 'https://github.com/PanzariuAdi/CC'
        },
        {
            id: 4,
            src: java,
            style: 'shadow-white-500',
            title: 'Project from Web class',
            link: 'https://github.com/PanzariuAdi/UICS'
        },
        {
            id: 5,
            src: rust,
            style: 'shadow-white-500',
            title: 'Personal rust projects',
            link: 'https://github.com/PanzariuAdi/challenges'
      
        },
    ]


    return (
        <div name='portofolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portofolio</p>

                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portofolios.map(({ id, src, style, title, link }) => (
                            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button className='px-6 py-3 m-2 duration-200 hover:scale-105'><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Portofolio
