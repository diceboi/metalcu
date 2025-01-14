import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import AcelInner from '@/app/components/AcelInner'

export default function AcelPage() {
  return (
    <>
    <MainHero title={"Acél"} subtitle={""} image={"/acel-hero.webp"}/>
    <AcelInner />
    </>
  )
}
