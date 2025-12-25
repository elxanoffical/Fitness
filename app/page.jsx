import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'

export default function Home() {
  return (
   <section>
    <Navbar/>
    <Hero/>
    <Services/>
   </section>
  )
}
