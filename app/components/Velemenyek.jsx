"use client"

import Container from './UI/Container'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Image from 'next/image'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'
import { BsStar, BsStarFill } from "react-icons/bs";
import Par from './UI/Typo/Par'

import { motion } from "framer-motion"

export default function Velemenyek() {
  return (
    <section className="relative w-full">
        <div className='container m-auto border-x border-b border-dashed border-[--grey-border] '>
            <div className='grid grid-cols-3'>
            
                <div className='col-span-1 lg:p-8 z-10 bg-[--lightgrey] min-h-[100vh] '>
                    <div className='sticky top-32 flex flex-col gap-2'>
                        <Smalltitle>Rólunk mondták</Smalltitle>
                        <H2>Vélemények</H2>    
                        <H3>Átlagosan 4,5</H3> 
                        <div className='flex flex-nowrap gap-2'>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]'/>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStar className='min-w-4 min-h-4 text-[--orange]' />
                        </div>
                    </div>
                    
                </div>

                <div className='flex flex-col col-span-2 w-full'>

                    <div className='flex flex-col gap-2 p-4 border-b border-l border-[--grey-border]'>
                        <div className='flex flex-nowrap gap-2 items-center'>
                            <Image src="/velemenyek/ambrus-zsuzsanna.webp" width={100} height={100} className='w-10 h-10 rounded-full'/>
                            <H3>Kiss Vera</H3>
                        </div>
                        
                        <div className='flex flex-nowrap gap-2'>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]'/>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStar className='min-w-4 min-h-4 text-[--orange]' />
                        </div>
                        <Par>Kiváló minőségű termékek és széles választék! Mindenféle fémet megtaláltam itt, amire szükségem volt a projektemhez. Csak ajánlani tudom!</Par>
                    </div>

                    <div className='flex flex-col gap-2 p-4 border-b border-l border-[--grey-border]'>
                        <div className='flex flex-nowrap gap-2 items-center'>
                            <Image src="/velemenyek/bencze-mariann.webp" width={100} height={100} className='w-10 h-10 rounded-full'/>
                            <H3>Horváth Mariann</H3>
                        </div>
                        <div className='flex flex-nowrap gap-2'>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]'/>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStar className='min-w-4 min-h-4 text-[--orange]' />
                        </div>
                        <Par>A dolgozók nagyon segítőkészek, szakértelemmel válaszoltak minden kérdésemre, és segítettek a megfelelő anyag kiválasztásában. Örülök, hogy őket választottam.</Par>
                    </div>

                    <div className='flex flex-col gap-2 p-4 border-b border-l border-[--grey-border]'>
                        <div className='flex flex-nowrap gap-2 items-center'>
                            <Image src="/velemenyek/hoffmann-agoston.webp" width={100} height={100} className='w-10 h-10 rounded-full'/>
                            <H3>Nagy Béla</H3>
                        </div>
                        <div className='flex flex-nowrap gap-2'>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]'/>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStar className='min-w-4 min-h-4 text-[--orange]' />
                        </div>
                        <Par>Nagyon jó ár-érték arány! Sok helyen nézelődtem, de végül itt találtam meg a legjobb ajánlatokat. Remek cég!</Par>
                    </div>

                    <div className='flex flex-col gap-2 p-4 border-b border-l border-[--grey-border]'>
                        <div className='flex flex-nowrap gap-2 items-center'>
                            <Image src="/velemenyek/kiss-imre.webp" width={100} height={100} className='w-10 h-10 rounded-full'/>
                            <H3>Béla Iván</H3>
                        </div>
                        <div className='flex flex-nowrap gap-2'>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]'/>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStar className='min-w-4 min-h-4 text-[--orange]' />
                        </div>
                        <Par>Kedvező árak és megbízható szállítás. Külön öröm, hogy a személyzet is kedves és hozzáértő</Par>
                    </div>

                    <div className='flex flex-col gap-2 p-4 border-b border-l border-[--grey-border]'>
                        <div className='flex flex-nowrap gap-2 items-center'>
                            <Image src="/velemenyek/szabo-domokos.webp" width={100} height={100} className='w-10 h-10 rounded-full'/>
                            <H3>Tóth Péter</H3>
                        </div>
                        <div className='flex flex-nowrap gap-2'>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]'/>
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStarFill className='min-w-4 min-h-4 text-[--orange]' />
                            <BsStar className='min-w-4 min-h-4 text-[--orange]' />
                        </div>
                        <Par>Már többször is vásároltam tőlük, és sosem csalódtam. A termékek minősége mindig kifogástalan.</Par>
                    </div>

                </div> 
                
            </div>
        </div>
    </section>
  )
}
