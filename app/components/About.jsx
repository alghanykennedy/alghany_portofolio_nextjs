import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

export const About = () => {
  return (
      <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg'>Introduction</h4>
          <h2 className='text-center text-5xl'>About me</h2>
          <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
              <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                  <Image src={assets.profile_img} alt='user' className='w-full rounded-3xl' />
              </div>
              <div className='flex-1'>
                  <p className='mb-10 max-w-2xl'>I am an experienced Software Developer with over a 3 years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

                  <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                      {infoList.map(({ icon, iconDark, title, description }, index) => (
                          <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-200 hover:-translate-y-1 duration-500'
                              key={index}>
                              <Image src={icon} alt={title} className='w-7 mt-3' />
                              <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                              <p className='text-gray-600 text-sm'>{description}</p>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default About;