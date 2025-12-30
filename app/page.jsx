import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Trainers from '@/components/Trainers'
import Gallery from '@/components/Gallery'
import React from 'react'
import Contact from '@/components/Contact'

export default function Home() {
  return (
   <section>
    <Navbar/>
    <Hero/>
    <Services/>
    <Trainers/>
    <Gallery/>
    <Contact/>
   </section>
  )
}
