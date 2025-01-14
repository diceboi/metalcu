import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import FoliazasInner from '@/app/components/FoliazasInner'

export default function FoliazasPage() {
  return (
    <>
    <MainHero title={"Fóliázás"} subtitle={"Fóliázás"} image={"/foliazas-hero.webp"}/>
    <FoliazasInner />
    </>
  )
}
