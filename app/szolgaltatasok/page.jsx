import React from 'react'
import MainHero from '../components/UI/MainHero'
import FemlemezekInner from '../components/FemlemezekInner'
import SzolgaltatasokInner from '../components/SzolgaltatasokInner'

export default function SzolgaltatasokPage() {
  return (
    <>
    <MainHero title={"Szolgáltatások"} subtitle={"Professzionális szolgáltatások"} image={"/szolgaltatasok-hero.webp"}/>
    <SzolgaltatasokInner />
    </>
  )
}
