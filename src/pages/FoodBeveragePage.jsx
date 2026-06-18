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
    title: 'Find the right influencers',
    desc: 'Discover food and beverage creators who authentically connect with your target audience and love your brand.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
    title: 'Boost your output',
    desc: 'Scale content production with creator partnerships that keep your products trending across every platform.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/6NZbEqE52cBL3Q4c624JyJ/d00a0d04c694c90be4db40b588f63f00/Later_Icon_PayoutRevenue.png',
    title: 'Get real ROI',
    desc: 'Track impressions, engagement, and conversions to prove the real business impact of every campaign.',
  },
]

const steps = [
  { num: '01', title: 'Increase brand awareness', desc: 'Get your food and beverage products in front of millions through authentic creator content that resonates.' },
  { num: '02', title: 'Build trust with customers', desc: 'Leverage trusted food influencers to create genuine endorsements that drive purchase intent.' },
  { num: '03', title: 'Learn as you grow', desc: 'Use real-time analytics and campaign insights to refine your strategy and improve results over time.' },
  { num: '04', title: 'Turn ratings into revenue', desc: 'Convert product reviews, taste tests, and recipe content into measurable sales and repeat customers.' },
]

const stats = [
  {
    brand: 'CLIF Bar',
    value: '21M+',
    label: 'Impressions',
  },
  {
    brand: "Totino's",
    value: '538K',
    label: 'Engagements',
  },
  {
    brand: "f'real foods",
    value: '36.45%',
    label: 'Engagement rate increase',
  },
]

const showcases = [
  {
    tag: 'Find Influencers',
    title: 'Find Influencers',
    desc: 'Connect with food and beverage creators who align with your brand values. Search Later\'s database of 10M+ creators filtered by niche, audience demographics, dietary focus, and engagement metrics.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/2pZN5jIfpwcwu8Elc1iOYM/c33dc2a259a0f126548cc02d440ee53c/find-influencers-with-later.png?w=1134&h=960&q=70&fm=png',
    imgAlt: 'Find food and beverage influencers',
  },
  {
    tag: 'Managed Services',
    title: 'Managed Services',
    desc: 'Let Later\'s team of influencer marketing experts run your food and beverage campaigns from start to finish. From strategy and creator sourcing to content approval and reporting, we handle it all.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/4nyM0m2itMrytwni9WcJsU/a162abba886b05a5ce41755a5663464e/later-managed-services.png?w=1134&h=960&q=70&fm=png',
    imgAlt: 'Later managed services for food and beverage',
  },
]

export default function FoodBeveragePage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-gridglow uppercase tracking-widest hero-enter"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}
              >
                Find Food &amp; Beverage Influencers
              </p>
              <h1
                className="text-charcoal hero-enter-d1"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: '70px', letterSpacing: '0.28px', marginBottom: 24 }}
              >
                Food influencers that serve up winning content
              </h1>
              <p
                className="hero-enter-d2"
                style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32, maxWidth: 520 }}
              >
                From recipe creators to food critics, partner with influencers who make your brand the main course. Drive awareness, trust, and sales with Later Influence.
              </p>
              <a href="/influencer-marketing-services" className="btn-primary hero-enter-d3" style={{ fontSize: 16 }}>
                Book a demo <ArrowIcon />
              </a>
            </div>
            <div className="hero-enter-d3">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/7xbRxtuiA1p28inqalwncS/9aae107053be0e52c5ff444c7b8f7e71/food-and-beverage-influencers.png?w=1136&h=960&q=80&fm=png"
                alt="Food and beverage influencers"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '80px 0' }}>
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

      {/* Why Choose Later Influence */}
      <section className="wood-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
                Why Later Influence
              </p>
              <h2 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
                Why Choose Later Influence?
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
                src="https://images.ctfassets.net/nfpsrlop6sws/4tCk97PLnIONTpNafa6PY2/66569a5f5078aa90bb29709d698c0e66/influencer-marketing-that-delivers.png?w=1136&h=960&q=70&fm=png"
                alt="Influencer marketing that delivers for food and beverage"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Case Studies */}
      <section style={{ backgroundColor: '#000', padding: '80px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <p className="text-offline/60 uppercase tracking-widest reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
            Proven Results
          </p>
          <h2 className="text-offline reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.15, maxWidth: 700, margin: '0 auto 48px' }}>
            Results that speak for themselves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
            {stats.map((s, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} text-center border border-offline/10 rounded-lg p-10`}>
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
          <section key={i} style={{ backgroundColor: i % 2 === 0 ? '#FEFCFB' : '#F8F2EA', padding: '80px 0' }}>
            <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
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
      <section className="purple-wood-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2 className="text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: 50, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Find your next best partnership today
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: 640, margin: '0 auto 36px' }}>
            Join leading food and beverage brands using Later to turn creator partnerships into real business growth.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  )
}
