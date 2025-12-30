import HeroSlider from '@/components/HeroSlider'
import TrustFeatures from '@/components/TrustFeatures'
import ExperienceStats from '@/components/ExperienceStats'
import ServicesGrid from '@/components/ServicesGrid'
import FAQs from '@/components/FAQs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ServicesGrid />
      <TrustFeatures />
      <ExperienceStats />
      <FAQs />
      <Footer />
    </main>
  )
}

