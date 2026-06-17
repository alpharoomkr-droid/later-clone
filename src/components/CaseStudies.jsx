import { useState } from 'react'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const cases = [
  {
    name: 'At Home',
    person: 'Kelly Linthicum',
    role: 'Manager of Influencer & PR',
    quote: 'Our creators are customers first, and we trust they know what resonates with spooky fans. By giving them ownership of the creative process, we produce content that\'s authentic and successful for both the brand and our talent partners.',
    stat1: { value: '1.4M', label: 'Total campaign impressions' },
    stat2: { value: '7.5%', label: 'Average engagement rate' },
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-Testimonial-1.mp4',
  },
  {
    name: 'El Pollo Loco',
    person: 'Gabe Alonso',
    role: 'VP Integrated Marketing & Experience',
    quote: 'At El Pollo Loco, we aspire to be at the forefront of culture. Later enables us to do just that, ensuring every dollar works hard to drive results for our brand and business.',
    stat1: { value: '46.7M', label: 'Total campaign impressions' },
    stat2: { value: '2.2%', label: 'Avg. Engagement rate' },
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-Testimonial-2.mp4',
  },
  {
    name: 'Crumbl',
    person: 'Nicole Mackelprang',
    role: 'Director of Paid Media',
    quote: 'The support from Later was incredible. They made the process seamless, from recommending influencers to coordinating content approvals. It felt like they were part of our team.',
    stat1: { value: '39.7M', label: 'Total campaign impressions' },
    stat2: { value: '$1.2M', label: 'In Earned Media Value' },
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-Testimonial-3.mp4',
  },
  {
    name: 'Tapatio',
    person: 'Arturo Escalera',
    role: 'Creative Art & Marketing Manager',
    quote: "For the first time ever, our Shopify sales surpassed Amazon. That's a major milestone—and a direct result of this campaign.",
    stat1: { value: '1.2M', label: 'Total organic impressions' },
    stat2: { value: '19%', label: 'Purchase rate' },
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-Testimonial-4.mp4',
  },
  {
    name: 'Habit Burger & Grill',
    person: 'Jack Lettenmair',
    role: 'Director of Brand & Product',
    quote: "We didn't just want to show up—we wanted to be part of the weekend. The creators made that happen.",
    stat1: { value: '10.5M', label: 'Total impressions' },
    stat2: { value: '186K', label: 'Total engagement' },
    video: 'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-Testimonial-5.mp4',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)

  return (
    <section className="text-white" style={{ backgroundColor: 'rgb(0,0,0)', padding: '140px 40px 70px' }}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-10">
        <div className="xl:col-span-4">
          <p className="text-white/60 mb-6" style={{ fontSize: 18, fontWeight: 500 }}>Our Work</p>
          <div className="flex flex-row xl:flex-col flex-wrap gap-2 mb-8">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left transition-all py-2 ${
                  active === i ? 'text-white' : 'text-white/30 hover:text-white/60'
                }`}
                style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 900 }}
              >
                {c.name}
              </button>
            ))}
          </div>
          <a href="/case-studies/" className="inline-flex items-center gap-2 text-gridglow font-bold border-b border-gridglow/50 pb-1 hover:border-gridglow transition-colors">
            View all case studies <ArrowIcon />
          </a>
        </div>

        <div className="xl:col-span-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-[9/16] max-h-[500px] overflow-hidden bg-charcoal">
              <video
                key={active}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={cases[active].video} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mb-4">
                  <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3"/>
                </svg>
                <p className="text-offline/90 leading-relaxed mb-6" style={{ fontSize: 20, lineHeight: '32px' }}>
                  {cases[active].quote}
                </p>
                <p className="font-bold text-white">{cases[active].person}</p>
                <p className="text-white/60" style={{ fontSize: 14 }}>{cases[active].role}</p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
                <div>
                  <div
                    className="text-gridglow"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900 }}
                  >
                    {cases[active].stat1.value}
                  </div>
                  <p className="text-white/60 mt-1" style={{ fontSize: 14 }}>{cases[active].stat1.label}</p>
                </div>
                <div>
                  <div
                    className="text-gridglow"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900 }}
                  >
                    {cases[active].stat2.value}
                  </div>
                  <p className="text-white/60 mt-1" style={{ fontSize: 14 }}>{cases[active].stat2.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
