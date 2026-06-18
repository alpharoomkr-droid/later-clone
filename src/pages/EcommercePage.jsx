function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const benefits = [
  {
    title: 'Find the right e-commerce influencers',
    desc: 'Search 10M+ influencers by audience, engagement, and niche to find creators who drive real purchases.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1bvmWGQuOE7nrCC1FFjjtM/f64a1566f47ff9aca12901368e439541/icon-magnify-blue.png',
  },
  {
    title: 'Manage influencer campaigns',
    desc: 'Recruit, communicate, approve content, and pay creators all from a single, streamlined platform.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/4biG0qn6WRvNYFiAZOY09Y/9e84d0713d8bbf1fa003af05ec2482cd/Later_Icon_SocialMediaMgmt.png',
  },
  {
    title: 'Get real ROI',
    desc: 'Track conversions, revenue, and engagement to prove the value of every influencer dollar spent.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/6NZbEqE52cBL3Q4c624JyJ/d00a0d04c694c90be4db40b588f63f00/Later_Icon_PayoutRevenue.png',
  },
]

const steps = [
  { num: '01', title: 'Manage communication', desc: 'Keep all influencer conversations in one place with built-in messaging and automated outreach.' },
  { num: '02', title: 'Manage campaigns in one place', desc: 'Track deliverables, timelines, approvals, and payments without juggling spreadsheets.' },
  { num: '03', title: 'Turn ratings into revenue', desc: 'Collect authentic product ratings and reviews from influencers to boost conversion rates.' },
  { num: '04', title: 'Measure, report, optimize', desc: 'Get real-time analytics and custom reports that prove ROI and inform your next campaign.' },
]

const caseStudies = [
  {
    logo: 'https://images.ctfassets.net/nfpsrlop6sws/xnZVHDBpsSLsgEVl4cNbV/3ec1f0e84fdbe4b7cc323f646919de3f/ecommerce-influencers-jansport.png?w=175&h=175&q=100&fm=png',
    brand: 'JanSport',
    value: '1.3M',
    label: 'impressions on TikTok',
    desc: 'JanSport partnered with Later to launch a TikTok-first influencer campaign that drove massive brand awareness among Gen Z shoppers.',
  },
  {
    logo: 'https://images.ctfassets.net/nfpsrlop6sws/5EzvVe6MltRNdPsPESMAEB/1b028241053abb8c1566fd209fdba1c1/ecommerce-influencers-mackenzie-child.png?w=175&h=175&q=100&fm=png',
    brand: 'Mackenzie-Childs',
    value: '566K',
    label: 'impressions in holiday campaign',
    desc: 'Mackenzie-Childs used Later Influence to run a holiday gifting campaign that generated exceptional engagement and brand lift.',
  },
]

export default function EcommercePage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center">
          <p
            className="text-charcoal/60 uppercase tracking-widest hero-enter"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Find E-Commerce Influencers
          </p>
          <h1
            className="text-charcoal hero-enter-d1"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 64,
              fontWeight: 900,
              lineHeight: '80px',
              letterSpacing: '0.32px',
              maxWidth: 860,
              margin: '0 auto 24px',
            }}
          >
            Influencer marketing for e-commerce and D2C brands
          </h1>
          <p
            className="hero-enter-d2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 680,
              margin: '0 auto 32px',
              color: '#333',
            }}
          >
            Drive sales and grow your e-commerce brand with award-winning influencer
            marketing services and a platform built for results.
          </p>
          <a
            href="/influencer-marketing-services"
            className="btn-primary hero-enter-d3"
            style={{ fontSize: 16, marginBottom: 28, display: 'inline-block' }}
          >
            Book a demo
          </a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1DXhh9wGlQpmjvQ8r6LL1B/c84770fcdde2e1428ba4bf50ac5884fc/ecommerce-hero-2.png?w=1136&h=960&q=80&fm=png"
              alt="E-commerce influencer marketing"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} text-center`} style={{ padding: '40px 24px' }}>
                <img
                  src={b.icon}
                  alt=""
                  style={{ width: 56, height: 56, margin: '0 auto 24px', objectFit: 'contain' }}
                />
                <h3
                  className="text-charcoal"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}
                >
                  {b.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: '#555' }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p
                className="text-charcoal/60 uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
              >
                Later Influence
              </p>
              <h2
                className="text-charcoal"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 44,
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: 24,
                }}
              >
                E-Commerce Influencer Marketing
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {steps.map((s) => (
                  <div key={s.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span
                      className="text-gridglow"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, flexShrink: 0, marginTop: 2 }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <h4
                        className="text-charcoal"
                        style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, lineHeight: 1.3, marginBottom: 4 }}
                      >
                        {s.title}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: '#555' }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-d1">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/4Wdw8DwWCMR5TxkNEIXKje/a3f0df75510448d1a83a948aed8ab1d8/ecommerce-influencer-marketing.png?w=1136&h=960&q=70&fm=png"
                alt="E-commerce influencer marketing steps"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ backgroundColor: '#000', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <p
            className="text-offline/60 uppercase tracking-widest reveal"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Case Studies
          </p>
          <h2
            className="text-offline reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 44,
              fontWeight: 900,
              lineHeight: 1.15,
              maxWidth: 700,
              margin: '0 auto 48px',
            }}
          >
            Real results from real brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto reveal">
            {caseStudies.map((cs, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <img
                  src={cs.logo}
                  alt={cs.brand}
                  style={{ width: 64, height: 64, objectFit: 'contain', margin: '0 auto 20px', borderRadius: 8 }}
                />
                <div
                  className="text-gridglow"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 52, fontWeight: 900, lineHeight: 1 }}
                >
                  {cs.value}
                </div>
                <p className="text-offline/80 mt-2 mb-4" style={{ fontSize: 16, fontWeight: 600 }}>
                  {cs.label}
                </p>
                <p className="text-offline/60" style={{ fontSize: 14, lineHeight: 1.5 }}>
                  {cs.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Influencers */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p
                className="text-gridglow uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
              >
                Find Influencers
              </p>
              <h2
                className="text-charcoal"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
              >
                Collaborate with e-commerce creators
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>
                Access a curated database of creators who specialize in product-focused content.
                Filter by platform, audience demographics, and past performance to find the perfect
                match for your e-commerce brand.
              </p>
              <a href="/find-influencers" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
            <div className="reveal reveal-d1">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/2ScqnLMAKu30Qq4ESwaktJ/a46dc3269e4ea6182a303b20cf768ce4/find-influencers-with-later.png?w=1136&h=960&q=70&fm=png"
                alt="Find e-commerce influencers"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ratings & Reviews */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:[direction:rtl]">
            <div className="reveal lg:[direction:ltr]">
              <p
                className="text-gridglow uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
              >
                Social Proof
              </p>
              <h2
                className="text-charcoal"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
              >
                Ratings &amp; Reviews
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>
                Collect authentic ratings and reviews from influencers who have tried your
                products. Build social proof that converts browsers into buyers and boosts
                your product pages.
              </p>
              <a href="/influencer-marketing-services" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
            <div className="reveal reveal-d1 lg:[direction:ltr]">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/1y1wwGc9Bzkjpyl6kk9K0E/1a15b89cfc4fdc2a954bcf3a173aaf54/ratings-and-reviews.png?w=1132&h=960&q=70&fm=png"
                alt="Ratings and reviews"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="purple-wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2
            className="text-white"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 50,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Get real ROI from e-commerce influencer marketing
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 640,
              margin: '0 auto 36px',
            }}
          >
            Start driving sales with influencer campaigns designed to convert.
            Later Influence makes it easy to find, manage, and measure creator partnerships.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
