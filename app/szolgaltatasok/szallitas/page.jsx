import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import SzallitasInner from '@/app/components/SzallitasInner'

export default function SzallitasPage() {
  return (
    <>
    <MainHero title={"Szállítás"} subtitle={"Pontos, hatékony"} image={"/szallitas-hero.webp"}/>
    <SzallitasInner />
    </>
  )
}
