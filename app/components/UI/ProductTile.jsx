import { BsFiletypePdf } from "react-icons/bs";
import H1 from "./Typo/H1";
import H2 from "./Typo/H2";
import H3 from "./Typo/H3";
import Par from "./Typo/Par";
import Image from "next/image";
import Link from "next/link";

export default function ProductTile() {
  return (
    <div className='group relative flex flex-col justify-between bg-[--product-bg] hover:border-b border-[--orange] shadow-special-2 w-full h-[300px] p-4'>
        <div className='flex flex-row justify-between z-10'>
            <H3>Aluminium</H3>
            <Par>EN AW-5754</Par>
        </div>
        <Link href="/" className='flex flex-nowrap items-baseline gap-2 underline z-10'>
            <BsFiletypePdf />
            <Par>PDF katalógus</Par>
        </Link>
        <Image src="/termekek/alu-sheet.webp" fill style={{ objectFit: 'contain', objectPosition: 'center' }} className="z-0 group-hover:scale-105 transition-all"/>
    </div>
  )
}
