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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M5 12l5 5 9-9" stroke="#5124c1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
    <section className="purple-wood-bg" style={{ padding: '70px 0 56px' }}>
      <div className="max-w-[1280px] mx-auto" style={{ padding: '0 40px' }}>
        <h2
          className="text-offline mb-2 reveal"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: '70px', letterSpacing: '0.28px' }}
        >
          Go big. We've got you.
        </h2>
        <p className="text-offline mb-10 reveal reveal-d1" style={{ fontSize: 24, fontWeight: 400, lineHeight: '36px' }}>
          How brands and creators grow with Later.
        </p>

        <div className="flex flex-wrap mb-0" role="tablist" style={{ gap: 0 }}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => setActiveTab(i)}
              className={`font-bold transition-all ${
                activeTab === i
                  ? 'text-charcoal'
                  : 'bg-transparent text-offline hover:bg-white/20'
              }`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 700,
                padding: '16px 24px',
                border: '1px solid #F8F2EA',
                marginBottom: -1,
                backgroundColor: activeTab === i ? '#F8F2EA' : 'transparent',
                clipPath: activeTab === i
                  ? 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)'
                  : 'none',
                position: 'relative',
                zIndex: activeTab === i ? 1 : 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="overflow-hidden reveal reveal-d2" style={{ backgroundColor: '#F8F2EA' }}>
          <div className="grid grid-cols-1 xl:grid-cols-12 min-h-[500px]">
            <div className="xl:col-span-7 flex flex-col justify-center" style={{ padding: '2.5rem' }}>
              <h3
                className="text-charcoal mb-2"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 38, fontWeight: 700, lineHeight: '47.5px', letterSpacing: '0.19px' }}
              >
                {tabs[activeTab].heading}
              </h3>
              <p className="text-charcoal/70 mb-6" style={{ fontSize: 18, lineHeight: '27px' }}>
                {tabs[activeTab].description}
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {tabs[activeTab].checks.map((check, i) => (
                  <div key={i} className="flex items-start gap-2 text-charcoal" style={{ fontSize: 18, fontWeight: 400, lineHeight: '27px' }}>
                    <CheckIcon />
                    {check}
                  </div>
                ))}
              </div>
              <a
                href={tabs[activeTab].link}
                className="inline-flex items-center gap-2 pb-1 hover:opacity-80 transition-opacity w-fit"
                style={{ fontSize: 16, fontWeight: 400, color: '#5124c1', borderBottom: '2px solid #5124c1' }}
              >
                Learn more <ArrowIcon />
              </a>
            </div>
            <div className="xl:col-span-5 relative">
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
