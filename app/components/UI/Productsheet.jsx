import { BsFiletypePdf } from "react-icons/bs";
import H1 from "./Typo/H1";
import H2 from "./Typo/H2";
import H3 from "./Typo/H3";
import Par from "./Typo/Par";
import Image from "next/image";
import Link from "next/link";
import AjanlatkeresButton from "./Buttons/AjanlatkeresButton";

export default function ProductSheet({ children }) {
  return (
    <div className='group relative flex lg:flex-row flex-col bg-[--product-bg] hover:border-b border-[--orange] shadow-special-2 w-full h-auto p-4 gap-8'>
        {children}
    </div>
  )
}
