import { useState } from 'react'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const logos = [
  { name: 'Wayfair', src: 'https://later.com/images/logos/rebrand/wayfair.png' },
  { name: 'Nike', src: 'https://later.com/images/logos/rebrand/NIKE.png' },
  { name: 'Southwest', src: 'https://later.com/images/logos/rebrand/southwest.png' },
  { name: 'Crumbl', src: 'https://later.com/images/logos/rebrand/crumbl.png' },
  { name: 'Make-A-Wish', src: 'https://later.com/images/logos/rebrand/makeawish.png' },
  { name: 'Habit Burger', src: 'https://later.com/images/logos/rebrand/habitburger.png' },
  { name: 'Unilever', src: 'https://later.com/images/logos/rebrand/unilever.png' },
  { name: 'KiwiCo', src: 'https://later.com/images/logos/rebrand/kiwico.png' },
  { name: 'El Pollo Loco', src: 'https://later.com/images/logos/rebrand/elpolloloco.png' },
  { name: 'Chewy', src: 'https://later.com/images/logos/rebrand/chewy.png' },
  { name: 'Tapatio', src: 'https://later.com/images/logos/rebrand/tapatio.png' },
  { name: 'MacKenzie-Childs', src: 'https://later.com/images/logos/rebrand/mackenzie.png' },
  { name: 'At Home', src: 'https://later.com/images/logos/rebrand/athome.png' },
]

const features = [
  {
    title: 'Work with creators who perform',
    desc: 'We partner directly with creators we know, making it easier to secure the right fit for your brand and campaign.',
  },
  {
    title: 'Clarity at every step',
    desc: 'We manage the work with full visibility, so performance, spend, and decisions are always clear.',
  },
  {
    title: 'Turn data into doing',
    desc: 'We use real campaign and sales data with AI intelligence to show what’s working and how to scale.',
  },
]

const steps = [
  {
    title: 'Campaign strategy',
    desc: 'We align on the outcome. Then we build a strategy to support it.',
  },
  {
    title: 'Creator selection',
    desc: 'We choose creators who fit. Then we secure the ones who perform.',
  },
  {
    title: 'Content and scale',
    desc: 'Creators make content that works. We activate it at scale.',
  },
  {
    title: 'Reporting and ROI',
    desc: 'We show what’s working. Then we help you do more of it.',
  },
]

const impactStats = [
  { value: '3x', label: 'more content per campaign' },
  { value: '5x', label: 'more creators per campaign' },
  { value: '40%', label: 'lower spend per creator' },
]

const testimonials = [
  {
    quote: 'At El Pollo Loco, we aspire to be at the forefront of culture. Later enables us to do just that, ensuring every dollar works hard to drive results for our brand and business.',
    name: 'Gabe Alonso',
    role: 'VP, Integrated Marketing & Experience',
    logo: 'https://later.com/images/logos/rebrand/elpolloloco.svg',
    stats: [
      { value: '46.7M', label: 'Total campaign impressions' },
      { value: '2.2%', label: 'Average engagement rate' },
    ],
  },
  {
    quote: 'The Later team made sure to learn the target consumer. They cast a net to those in their network who fit this persona, and from there, helped us in securing the influencers that would lead this campaign.',
    name: 'Martha Peppes',
    role: 'Associate Marketing Manager',
    logo: 'https://later.com/images/logos/rebrand/reebok.svg',
    stats: [
      { value: '928.6K', label: 'Total campaign impressions' },
      { value: '55.6K', label: 'Average engagement rate' },
    ],
  },
]

const tickerItems = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/3LQWEaltVOsIF1UopihBI6/dc565201add57143f63621ecb525f545/icon-heart.png?fm=webp', text: 'Internet-Approved' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/66i7AxJ0QfJgY8M9Myk61x/89488c1bbad1184403ad7a82bbe797a2/icon-fire.png?fm=webp', text: 'Main Feed Energy' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7j1v2yvOs0ur6c2TObCuWJ/72684773d4797d449e0877e161fc473e/icon-link-in-bio.png?fm=webp', text: 'Link In Bio' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/58qKPgNhwv6zDpjevLcfCs/0e98cd7a5b6b5d67bc141a0e50ba9ec1/icon-lightning.png?fm=webp', text: 'IYKYK' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/3Gg6oAuJ8M7Tm566oQmBxN/5337083ad624232918412c56f5e6da72/icon-campaign-rocket.png?fm=webp', text: 'Campaign Loading' },
]

