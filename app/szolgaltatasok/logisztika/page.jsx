import React from 'react'
import MainHero from '@/app/components/UI/MainHero'
import LogisztikaInner from '@/app/components/LogisztikaInner'

export default function LogisztikaPage() {
  return (
    <>
    <MainHero title={"Logisztika"} subtitle={"Pontos, hatékony"} image={"/logisztika-hero.webp"}/>
    <LogisztikaInner />
    </>
  )
}
