"use client"

import Container from './UI/Container'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Image from 'next/image'
import Link from 'next/link'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'

import { motion } from "framer-motion"

export default function SzolgaltatasokInner() {
  return (
    <section className="w-full px-4">
        <div className='container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4'>
            <div className='flex flex-col gap-8 py-16 lg:px-8'>
            <div className='flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]'>
                <H2>Elérhető szolgáltatásaink</H2>                   
            </div>
            <div className='w-full min-h-[50vh]'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 overflow-hidden'>

                    <motion.div 
                        className='relative col-span-1 h-[50vh]'
                        initial={{ width: "100%" }}
                        whileHover={{ width: "110%" }}
                        transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
                    >
                        <Link href="/szolgaltatasok/feluletkezeles">
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--orange] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/feluletkezeles.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Felületkezelés</H3>
                        </Link>
                    </motion.div>
                    <motion.div 
                        className='relative col-span-1 h-[50vh]'
                        initial={{ width: "100%" }}
                        whileHover={{ width: "110%" }}
                        transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
                    >
                        <Link href="/szolgaltatasok/szallitas">
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--green] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/szallitas.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Szállítás</H3>
                        </Link>
                    </motion.div>
                    <motion.div 
                        className='relative col-span-1 h-[50vh] overflow-hidden'
                        initial={{ width: "100%" }}
                        whileHover={{ width: "110%" }}
                        transition={{ duration: 0.2, type: "ease-out", bounce: 0.4 }}
                    >
                        <Link href="/szolgaltatasok/foliazas">
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--grey] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/szolgaltatas3.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Foliázás</H3>
                        </Link>
                    </motion.div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
