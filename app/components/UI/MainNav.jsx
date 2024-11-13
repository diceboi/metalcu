import Link from "next/link"
import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPerson, BsCart2, BsSearch } from "react-icons/bs";
import Label from "./Typo/Label";

export default function MainNav() {
  return (
    <nav className="sticky top-0 w-full border-b border-[--grey-border] z-50 bg-[--lightgrey-bg] backdrop-blur-md">

        <div className="w-full bg-black px-4">
            <ul className="container m-auto flex flex-nowrap gap-4 items-center justify-end min-h-[30px]">
                <Link href='/'><li className="text-white hover:underline"><Label>
                    Rólunk
                </Label></li></Link>
                <Link href='/'><li className="text-white hover:underline"><Label>
                    Szállítás
                </Label></li></Link>
                <Link href='/'><li className="text-white hover:underline"><Label>
                    ÁSZF
                </Label></li></Link>
                <Link href='/'><li className="text-white hover:underline"><Label>
                    Adatkezelési tájékoztató
                </Label></li></Link>
            </ul>
        </div>

        <div className="container m-auto flex flex-nowrap items-center">

            <Link href='/' className="flex flex-col justify-center items-center h-full min-w-[250px] border-x border-[--grey-border] min-h-[75px] hover:bg-[--lightgrey-hover] transition-all duration-500">
                <Image src={'/logos/metalcu-base-logo.svg'} width={200} height={100} className="" />
            </Link>

            <div className="flex flex-col items-center justify-center border-r border-[--grey-border]">
                <button className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px] min-w-[75px]">
                    <RxHamburgerMenu className="w-6 h-6"/>
                </button>
            </div>

            <div className="relative w-full">
                <input 
                    type="text"
                    className=" w-full focus:bg-none bg-transparent min-h-[75px] px-8 focus:outline-none border-r border-[--grey-border] placeholder-black"
                    placeholder="Keresés név, cikkszám, vagy tulajdonság alapján..."
                />
                <BsSearch className="absolute top-1/2 -translate-y-1/2 right-[30px] w-4 h-4"/>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-[--grey-border]">
                <button className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px] min-w-[75px]">
                    <BsPerson className="w-5 h-5"/>
                </button>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-[--grey-border]">
                <button className="flex flex-col items-center justify-center hover:bg-[--lightgrey-hover] min-h-[75px] min-w-[75px]">
                    <BsCart2 className="w-5 h-5"/>
                </button>
            </div>
        </div>
    </nav>
  )
}
