function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const benefits = [
  {
    title: 'Connect with your niche',
    desc: 'Discover and partner with influencers who align with your brand aesthetic and reach your ideal customers.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/5KcdWMOZSKaeYmcAIrga11/e120b7627d62c1f74bbd611336be278b/icon-team-blue.png',
  },
  {
    title: 'Make your dollar go further',
    desc: 'Drive higher ROI with performance-driven influencer campaigns that deliver measurable results.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2EcpFWenkEg4QhFVmqd1Ze/04172ecf947fa3e18cbb188d58f3c5b3/roi.svg',
  },
  {
    title: 'Amplify top posts',
    desc: 'Scale your best-performing influencer content across paid and organic channels for maximum impact.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1D7sg6HnJ0QTHWmMe4KKFH/9fc479d4ba51fd8c02923370ec1c564e/icon-scale-blue.png',
  },
]

const steps = [
  { num: '01', title: 'Recruit iconic influencers', desc: 'Discover creators who embody your brand through advanced search filters and audience analytics.' },
  { num: '02', title: 'Build valuable partnerships', desc: 'Manage contracts, communication, and payments all in one platform for seamless collaboration.' },
  { num: '03', title: 'Go bigger & bolder', desc: 'Scale campaigns with tools designed to handle hundreds of creators and thousands of content pieces.' },
  { num: '04', title: 'Work with industry experts', desc: 'Leverage Later’s expert Services team to plan, execute, and optimize your influencer campaigns.' },
  { num: '05', title: 'Secure future budget', desc: 'Prove ROI with detailed reporting and analytics to justify continued investment in influencer marketing.' },
]

const stats = [
  { brand: 'Reebok & Zumiez', value: '55.6K', label: 'organic engagements' },
  { brand: 'COSMEDIX', value: '527%', label: 'ROI' },
  { brand: 'Express', value: '87%', label: 'lift in-store sales' },
]

export default function FashionBeautyPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center">
          <p
            className="text-charcoal/60 uppercase tracking-widest hero-enter"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            On-Trend Influencer Marketing
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
            Elevated Influencer Marketing for Fashion &amp; Beauty Brands
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
            Create curated influencer campaigns that connect with fashion-forward audiences
            and drive real results for your brand.
          </p>
          <a
            href="/influencer-marketing-services"
            className="btn-primary hero-enter-d3"
            style={{ fontSize: 16, marginBottom: 48, display: 'inline-block' }}
          >
            Book a demo
          </a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1biRPwvQl7uFJ21tXFJfDa/bd139299db987e37ab76042daa32aee3/later-fashion-and-beauty-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Fashion and beauty influencer marketing"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '100px 0' }}>
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

      {/* How Later Influence Works */}
      <section className="wood-bg" style={{ padding: '100px 0' }}>
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
                  marginBottom: 40,
                }}
              >
                How Later Influence Works
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
                src="https://images.ctfassets.net/nfpsrlop6sws/189TyY9HJ34uL2VBQzrxg7/cdefa5aa25bff3f78ec5eb88a9d3c275/how-later-influence-works.png?w=1136&h=960&q=70&fm=png"
                alt="How Later Influence works"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#000', padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
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
            Results that speak for themselves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px] mx-auto reveal">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-offline/60 mb-2" style={{ fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
                  {s.brand}
                </p>
                <div
                  className="text-gridglow"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 52, fontWeight: 900, lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <p className="text-offline/60 mt-2" style={{ fontSize: 16, lineHeight: 1.4 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Influencers */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p
                className="text-gridglow uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
              >
                Discover Creators
              </p>
              <h2
                className="text-charcoal"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
              >
                Find Top Fashion &amp; Beauty Influencers
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>
                Search 10M+ influencers by audience demographics, engagement rate, aesthetic,
                and niche. Find the perfect creators to bring your fashion and beauty campaigns to life.
              </p>
              <a href="/find-influencers" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
            <div className="reveal reveal-d1">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/7n3P9Laxyn6jfgN7gupWOj/690aed5776025c33415deb06180af1e2/find-influencers-advanced-filters.png?w=1136&h=960&q=70&fm=png"
                alt="Find fashion and beauty influencers"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creator Program */}
      <section className="wood-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:[direction:rtl]">
            <div className="reveal lg:[direction:ltr]">
              <p
                className="text-gridglow uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
              >
                Later&rsquo;s Influencer Program
              </p>
              <h2
                className="text-charcoal"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
              >
                Beauty &amp; Fashion Influencer Program
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>
                Join Later&rsquo;s influencer program to connect with top fashion and beauty
                brands. Get discovered, land paid partnerships, and grow your creator career.
              </p>
              <a href="/influencer-creator-program" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
            <div className="reveal reveal-d1 lg:[direction:ltr]">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/2H8KzSzuqHYjkBcOQlxnBP/e94be5074495d61fce1fdaaf2500203c/beauty-and-fashion-influencer-program.png?w=1132&h=960&q=70&fm=png"
                alt="Beauty and fashion influencer program"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="purple-wood-bg" style={{ padding: '80px 40px' }}>
        <div
          className="max-w-[900px] mx-auto reveal"
          style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 48, alignItems: 'center' }}
        >
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png"
            alt="Clif Bar"
            style={{ width: '100%', borderRadius: 12 }}
          />
          <div>
            <p style={{ fontSize: 20, lineHeight: 1.6, color: '#fff', marginBottom: 24 }}>
              &ldquo;Later has been an invaluable partner in helping us scale our influencer marketing program. Their platform and team have made it possible for us to connect with creators who truly embody our brand values.&rdquo;
            </p>
            <p style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>Drew McGowan</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
              Clif Bar, Senior Manager, Influencer Marketing
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#000', padding: '120px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2
            className="text-offline"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 50,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Find your next best partnership today
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(248,242,234,0.7)',
              maxWidth: 640,
              margin: '0 auto 36px',
            }}
          >
            Elevate your fashion and beauty brand with influencer marketing
            campaigns that deliver measurable results.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
