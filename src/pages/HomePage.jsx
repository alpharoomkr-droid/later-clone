import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import UgcVideos from '../components/UgcVideos'
import GoBigTabs from '../components/GoBigTabs'
import AnimatedText from '../components/AnimatedText'
import Stats from '../components/Stats'
import EdgeAI from '../components/EdgeAI'
import FullScreenVideo from '../components/FullScreenVideo'
import CaseStudies from '../components/CaseStudies'
import LatestContent from '../components/LatestContent'
import Ticker from '../components/Ticker'
import FinalCta from '../components/FinalCta'

export default function HomePage() {
  return (
    <>
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
      <FinalCta />
      <Ticker />
    </>
  )
}
