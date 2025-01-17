import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import VorosrezInner from '@/app/components/VorosrezInner'
import VorosrezTermekek from '@/app/components/VorosrezTermekek'

export default function VorosrezPage() {
  return (
    <>
    <MainHero title={"Vörösréz"} subtitle={""} image={"/vorosrez-hero.webp"}/>
    <VorosrezInner />
    <VorosrezTermekek />
    </>
  )
}
