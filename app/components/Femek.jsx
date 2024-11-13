import React from 'react'
import Container from './UI/Container'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Image from 'next/image'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'

export default function Femek() {
  return (
    <section className="w-full px-4">
        <div className='container m-auto border-x border-b border-dashed border-[--grey-border] '>
            <div className='flex flex-col lg:flex-row'>

              
              <div className='w-full min-h-[80vh]'>
                <div className='grid lg:grid-cols-4 grid-cols-1'>

                    <div className='relative col-span-1 h-[80vh]'>
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--green] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/metalcu.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Acél</H3>
                    </div>
                    <div className='relative col-span-1 h-[80vh]'>
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--grey] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/metalcu.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Aluminium</H3>
                    </div>
                    <div className='relative col-span-1 h-[80vh]'>
                        <div className='absolute top-0 left-0 w-full min-h-[80vh] bg-[--orange] z-10 mix-blend-color'></div>
                        <Image src='/image-kepek/metalcu.webp' fill style={{ objectFit: 'cover', objectPosition: 'center' }}/>
                        <H3 classname={'absolute bottom-8 left-0 z-20 text-black p-4 bg-[--lightgrey]'}>Réz</H3>
                    </div>

                    <div className='flex flex-col gap-8 justify-center col-span-1 lg:p-16 p-4'>
                        <Smalltitle>Hatalmas választék</Smalltitle>
                        <H2>Fémlemezek a kínálatunkban</H2>
                        <Mainbutton>Bővebben</Mainbutton>
                    </div>
                </div>
              </div>

            </div>
        </div>
    </section>
  )
}
