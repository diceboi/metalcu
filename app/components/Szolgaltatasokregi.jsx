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

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Szolgatltatasok() {
  return (
    <section className="w-full">
        <div className='container m-auto lg:px-0 px-4'>
            <div className='grid lg:grid-cols-3 lg:gap-0 gap-8 items-center overflow-hidden py-16'>
            
                <div className='col-span-1 flex flex-col gap-4 justify-center lg:p-8 z-10 bg-[--lightgrey]'>
                    <Smalltitle>Állunk rendelkezésedre</Smalltitle>
                    <H2>Szolgáltatások</H2>
                    <Mainbutton>Összes szolgáltatás</Mainbutton>
                </div>

                <Swiper 
                className='col-span-2 py-20 w-full'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={16}
                slidesPerView={1.5}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='relative min-h-[50vh]'>
                        <Link href="/szolgaltatasok/feluletkezeles">
                        <div className='absolute top-0 left-0 w-full min-h-[50vh] bg-[--orange] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/feluletkezeles.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Felületkezelés</H3>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='relative min-h-[50vh]'>
                        <Link href="/szolgaltatasok/szallitas">
                        <div className='absolute top-0 left-0 w-full min-h-[50vh] bg-[--green] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/szallitas.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Szállítás</H3>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='relative min-h-[50vh]'>
                        <Link href="/szolgaltatasok/foliazas">
                        <div className='absolute top-0 left-0 w-full min-h-[50vh] bg-[--grey] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/szolgaltatas3.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Fóliázás</H3>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </div>
    </section>
  )
}
