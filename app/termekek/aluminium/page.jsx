import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import AluminiumInner from '@/app/components/AluminiumInner'
import AluminiumTermekek from '@/app/components/AluminiumTermekek'

export default function AluminiumPage() {
  return (
    <>
    <MainHero title={"Aluminium"} subtitle={""} image={"/aluminium-hero.webp"}/>
    <AluminiumInner />
    <AluminiumTermekek />
    </>
  )
}
