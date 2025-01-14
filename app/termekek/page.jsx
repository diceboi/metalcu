import React from 'react'
import MainHero from '../components/UI/MainHero'
import FemlemezekInner from '../components/FemlemezekInner'
import TermekekInner from '../components/TermekekInner'
import H2 from '../components/UI/Typo/H2'

export default function FemlemezekPage() {
  return (
    <>
    <MainHero title={"Termékek"} subtitle={"Válogass tetszés szerint"} image={"/femlemezek-hero.webp"}/>
    <section className="w-full px-4">
            <div className="container m-auto border-x border-b border-dashed border-[--grey-border] relative lg:px-0 px-4">
              <div className="flex flex-col gap-8 py-16 lg:px-8">
                <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
                  <H2>Termékeink</H2>
                </div>
                <TermekekInner />
              </div>
            </div>
          </section>
    </>
  )
}
