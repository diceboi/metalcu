import React from 'react'
import Container from './UI/Container'
import H1 from './UI/Typo/H1'
import H3 from './UI/Typo/H3'
import H2 from './UI/Typo/H2'
import Par from './UI/Typo/Par'
import Image from 'next/image'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'
import { BsPersonCheckFill, BsInboxesFill, BsGlobeCentralSouthAsia ,BsClockFill } from "react-icons/bs";

export default function Elonyok() {
  return (
    <section className="w-full">
            <div className='container m-auto border-x border-b border-[--grey-border] '>
                <div className='grid grid-cols-2 lg:grid-cols-4'>

                    <div className='relative flex flex-col gap-2 border-r border-[--grey-border] lg:p-8 p-4 hover:bg-[--lightgrey-hover] transition-all duration-500'>
                        <BsPersonCheckFill className='bg-[--green] p-2 w-10 h-10 mb-4'/>
                        <H3>Kiváló ügyfélszolgálat</H3>
                        <Par>Mi figyelünk az ügyfeleinkre</Par>
                    </div>

                    <div className='relative flex flex-col gap-2 border-r border-[--grey-border] lg:p-8 p-4 hover:bg-[--lightgrey-hover] transition-all duration-500'>
                        <BsInboxesFill className='bg-[--green] p-2 w-10 h-10 mb-4'/>
                        <H3>Hatalmas raktárkészlet</H3>
                        <Par>Nálunk megtalálod amit keresel</Par>
                    </div>

                    <div className='relative flex flex-col gap-2 border-r border-[--grey-border] lg:p-8 p-4 hover:bg-[--lightgrey-hover] transition-all duration-500'>
                        <BsGlobeCentralSouthAsia className='bg-[--green] p-2 w-10 h-10 mb-4'/>
                        <H3>Megbízható beszállítók</H3>
                        <Par>Megbízható cégekkel dolgozunk</Par>
                    </div>

                    <div className='relative flex flex-col gap-2 lg:p-8 p-4 hover:bg-[--lightgrey-hover] transition-all duration-500'>
                        <BsClockFill className='bg-[--green] p-2 w-10 h-10 mb-4'/>
                        <H3>Pontos határidők</H3>
                        <Par>Garanciát vállalunk a határidőkre</Par>
                    </div>

                </div>
            </div>
    </section>
  )
}
