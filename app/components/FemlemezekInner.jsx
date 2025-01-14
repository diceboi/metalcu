"use client"

import Container from './UI/Container'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Par from './UI/Typo/Par'
import Image from 'next/image'
import Link from 'next/link'
import Smalltitle from './UI/Typo/Smalltitle'
import Mainbutton from './UI/Buttons/Mainbutton'
import { BsFiletypePdf } from "react-icons/bs";
import { motion } from "framer-motion"
import ProductTile from './UI/ProductTile'

export default function FemlemezekInner() {
  return (
    <section className="w-full px-4">
        <div className='container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4'>
            <div className='flex flex-col gap-8 py-16 lg:px-8'>
            <div className='flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]'>
                <H2>Termékeink</H2>                   
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                <ProductTile />
                <ProductTile />
                <ProductTile />
                <ProductTile />
            </div>
            </div>
        </div>
    </section>
  )
}
