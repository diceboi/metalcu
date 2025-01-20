"use client";

import React from 'react';
import H1 from './Typo/H1';
import Smalltitle from './Typo/Smalltitle';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function MainHero({ title, subtitle, image }) {
  const pathname = usePathname(); // Access the current path
  console.log(pathname);

  // Function to generate breadcrumb paths
  const generateBreadcrumbs = () => {
    if (!pathname) return []; // Safeguard check
    const pathSegments = pathname.split('/').filter(Boolean);
    return pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const name = segment.replace(/-/g, ' '); // Replace dashes with spaces
      return { path, name: name.charAt(0).toUpperCase() + name.slice(1) }; // Capitalize
    });
  };

  const breadcrumbs = generateBreadcrumbs();
  console.log(breadcrumbs);

  return (
    <>
    <div id="breadcrumbs" className="container m-auto lg:text-sm text-xs bg-[--lightgrey] lg:mt-16 mt-8 mb-2 px-4 lg:px-0">
      {breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb">
          <ol className="flex space-x-1">
            <li>
              <Link href="/">
                <p className="text-[--grey] hover:underline hover:text-[--orange]">Kezdőlap</p>
              </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center">
                <span className="mx-2 text-[--orange]">/</span>
                {index === breadcrumbs.length - 1 ? (
                  <span className="text[--green]">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path}>
                    <p className="text-[--grey] hover:underline hover:text-[--orange]">{crumb.name}</p>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
    <section className="w-full px-4 overflow-hidden">
        <div className='relative container m-auto border-x border-r border-l border-t border-[--grey-border] border-dashed shadow-special-1 rounded-t-xl lg:px-0'>
                <Smalltitle classname={"absolute lg:block hidden lg:bottom-32 bottom-28 lg:-right-24 -right-24 -rotate-90 z-20"}>{subtitle}</Smalltitle>
                <H1 classname={"text-center absolute lg:top-8 top-4 lg:left-8 left-4 z-20"}>{title}</H1>
            <div className='w-full grid lg:grid-cols-8 grid-cols-4 grid-rows-5 xl:min-h-[500px] lg:min-h-[400px] min-h-[100px]'>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 lg:border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-b border-dashed border-[--grey-border] lg:block hidden'></div>

              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 lg:border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-b border-dashed border-[--grey-border] lg:block hidden'></div>

              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 lg:border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-b border-dashed border-[--grey-border] lg:block hidden'></div>

              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 lg:border-r border-b border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-b border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-b border-dashed border-[--grey-border] lg:block hidden'></div>

              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 lg:border-r border-dashed border-[--grey-border]'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-r border-dashed border-[--grey-border] lg:block hidden'></div>
              <div className='lg:min-w-[100px] lg:min-h-[100px] min-h-[50px] grid-cols-1 grid-rows-1 border-dashed border-[--grey-border] lg:block hidden'></div>
            </div>

            <div className='absolute bottom-0 left-0 w-full lg:h-[150px] h-[100px] bg-gradient-to-b from-transparent to-[--lightgrey] z-10 pointer-events-none'></div>

            <motion.img 
            initial={{ translateY: "50%", opacity:"0%", translateX: "-50%", bottom: 0, left: "50%"}}
            whileInView={{ translateY: "0%", opacity:"100%", translateX: "-50%", bottom: 0, left: "50%" }}
            src={image} 
            alt='Metált bírod?' 
            width={1280} 
            height={853} 
            className='absolute lg:min-w-fit md:min-w-fit sm:min-w-fit min-w-[150%] h-auto' 
            />
        </div>
    </section>
    </>
  )
}
