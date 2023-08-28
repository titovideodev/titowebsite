"use client"
import Blog from '@/components/Blog'
import Brands from '@/components/Brands'
import ScrollUp from '@/components/Common/ScrollUp'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import UserInfo from '@/components/UserInfo'
import Team from '@/components/Team'
import Image from 'next/image'


export default function Home() {
  return (
    <>
     <ScrollUp />
      <Hero />
      <Features />
      <Team/>
      <Portfolio />
      <Testimonials />
      <Brands />
      <Blog />
      <Contact />
   </>
  )
}
