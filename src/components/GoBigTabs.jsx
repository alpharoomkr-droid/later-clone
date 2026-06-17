import { useState } from 'react'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M4 10l4 4 8-8" stroke="#FE3F00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const tabs = [
  {
    label: 'Full-service programs',
    heading: 'Full-service programs',
    description: 'Get a team to plan, produce, and manage your creator campaigns.',
    checks: ['Strategy built by experts', 'Top content amplified', 'Creators sourced and managed', 'Performance tracked and optimized'],
    link: '/influencer-marketing-services/',
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-2.1-GoBig.mp4',
  },
  {
    label: 'Earn as a creator',
    heading: 'Earn as a creator',
    description: 'Turn your everyday content into income with Mavely.',
    checks: ['Earn from day one', 'Work with world-class brands', 'Create shoppable links', 'Faster payouts'],
    link: '/influencer-creator-program/',
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-2.2-GoBig.mp4',
  },
  {
    label: 'Influencer marketing software',
    heading: 'Influencer marketing software',
    description: 'Run influencer campaigns that drive real results.',
    checks: ['Find the right creators', 'Set fair creator rates', 'Check brand fit and risk', 'Track sales and ROI'],
    link: '/influencer-marketing-platform/',
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-2.3-GoBig.mp4',
  },
  {
    label: 'Social media management',
    heading: 'Social media management',
    description: 'Plan, schedule, and analyze all your content in one place.',
    checks: ['Plan and publish content', 'See what performs', 'Turn content into traffic with Link in Bio', 'Content creation tools'],
    link: '/social-media-scheduler/',
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-2.4-GoBig.mp4',
  },
]

export default function GoBigTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="purple-wood-bg" style={{ padding: '80px 0 56px' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
        <h2
          className="text-offline mb-2"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: '70px', letterSpacing: '0.28px' }}
        >
          Go big. We've got you.
        </h2>
        <p className="text-offline mb-10" style={{ fontSize: 24, fontWeight: 400, lineHeight: '36px' }}>
          How brands and creators grow with Later.
        </p>

        <div className="flex flex-wrap gap-2 mb-0" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => setActiveTab(i)}
              className={`font-bold transition-all ${
                activeTab === i
                  ? 'bg-offline text-charcoal'
                  : 'bg-transparent text-offline hover:bg-white/20'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, padding: '16px 24px' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-secondary overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3
                className="text-white mb-2"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 38, fontWeight: 700, lineHeight: '47.5px', letterSpacing: '0.19px' }}
              >
                {tabs[activeTab].heading}
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: 18, lineHeight: '27px' }}>
                {tabs[activeTab].description}
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {tabs[activeTab].checks.map((check, i) => (
                  <div key={i} className="flex items-start gap-2 text-white" style={{ fontSize: 18, fontWeight: 400, lineHeight: '27px' }}>
                    <CheckIcon />
                    {check}
                  </div>
                ))}
              </div>
              <a href={tabs[activeTab].link} className="inline-flex items-center gap-2 text-gridglow border-b-2 border-gridglow pb-1 hover:opacity-80 transition-opacity w-fit" style={{ fontSize: 16, fontWeight: 400 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
            <div className="relative">
              <video
                key={activeTab}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[500px]"
              >
                <source src={tabs[activeTab].video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
