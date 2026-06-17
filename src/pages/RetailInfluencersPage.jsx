function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const benefits = [
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1bvmWGQuOE7nrCC1FFjjtM/f64a1566f47ff9aca12901368e439541/icon-magnify-blue.png',
    title: 'Find best-fit collaborations',
    desc: 'Discover influencers who genuinely love your products and resonate with your target shoppers.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
    title: 'Boost your output',
    desc: 'Scale content production with creator partnerships that keep your brand top of mind in every aisle.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/6NZbEqE52cBL3Q4c624JyJ/d00a0d04c694c90be4db40b588f63f00/Later_Icon_PayoutRevenue.png',
    title: 'Get real ROI',
    desc: 'Attribute sales, track conversions, and measure true campaign impact on your bottom line.',
  },
]

const steps = [
  { num: '01', title: 'Campaign management', desc: 'Plan, launch, and manage influencer campaigns from brief to completion in one centralized platform.' },
  { num: '02', title: 'Generate ratings & reviews', desc: 'Drive authentic product reviews and star ratings through trusted creator partnerships.' },
  { num: '03', title: 'Reporting & analytics', desc: 'Track performance with real-time dashboards that measure impressions, engagement, and sales.' },
  { num: '04', title: 'User-generated content', desc: 'Collect and repurpose high-quality UGC across your marketing channels to drive conversions.' },
]

const stats = [
  {
    brand: 'MacKenzie-Childs',
    value: '146',
    label: 'Pieces of influencer-generated content',
  },
  {
    brand: 'COSMEDIX',
    value: '527%',
    label: 'Return on investment',
  },
  {
    brand: "Men's Wearhouse",
    value: '1.46M',
    label: 'Reached through creator content',
  },
]

const showcases = [
  {
    tag: 'Managed Services',
    title: 'Managed Services',
    desc: 'Partner with Later\'s team of influencer marketing experts who handle everything from strategy and creator sourcing to campaign execution and reporting. Scale your retail brand without scaling your team.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/62M1uhD1ylHNzB35brAQCf/43124ffeb5142d9125783a1f21c5650d/later-managed-services.png?w=1134&h=960&q=70&fm=png',
    imgAlt: 'Later managed services for retail',
  },
  {
    tag: 'Find Influencers',
    title: 'Find Influencers',
    desc: 'Search Later\'s database of 10M+ vetted creators. Filter by niche, audience demographics, engagement rate, and past brand partnerships to find the perfect match for your retail campaigns.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/2EZ91W9CVX36EaHvfWmUiB/adc9b0132cdb4f0288d1c9350922a53f/find-influencers-with-later.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Find influencers with Later',
  },
]

export default function RetailInfluencersPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-gridglow uppercase tracking-widest hero-enter"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}
              >
                Real ROI for Retail
              </p>
              <h1
                className="text-charcoal hero-enter-d1"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: '70px', letterSpacing: '0.28px', marginBottom: 24 }}
              >
                Level up your retail brand with influencer marketing
              </h1>
              <p
                className="hero-enter-d2"
                style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32, maxWidth: 520 }}
              >
                Drive foot traffic, boost online sales, and build lasting brand loyalty with influencer partnerships that deliver measurable retail results.
              </p>
              <a href="/influencer-marketing-services" className="btn-primary hero-enter-d3" style={{ fontSize: 16 }}>
                Book a demo <ArrowIcon />
              </a>
            </div>
            <div className="hero-enter-d3">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/73FbWodY1h2lRMyJASvbxR/959017c26e00e97c1852100d0dc369bf/retail-influencer-hero.png?w=1136&h=960&q=80&fm=png"
                alt="Retail influencer marketing hero"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} text-center`} style={{ padding: '40px 24px' }}>
                <img src={b.icon} alt="" style={{ width: 56, height: 56, margin: '0 auto 24px', objectFit: 'contain' }} />
                <h3 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}>
                  {b.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: '#555' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="wood-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
                How it works
              </p>
              <h2 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.15, marginBottom: 40 }}>
                How It Works
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {steps.map((s) => (
                  <div key={s.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span className="text-gridglow" style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, flexShrink: 0, marginTop: 2 }}>
                      {s.num}
                    </span>
                    <div>
                      <h4 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, lineHeight: 1.3, marginBottom: 4 }}>
                        {s.title}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: '#555' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-d1">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/3K7i9Fyn0je3rmweQzJkwv/341d56554503755ae8927b71fa13f2b9/retail-influencers-how-it-works.png?w=1136&h=960&q=70&fm=png"
                alt="How retail influencer marketing works"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Case Studies */}
      <section style={{ backgroundColor: '#000', padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <p className="text-offline/60 uppercase tracking-widest reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
            Proven Results
          </p>
          <h2 className="text-offline reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.15, maxWidth: 700, margin: '0 auto 48px' }}>
            Real results from retail brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
            {stats.map((s, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} border border-offline/10 p-10`}>
                <p className="text-offline/50 mb-4" style={{ fontSize: 14, fontWeight: 600 }}>{s.brand}</p>
                <div className="text-gridglow" style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1, marginBottom: 12 }}>
                  {s.value}
                </div>
                <p className="text-offline/60" style={{ fontSize: 16, lineHeight: 1.5 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcases */}
      {showcases.map((s, i) => {
        const reversed = i % 2 === 1
        return (
          <section key={i} style={{ backgroundColor: i % 2 === 0 ? '#FEFCFB' : '#F8F2EA', padding: '100px 0' }}>
            <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
                <div className={`reveal ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <p className="text-gridglow uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>
                    {s.tag}
                  </p>
                  <h2 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>
                    {s.desc}
                  </p>
                  <a href="/influencer-marketing-services" className="btn-outline" style={{ fontSize: 15 }}>
                    Learn more <ArrowIcon />
                  </a>
                </div>
                <div className={`reveal reveal-d1 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <img src={s.img} alt={s.imgAlt} style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Bottom CTA */}
      <section className="purple-wood-bg" style={{ padding: '120px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2 className="text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: 50, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Unlock real ROI with retail influencer marketing
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: 640, margin: '0 auto 36px' }}>
            Join leading retail brands using Later to turn influencer partnerships into measurable business growth.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  )
}
