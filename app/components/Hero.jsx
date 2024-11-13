import React from 'react'
import Container from './UI/Container'
import H1 from './UI/Typo/H1'
import Image from 'next/image'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'

export default function Hero() {
  return (
    <section className="w-full px-4">
        <div className='container m-auto border-x border-b border-dashed border-[--grey-border] '>
            <div className='flex flex-col lg:flex-row'>

              <div className='flex flex-col gap-8 justify-center lg:w-1/2 lg:p-16 p-4'>
                <Smalltitle>Metalcu Kft.</Smalltitle>
                <H1>Fémkereskedelem<br></br> felső fokon</H1>
                <Mainbutton>Bővebben</Mainbutton>
              </div>
              <div className='relative w-1/2 min-h-[80vh]'>
                <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--green] z-10 mix-blend-color'></div>
                <Image src='/image-kepek/metalcu.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
              </div>

            </div>
        </div>
    </section>
  )
}
