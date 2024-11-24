"use client"

import Container from './UI/Container'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Image from 'next/image'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'
import { motion } from "framer-motion"

export default function Femek() {
  return (
    <section className="w-full">
        <div className='container m-auto border-x border-b border-dashed border-[--grey-border] '>
            <div className='flex flex-col lg:flex-row'>

              
              <div className='w-full min-h-[80vh]'>
                <div className='grid lg:grid-cols-5 grid-cols-1 overflow-hidden'>

                    <motion.div 
                        className='relative col-span-1 h-[80vh]'
                        initial={{ width: "100%" }}
                        whileHover={{ width: "110%" }}
                        transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
                    >
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--grey] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/steel.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Acél</H3>
                    </motion.div>
                    <motion.div 
                        className='relative col-span-1 h-[80vh]'
                        initial={{ width: "100%" }}
                        whileHover={{ width: "110%" }}
                        transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
                    >
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--grey] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/aluminium.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Aluminium</H3>
                    </motion.div>
                    <motion.div 
                        className='relative col-span-1 h-[80vh] overflow-hidden'
                        initial={{ width: "100%" }}
                        whileHover={{ width: "110%" }}
                        transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
                    >
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--orange] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/copper.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Vörösréz</H3>
                    </motion.div>
                    <motion.div 
                        className='relative col-span-1 h-[80vh] overflow-hidden'
                        initial={{ width: "100%" }}
                        whileHover={{ width: "110%" }}
                        transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
                    >
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--green] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/sargarez.webp' fill style={{ objectFit: 'cover', objectPosition: '75% 50%' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Sárgaréz</H3>
                    </motion.div>

                    <div className='flex flex-col gap-8 justify-center col-span-1 lg:p-8 z-10 bg-[--lightgrey]'>
                        <Smalltitle>Hatalmas választék</Smalltitle>
                        <H2>Fémlemez típusaink</H2>
                        <Mainbutton>Bővebben</Mainbutton>
                    </div>
                </div>
              </div>

            </div>
        </div>
    </section>
  )
}
