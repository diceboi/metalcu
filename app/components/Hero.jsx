"use client"

import React from 'react'
import H1 from './UI/Typo/H1'
import Image from 'next/image'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="w-full px-4">
        <div className='relative container m-auto border-x border-r border-l border-t border-[--grey-border] border-dashed lg:mt-16 mt-4 shadow-special-1 rounded-t-xl lg:px-0'>
            <div className='flex flex-col justify-center lg:flex-row'>

              <div className='flex flex-col items-center gap-8 justify-center absolute left-1/2 -translate-x-1/2 top-20'>
                <Smalltitle>Metalcu Kft.</Smalltitle>
                <H1 classname={"lg:text-7xl md:6xl 5xl text-center"}>Metált bírod?</H1>
              </div>

            </div>
            <div className='w-full grid lg:grid-cols-8 grid-cols-4 grid-rows-5 xl:min-h-[600px] lg:min-h-[600px] min-h-[360px]'>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 lg:border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-b border-dashed border-[--grey-border] lg:block hidden'></div>

              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 lg:border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-b border-dashed border-[--grey-border] lg:block hidden'></div>

              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 lg:border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-b border-dashed border-[--grey-border] lg:block hidden'></div>

              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 lg:border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-b border-dashed border-[--grey-border] lg:block hidden'></div>

              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 lg:border-r border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[70px] grid-cols-1 grid-rows-1 border-dashed border-[--grey-border] lg:block hidden'></div>
            </div>

            <div className='absolute bottom-0 left-0 w-full lg:h-[150px] h-[100px] bg-gradient-to-b from-transparent to-[--lightgrey] z-10 pointer-events-none'></div>

            <motion.img 
            initial={{ translateY: "50%", opacity:"0%", translateX: "-50%", bottom: 0, left: "50%"}}
            whileInView={{ translateY: "0%", opacity:"100%", translateX: "-50%", bottom: 0, left: "50%" }}
            whileHover={{ translateY: "10%", opacity:"100%", translateX: "-50%", bottom: 0, left: "50%" }}
            src="/hero.webp" 
            alt='Metált bírod?' 
            width={1280} 
            height={853} 
            className='absolute' 
            />

        </div>
    </section>
  )
}
