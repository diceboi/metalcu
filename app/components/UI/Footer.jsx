import Image from "next/image"
import Par from "./Typo/Par"
import H3 from "./Typo/H3"
import Label from "./Typo/Label"
import Link from "next/link"
import { TbArrowBigRightLines, TbAnchor, TbPhone, TbMail, TbUsersGroup, TbClock  } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import GoogleMaps from "../GoogleMaps"

export default function Footer() {
  return (
    <section className="w-full py-16 mt-16 bg-[--grey]">
        <div className="container m-auto px-4">
            <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-16 gap-8">
                <div className="flex flex-col gap-4">
                    <Image src="/logos/metalcu-black-logo.svg" width={200} height={100} alt="logo"/>
                    <div className="w-full h-[200px] mt-8">
                        <GoogleMaps />
                    </div>
                    <Par>2051 Biatorbágy Rozália Park 11.</Par>
                    <Label classname={" opacity-40"}>MetAlCu 2024 @ Minden jog fenntartva</Label>
                    
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-nowrap gap-2 items-center">
                        <TbClock  className=" bg-[--cream-25] min-w-8 min-h-8 p-1 rounded-full"/>
                        <H3 classname={""}>Nyitvatartás</H3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Par>Nyitvatartás:</Par>
                        <Label>H-CS 7:00-15:30,</Label>
                        <Label>P 7:00-14:30</Label>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-nowrap gap-2 items-center">
                        <TbArrowBigRightLines className=" bg-[--cream-25] min-w-8 min-h-8 p-1 rounded-full"/>
                        <H3 classname={""}>Gyors elérés</H3>
                    </div>

                    <ul className="flex flex-col justify-start gap-2 ">
                        <li><Link href={"/"}><Label classname={"hover:text-white cursor-pointer"}>Fizetési módok</Label></Link></li>
                        <li><Link href={"/"}><Label classname={"hover:text-white cursor-pointer"}>ÁSZF</Label></Link></li>
                        <li><Link href={"/"}><Label classname={"hover:text-white cursor-pointer"}>Adatkezelési tájékoztató</Label></Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-nowrap gap-2 items-center">
                        <TbAnchor className=" bg-[--cream-25] min-w-8 min-h-8 p-1 rounded-full"/>
                        <H3 classname={""}>Fontos linkek</H3>
                    </div>
                    
                    <ul className="flex flex-col justify-start gap-2 ">
                        <li><Link href={"https://www.lme.com/en/Metals/Non-ferrous"} target="__blank"><Label classname={"hover:text-white cursor-pointer"}>London Metal Exchange</Label></Link></li>
                        <li><Link href={"https://www.mnb.hu/arfolyamok"} target="_-blank"><Label classname={"hover:text-white cursor-pointer"}>Deviza árfolyamok</Label></Link></li>
                        <li><Link href={"/kapcsolat"}><Label classname={"hover:text-white cursor-pointer"}>Kapcsolat</Label></Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-nowrap gap-2 items-center">
                        <TbUsersGroup className=" bg-[--cream-25] min-w-8 min-h-8 p-1 rounded-full"/>
                        <H3 classname={""}>Elérhetőségek</H3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-nowrap gap-2 items-center">
                            <TbPhone className=" bg-[--cream-25] min-w-5 min-h-5 p-1 rounded-full"/>
                            <a href="tel:+36301234567"><Label classname={" hover:text-white cursor-pointer"}>+36 30 123 4567</Label></a>
                        </div>
                        <div className="flex flex-nowrap gap-2 items-center">
                            <TbMail className=" bg-[--cream-25] min-w-5 min-h-5 p-1 rounded-full"/>
                            <a href="mailto:info@metalcu.hu"><Label classname={" hover:text-white cursor-pointer"}>info@metalcu.hu</Label></a>
                        </div>
                    </div>

                    {/*<div className="flex flex-col gap-2">
                        <Label classname={""}>Biztonságos fizetés a <b>Stripe</b> által</Label>
                        <Link href={"https://stripe.com"} target="__blank"><Image src={"/Powered by Stripe - white.svg"} width={150} height={75}/></Link>
                    </div>*/}
                </div>
            </div>
        </div>
    </section>
  )
}
