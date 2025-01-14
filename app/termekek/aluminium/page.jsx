import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import AluminiumInner from '@/app/components/AluminiumInner'

export default function AluminiumPage() {
  return (
    <>
    <MainHero title={"Aluminium"} subtitle={""} image={"/aluminium-hero.webp"}/>
    <AluminiumInner />
    </>
  )
}
