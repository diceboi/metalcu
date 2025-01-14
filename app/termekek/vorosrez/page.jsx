import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import VorosrezInner from '@/app/components/VorosrezInner'

export default function VorosrezPage() {
  return (
    <>
    <MainHero title={"Vörösréz"} subtitle={""} image={"/vorosrez-hero.webp"}/>
    <VorosrezInner />
    </>
  )
}