function TickerSet() {
  return (
    <>
      {tickerItems.map((item, i) => (
        <div key={i} className="flex items-center gap-4 flex-shrink-0 mx-6">
          <img src={item.icon} alt="" className="w-7 h-7" />
          <span className="text-gridglow text-2xl lg:text-3xl font-extrabold uppercase whitespace-nowrap leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {item.text}
          </span>
        </div>
      ))}
    </>
  )
}

function LogoSet() {
  return (
    <>
      {logos.map((logo, i) => (
        <div key={i} className="flex-shrink-0 mx-8">
          <img src={logo.src} alt={logo.name} className="h-[32px] w-auto object-contain opacity-70" loading="lazy" />
        </div>
      ))}
    </>
  )
}

export default function InfluencerMarketingServicesPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h1
                className="text-charcoal hero-enter"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(48px, 5vw, 76px)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '0.38px',
                  marginBottom: 28,
                }}
              >
                Influencer programs that do more than look good.
              </h1>
              <p
                className="text-charcoal hero-enter-d1"
                style={{ fontSize: 20, fontWeight: 400, lineHeight: '30px', maxWidth: 540, marginBottom: 36 }}
              >
                We strategize, produce, and manage campaigns end to end, removing guesswork at every stage of the funnel.
              </p>
              <div className="hero-enter-d2">
                <a href="/pricing" className="btn-primary" style={{ fontSize: 18 }}>
                  Let&rsquo;s talk strategy <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="hero-enter-d3">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-charcoal/5">
                <img
                  src="https://images.ctfassets.net/nfpsrlop6sws/45Vk1pKDRiLbBlRiQEWC5X/ea32e64edd6d607565c1a7f6a4330f00/later-homepage-hero-image.png?fm=webp"
                  alt="A reel of influencer marketing creative produced by Later"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker */}
      <section className="reveal overflow-hidden py-8" style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="flex items-center whitespace-nowrap ticker-animate">
          <LogoSet />
          <LogoSet />
          <LogoSet />
          <LogoSet />
        </div>
      </section>

      {/* The work hits different */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto text-center" style={{ padding: '0 20px' }}>
          <h2
            className="text-charcoal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '0.3px',
              maxWidth: 800,
              margin: '0 auto 48px',
            }}
          >
            The work hits different when it&rsquo;s done right.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} h-full text-left`}
                style={{ padding: '36px 28px', backgroundColor: '#F8F2EA', borderRadius: 12 }}
              >
                <h3
                  className="text-charcoal"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 26,
                    fontWeight: 900,
                    lineHeight: '32px',
                    marginBottom: 14,
                  }}
                >
                  {f.title}
                </h3>
                <p className="text-charcoal/70" style={{ fontSize: 17, lineHeight: '26px' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From idea to outcome */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <h2
            className="text-charcoal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '0.3px',
              marginBottom: 32,
            }}
          >
            From idea to outcome.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="reveal">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="w-full text-left"
                  style={{
                    padding: '24px 0',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.12)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-charcoal/30"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 26,
                        fontWeight: 900,
                        lineHeight: '32px',
                        color: activeStep === i ? '#000' : 'rgba(0,0,0,0.4)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      maxHeight: activeStep === i ? 120 : 0,
                      opacity: activeStep === i ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, opacity 0.3s ease',
                      paddingLeft: 44,
                    }}
                  >
                    <p className="text-charcoal/70" style={{ fontSize: 17, lineHeight: '26px', paddingTop: 10 }}>
                      {step.desc}
                    </p>
                  </div>
                </button>
              ))}
              <div style={{ marginTop: 36 }}>
                <a href="/pricing" className="btn-primary" style={{ fontSize: 18 }}>
                  Let&rsquo;s talk strategy <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="reveal reveal-d2">
              <div
                className="w-full aspect-square rounded-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #F8F2EA 0%, #FE3F00 50%, #7A63E8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 120,
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.25)',
                  }}
                >
                  {String(activeStep + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto text-center" style={{ padding: '0 20px' }}>
          <h2
            className="text-charcoal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '0.3px',
              maxWidth: 700,
              margin: '0 auto 16px',
            }}
          >
            The impact of having the right team.
          </h2>
          <p className="text-charcoal/60 reveal reveal-d1" style={{ fontSize: 20, lineHeight: '30px', maxWidth: 600, margin: '0 auto 48px' }}>
            When brands partner with our experts, the results speak for themselves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <h3
                  className="text-gridglow"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(56px, 5vw, 80px)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: '0.4px',
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </h3>
                <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '26px', fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-charcoal/40 reveal" style={{ fontSize: 13, marginTop: 36 }}>
            Source: Internal Later campaign data (2025) based on managed services vs. self-serve customer analysis. These are averages and will vary by campaign.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="reveal" style={{ backgroundColor: '#000', padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <h2
            className="text-offline text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 900,
              lineHeight: 1.14,
              letterSpacing: '0.28px',
              marginBottom: 40,
            }}
          >
            Straight from the feed.
          </h2>
          <div className="max-w-4xl mx-auto reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mb-6">
                  <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3"/>
                </svg>
                <p className="text-offline/90 mb-8" style={{ fontSize: 22, lineHeight: '34px' }}>
                  {testimonials[activeTestimonial].quote}
                </p>
                <p className="font-bold text-offline" style={{ fontSize: 16 }}>{testimonials[activeTestimonial].name}</p>
                <p className="text-offline/60 mb-4" style={{ fontSize: 14 }}>{testimonials[activeTestimonial].role}</p>
                <img
                  src={testimonials[activeTestimonial].logo}
                  alt=""
                  className="h-6 w-auto object-contain opacity-60"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                {testimonials[activeTestimonial].stats.map((s, j) => (
                  <div key={j} className="border border-offline/10 rounded-lg p-5">
                    <div
                      className="text-gridglow"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.1 }}
                    >
                      {s.value}
                    </div>
                    <p className="text-offline/60 mt-2" style={{ fontSize: 14, lineHeight: '20px' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="transition-all"
                  style={{
                    width: activeTestimonial === i ? 32 : 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: activeTestimonial === i ? '#FE3F00' : 'rgba(248,242,234,0.3)',
                  }}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <h2
            className="text-charcoal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 900,
              lineHeight: 1.14,
              letterSpacing: '0.28px',
              marginBottom: 28,
            }}
          >
            Resources for better campaigns.
          </h2>
          <div className="reveal reveal-d1">
            <a
              href="https://later.com/resources/report/state-of-influencer/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-lg overflow-hidden hover:opacity-95 transition-opacity"
              style={{ backgroundColor: '#F8F2EA', textDecoration: 'none' }}
            >
              <div className="overflow-hidden aspect-[4/3] lg:aspect-auto">
                <img
                  src="https://images.ctfassets.net/nfpsrlop6sws/3YpPgpAo7omQsRCNp8DfWv/da8efc771126b48d675339a45fcf6fb4/featured-3.jpg"
                  alt="2025 State of Influencer Marketing report cover"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-gridglow" style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Report
                </p>
                <h3
                  className="text-charcoal"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 2.5vw, 32px)',
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  The Strategic Turning Point: 2025 State of Influencer Marketing
                </h3>
                <span className="text-gridglow inline-flex items-center gap-2" style={{ fontSize: 16, fontWeight: 700 }}>
                  Read the report <ArrowIcon />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Ticker */}
      <section className="reveal bg-inverse py-5 overflow-hidden" style={{ padding: '70px 0' }}>
        <div className="flex items-center whitespace-nowrap ticker-animate">
          <TickerSet />
          <TickerSet />
          <TickerSet />
          <TickerSet />
        </div>
      </section>

      {/* Final CTA */}
      <section className="reveal purple-wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 5vw, 70px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '0.35px',
              color: '#FEFCFB',
              marginBottom: 32,
            }}
          >
            Fearless creative. Smart execution.
          </h2>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 18 }}>
            Let&rsquo;s talk strategy <ArrowIcon />
          </a>
        </div>
      </section>

    </div>
  )
}
