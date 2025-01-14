import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import FemlemezekInner from '@/app/components/FemlemezekInner'
import SzolgaltatasokInner from '@/app/components/SzolgaltatasokInner'
import DarabolasInner from '@/app/components/DarabolasInner'

export default function DarabolasPage() {
  return (
    <>
    <MainHero title={"Darabolás"} subtitle={""} image={"/darabolas-hero.webp"}/>
    <DarabolasInner />
    </>
  )
}
