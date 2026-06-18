const benefits = [
  {
    title: 'Forge high-quality relationships',
    desc: 'Make lasting connections with creators your audience trusts.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/54ONNE0weFYDP0z2Jej34T/6a3ad8ae7d3f0d5d98efec5a46ba8a50/icon-streamline-blue.png',
  },
  {
    title: 'Grow your community',
    desc: 'Trustworthy influencer-generated content leads to new customers.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/71B4dNiBTWUHOh7FGakYK6/2a90f98f5ab4f3ffce5d9796aac11339/adapt-grow-icon.png',
  },
  {
    title: 'Boost ROI',
    desc: "See returns from ambassadors' highly engaged followers.",
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/6NZbEqE52cBL3Q4c624JyJ/d00a0d04c694c90be4db40b588f63f00/Later_Icon_PayoutRevenue.png',
  },
]

const steps = [
  { num: '01', title: 'Find aligned creators', desc: 'Explore our influencer database and find perfect ambassadors for your brand.' },
  { num: '02', title: 'Manage partnerships & payments', desc: 'Recruit, communicate, and pay creators all within the platform.' },
  { num: '03', title: 'Scale your program', desc: 'Streamlined tools make launching bigger campaigns easy.' },
  { num: '04', title: 'Measure your successes', desc: 'Up-to-date, accurate ROI & EMV metrics at your fingertips.' },
  { num: '05', title: 'Get actionable feedback', desc: 'Get honest campaign & customer insights from your ambassadors.' },
]

const showcases = [
  {
    tag: 'Hire Brand Ambassadors',
    title: 'Recruit the right creators',
    desc: 'Access 10M+ high-quality influencers. Search by demographics, interests, and engagement. Send offers and lock down contracts—all without leaving the platform.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/3VEa9TFtiQ2VWLq2QHMPrc/4b98230c7d32d9ecb56c0459a175cc31/brand-ambassador-recruit.png?w=1132&h=960&q=70&fm=png',
    imgAlt: 'Recruit brand ambassadors',
  },
  {
    tag: 'Influencer Marketing Services',
    title: 'Expertise you can count on',
    desc: "Partner with Later's expert Services team to build, manage, and scale your brand ambassador program for maximum impact.",
    img: 'https://images.ctfassets.net/nfpsrlop6sws/5EO9DknJrCH4ST8xkHO7hk/798de2fc7af88c761574addd499021da/brand-ambassador-expertise.png?w=1136&h=954&q=70&fm=png',
    imgAlt: 'Influencer marketing expertise',
  },
  {
    tag: "Later's Influencer Program",
    title: 'Get discovered by your favorite brands',
    desc: "Sign up for free and join Later's influencer program to connect with brands looking for ambassadors just like you.",
    img: 'https://images.ctfassets.net/nfpsrlop6sws/3FFtTprHtVzHoVho4KbcjZ/b7bc4582b3a8e117ba72c3fc4f88ba65/brand-ambassador-later-influence.png?w=1132&h=960&q=70&fm=png',
    imgAlt: 'Later influencer program',
  },
]

const caseStudyStats = [
  { value: '11x', label: 'Ambassador signups' },
  { value: '168%', label: 'ROI' },
  { value: '46M', label: 'Total impressions' },
  { value: '5.5-7%', label: 'Average Engagement Rates' },
]

export default function BrandAmbassadorsPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '70px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <p
            className="text-charcoal/60 uppercase tracking-widest hero-enter"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Find your biggest fans
          </p>
          <h1
            className="text-charcoal hero-enter-d1"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 800,
              margin: '0 auto 24px',
            }}
          >
            Create best-in-class brand ambassador programs
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
            Build a community around your brand. Recruit creators, develop campaigns,
            and measure impact&mdash;all with Later Influence.
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
              src="https://images.ctfassets.net/nfpsrlop6sws/7DoA4C2dnc2TnlppPcEemp/375f6aa2bb5fdb1295c69212800085bc/brand-ambassador-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Brand ambassador program hero"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="text-charcoal text-center mb-16 reveal"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.15 }}
          >
            Partnerships that make an impact
          </h2>
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

      {/* Start & Scale */}
      <section className="wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p
                className="text-charcoal/60 uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
              >
                What is Later Influence
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
                Start &amp; scale brand ambassador programs
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
                src="https://images.ctfassets.net/nfpsrlop6sws/49gmEQzOrCNzyW4WeLNiD9/1627b0129f47e69b372cf33fd4676908/brand-ambassador-start-and-scale.png?w=1136&h=1001&q=70&fm=png"
                alt="Start and scale brand ambassador programs"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcases */}
      {showcases.map((s, i) => {
        const reversed = i % 2 === 1
        return (
          <section key={i} style={{ backgroundColor: i % 2 === 0 ? '#FEFCFB' : '#F8F2EA', padding: '70px 0' }}>
            <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}
              >
                <div className={`reveal ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <p
                    className="text-gridglow uppercase tracking-widest"
                    style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
                  >
                    {s.tag}
                  </p>
                  <h2
                    className="text-charcoal"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 40,
                      fontWeight: 900,
                      lineHeight: 1.15,
                      marginBottom: 20,
                    }}
                  >
                    {s.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 18,
                      lineHeight: 1.6,
                      color: '#444',
                      marginBottom: 32,
                    }}
                  >
                    {s.desc}
                  </p>
                  <a href="/influencer-marketing-services" className="btn-outline" style={{ fontSize: 15 }}>
                    Learn more
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

      {/* Case Study */}
      <section style={{ backgroundColor: '#000', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <p
            className="text-offline/60 uppercase tracking-widest reveal"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Case Study
          </p>
          <h2
            className="text-offline reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 44,
              fontWeight: 900,
              lineHeight: 1.15,
              maxWidth: 700,
              margin: '0 auto 16px',
            }}
          >
            A brand ambassador success story
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(248,242,234,0.7)',
              maxWidth: 600,
              margin: '0 auto 48px',
            }}
          >
            How a fashion retailer scaled its ambassador program with Later Influence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto reveal">
            {caseStudyStats.map((st, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-gridglow"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1 }}
                >
                  {st.value}
                </div>
                <p className="text-offline/60 mt-2" style={{ fontSize: 14, lineHeight: 1.4 }}>
                  {st.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 reveal">
            <a href="/case-studies/express" className="btn-primary" style={{ fontSize: 15 }}>
              Read the case study
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="purple-wood-bg" style={{ padding: '70px 0' }}>
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
            Grow with Later&rsquo;s influencer marketing platform
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
            Start working with your brand&rsquo;s biggest fans and turn your brand ambassador
            program into your #1 revenue generator.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
