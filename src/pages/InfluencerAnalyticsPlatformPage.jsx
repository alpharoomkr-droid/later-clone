function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const steps = [
  {
    number: '01',
    title: 'Automate your reports',
    desc: 'Save time with automatic campaign reporting & analytics.',
  },
  {
    number: '02',
    title: 'Get insights into your audience',
    desc: 'Focus on outcomes with detailed brand & sales lift studies.',
  },
  {
    number: '03',
    title: 'Track conversions & performance',
    desc: 'Access pixel tracking & online conversion reporting.',
  },
  {
    number: '04',
    title: 'Simplify planning & forecasting',
    desc: 'Utilize predictive performance with CPE & CPM forecasting.',
  },
  {
    number: '05',
    title: 'Prove impact on the bottom line',
    desc: 'Secure future budget with accurate ROI and EMV metrics, updated daily.',
  },
]

const featureSections = [
  {
    eyebrow: 'CAMPAIGN TRACKING & REPORTING',
    title: 'All your data at a glance',
    desc: "Easily manage and track real-time data in one place with Later Influence's campaign analytics dashboard including engagement, impressions, performance forecasting, ROI, and Earned Media Value.",
    image: 'https://images.ctfassets.net/nfpsrlop6sws/2Gofi3kUiIfpORwBjI7gLC/21979f5b98f5036c84880062c210a2c9/influencer-analytics-campaign-performance-tracking.png?w=1136&h=960&q=70&fm=png',
    imageAlt: 'Campaign performance tracking dashboard',
    reversed: false,
  },
  {
    eyebrow: 'MEASURE ROI & CONVERSIONS',
    title: 'Click, convert, repeat',
    desc: 'Track and manage online clicks and conversions. Plus, set up a custom attribution model to automatically flow in the data you need.',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/1bspPJEFOAyowZsebPmNiF/2358cc52a85c942a8f76ac7d48b68e9e/influencer-analytics-track-clicks-conversions.png?w=1136&h=960&q=70&fm=png',
    imageAlt: 'Click and conversion tracking interface',
    reversed: true,
  },
  {
    eyebrow: 'SOCIAL MEDIA ANALYTICS',
    title: 'Get better platform metrics faster',
    desc: 'Measure your campaign effectiveness on social media with access to Instagram Graph API and TikTok performance metrics including impressions, engagement, and views.',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/465LPf720M2UpxQgoyntNH/5bbdac0aa7b21220ffc3da8a1451e82d/social-media-analytics.png?w=1136&h=960&q=70&fm=png',
    imageAlt: 'Social media analytics metrics',
    reversed: false,
  },
]

export default function InfluencerAnalyticsPlatformPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg" style={{ padding: '100px 0 80px' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ padding: '0 40px' }}>
          <div>
            <p
              className="text-gridglow hero-enter"
              style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}
            >
              Influencer Analytics Tool
            </p>
            <h1
              className="text-charcoal hero-enter-d1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 64,
                fontWeight: 900,
                lineHeight: '68px',
                letterSpacing: '0.32px',
                marginBottom: 24,
              }}
            >
              Real-time influencer analytics at your fingertips
            </h1>
            <p
              className="text-charcoal/70 hero-enter-d2"
              style={{ fontSize: 20, fontWeight: 400, lineHeight: '30px', maxWidth: 520, marginBottom: 36 }}
            >
              Measure the impact of your influencer campaigns with Later Influence's advanced analytics tools.
            </p>
            <div className="hero-enter-d3">
              <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
                Book a demo <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/3FLhUfnTHLgPrJKTKgx21q/0342b61b4e6cdb7bc8d407979d5a7145/influencer-analytics-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Influencer analytics platform hero"
              className="w-full h-auto rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p
                className="text-gridglow"
                style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}
              >
                Influencer Analysis & Reporting
              </p>
              <h2
                className="text-charcoal"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 52,
                  fontWeight: 900,
                  lineHeight: '58px',
                  letterSpacing: '0.26px',
                  marginBottom: 20,
                }}
              >
                Unlock influencer marketing insights
              </h2>
              <p
                className="text-charcoal/70"
                style={{ fontSize: 18, lineHeight: '28px', maxWidth: 480, marginBottom: 40 }}
              >
                Get accurate metrics to optimize your campaigns and maximize ROI on your influencer marketing spend, every time.
              </p>
              <div className="flex flex-col" style={{ gap: 0 }}>
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`reveal reveal-d${Math.min(i + 1, 3)}`}
                    style={{ padding: '24px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="text-gridglow flex-shrink-0"
                        style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, marginTop: 2 }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <h3
                          className="text-charcoal"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 22,
                            fontWeight: 900,
                            lineHeight: '28px',
                            marginBottom: 8,
                          }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-charcoal/60" style={{ fontSize: 16, lineHeight: '24px' }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-d2">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/6E1NDCVNDxuqCAf9M65IPp/fd0853dcf956dc46b0388e9f8e2f4dd2/influencer-analytics-cpe-cpm-conversion-tracking-audience-insights.png?w=1136&h=960&q=70&fm=png"
                alt="Influencer analytics CPE CPM conversion tracking"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections (alternating) */}
      {featureSections.map((section, i) => (
        <section
          key={i}
          className={i % 2 === 0 ? 'wood-bg' : ''}
          style={{ backgroundColor: i % 2 === 0 ? undefined : '#FEFCFB', padding: '100px 0' }}
        >
          <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`reveal ${section.reversed ? 'lg:order-2' : ''}`}>
                <p
                  className="text-gridglow"
                  style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}
                >
                  {section.eyebrow}
                </p>
                <h2
                  className="text-charcoal"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 52,
                    fontWeight: 900,
                    lineHeight: '58px',
                    letterSpacing: '0.26px',
                    marginBottom: 20,
                  }}
                >
                  {section.title}
                </h2>
                <p
                  className="text-charcoal/70"
                  style={{ fontSize: 18, lineHeight: '28px', maxWidth: 480, marginBottom: 36 }}
                >
                  {section.desc}
                </p>
                <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
                  Book a demo <ArrowIcon />
                </a>
              </div>
              <div className={`reveal reveal-d2 ${section.reversed ? 'lg:order-1' : ''}`}>
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      <section style={{ backgroundColor: '#000', padding: '100px 0' }}>
        <div className="max-w-[900px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mx-auto" style={{ marginBottom: 32 }}>
            <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3"/>
          </svg>
          <p
            className="text-offline/90 reveal reveal-d1"
            style={{ fontSize: 24, lineHeight: '36px', fontStyle: 'italic', marginBottom: 36 }}
          >
            "Later makes dealing with the world of influencers as turnkey as it can be. I consider them partners. The influencer landscape is constantly changing and evolving. Later helps us stay on top of trends and reach consumers in an authentic, effective, and efficient way."
          </p>
          <div className="flex items-center justify-center gap-4 reveal reveal-d2">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png"
              alt="Clif Bar logo"
              className="rounded-full object-cover"
              style={{ width: 56, height: 56 }}
              loading="lazy"
            />
            <div className="text-left">
              <p className="text-offline font-bold" style={{ fontSize: 16 }}>Drew McGowan</p>
              <p className="text-offline/60" style={{ fontSize: 14 }}>Clif Bar & Company, Communications and Influencer Marketing Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="purple-wood-bg" style={{ padding: '120px 0' }}>
        <div className="max-w-[700px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 64,
              fontWeight: 900,
              lineHeight: '72px',
              letterSpacing: '0.32px',
              color: '#FEFCFB',
              marginBottom: 20,
            }}
          >
            Influencer marketing backed by numbers
          </h2>
          <p
            style={{ fontSize: 20, lineHeight: '30px', color: 'rgba(254,252,251,0.8)', marginBottom: 36 }}
          >
            Find out what works, what doesn't, and where to double down with real-time results.
          </p>
          <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
            Book a demo <ArrowIcon />
          </a>
        </div>
      </section>

    </div>
  )
}
