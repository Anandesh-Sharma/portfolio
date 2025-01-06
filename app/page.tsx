'use client'

import { motion } from "framer-motion"
import ProfileCard from "@/components/ProfileCard"
import HeroSection from "@/components/HeroSection"
import RecentProjects from "@/components/RecentProjects"
import ExperienceSection from "@/components/ExperienceSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import BlogSection from '@/components/BlogSection'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
          <ProfileCard />
          <HeroSection />
        </div>
        <RecentProjects />
        <BlogSection />
        <ExperienceSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

