import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Trainers from '@/components/Trainers'
import Gallery from '@/components/Gallery'
import React from 'react'
import Contact from '@/components/ContactSection'

export default function Home() {
  return (
   <section>
    <Hero/>
    <Services/>
    <Trainers/>
    <Gallery/>
    <Contact/>
   </section>
  )
}
