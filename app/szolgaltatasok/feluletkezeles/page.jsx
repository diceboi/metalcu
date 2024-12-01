import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import FemlemezekInner from '@/app/components/FemlemezekInner'
import SzolgaltatasokInner from '@/app/components/SzolgaltatasokInner'
import FeluletkezelesInner from '@/app/components/FeluletkezelesInner'

export default function FeluletkezelesPage() {
  return (
    <>
    <MainHero title={"Felületkezelés"} subtitle={"Tökéletes végeredmény"} image={"/szolgaltatasok-hero.webp"}/>
    <FeluletkezelesInner />
    </>
  )
}
