import React from 'react'
import MainHero from '../components/UI/MainHero'
import FemlemezekInner from '../components/FemlemezekInner'

export default function FemlemezekPage() {
  return (
    <>
    <MainHero title={"Fémlemezek"} subtitle={"Válogass tetszés szerint"} image={"/femlemezek-hero.webp"}/>
    <FemlemezekInner />
    </>
  )
}
