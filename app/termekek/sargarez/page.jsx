import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import SargarezInner from '@/app/components/SargarezInner'
import SargarezTermekek from '@/app/components/SargarezTermekek'

export default function SargarezPage() {
  return (
    <>
    <MainHero title={"Sárgaréz"} subtitle={""} image={"/sargarez-hero.webp"}/>
    <SargarezInner />
    <SargarezTermekek />
    </>
  )
}
