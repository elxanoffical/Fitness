import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Home() {
  return (
   <section>
    <Navbar/>
    <Hero/>
    <div className='pt-20'>
      <h1 className='text-3xl font-bold text-center'>Welcome to Karabakh Fitness</h1>
    </div>
   </section>
  )
}
