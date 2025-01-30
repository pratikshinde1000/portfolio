import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt='profile-img' className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-2 font-Ovo'>Hi! I'm Pratik Shinde
                <Image src={assets.hand_icon} alt='' className='w-6' /></h3>
            <h1>Full Stack Developer based in India.</h1>
            <p>I am full stack developer with 3.9 years of experience. I am proficient in using MERN stack technologies to build fast and scalable web applications.</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2' href="#contact">
                    contact me  <Image src={assets.right_arrow_white} alt='profile-img' className='rounded-full w-4' /> </a>
                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' >
                    my resume  <Image src={assets.download_icon} alt='profile-img' className='rounded-full w-4' /> </a>
            </div>
        </div>
    )
}

export default Header