import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import UgcVideos from './components/UgcVideos'
import GoBigTabs from './components/GoBigTabs'
import AnimatedText from './components/AnimatedText'
import Stats from './components/Stats'
import EdgeAI from './components/EdgeAI'
import FullScreenVideo from './components/FullScreenVideo'
import CaseStudies from './components/CaseStudies'
import LatestContent from './components/LatestContent'
import Ticker from './components/Ticker'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="root-inner">
      <Navbar />
      <Hero />
      <div className="bg-secondary text-white text-center py-3 px-4" style={{ fontSize: 14 }}>
        <span className="font-medium">Later's AI creator matching connects your brand to creators who convert. </span>
        <a href="/ai-creator-matching/" className="underline font-bold hover:opacity-80">Learn more.</a>
      </div>
      <TrustedBy />
      <UgcVideos />
      <GoBigTabs />
      <AnimatedText />
      <Stats />
      <EdgeAI />
      <FullScreenVideo />
      <CaseStudies />
      <LatestContent />
      <Ticker />
      <FinalCta />
      <Footer />
      <a
        href="#root"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full border-2 border-charcoal bg-inverse flex items-center justify-center z-50 hover:opacity-80 transition-opacity"
        aria-label="Back to top"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 13V1M2 6l5-5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}

export default App
