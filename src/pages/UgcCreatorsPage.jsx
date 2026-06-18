export default function UgcCreatorsPage() {
  const benefits = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/51RbGTsClb19G8pdDV1LuL/1346f559c98f79e3b2c48524391fe0ae/Collaboration.png',
      title: 'Exciting collaborations',
      desc: 'Partner with creators who expand your reach.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/6zd2wo2zPiiSsFzLT5qwEu/6fdfaa6edd03bb41c5a309e5348ce118/Growth__Arrow_.png',
      title: 'Trustworthy content',
      desc: 'Authentic user-generated content leads to high engagement.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/2qyr3a3Vh8qvrdbW1uFGmU/fa9ff90b12acfa83f7ea2a66f766abbc/Later_Icon_PayoutRevenue.png',
      title: 'Impressive ROI',
      desc: 'Cost-effective assets that help your budget go further.',
    },
  ]

  const steps = [
    { num: '01', title: 'Explore the Influencer Index', desc: 'Search our influencer database to find creators your audience loves.' },
    { num: '02', title: 'Scale influencer campaigns', desc: 'Streamline everything from strategy to reporting.' },
    { num: '03', title: 'Simplify creator communications', desc: 'Negotiate contracts, give feedback and automate payments, all in one platform.' },
    { num: '04', title: 'Collect, share, and repurpose content', desc: 'Create a bank of UGC and share high-performing assets across platforms.' },
  ]

  const featureCards = [
    {
      tag: 'Influencer Marketing Services',
      title: 'Taking campaigns further together',
      desc: "Elevate your brand's influencer marketing strategy when you partner with Later's Services team.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3pWr8k9MFPIUUgA5wZhln0/615eec946b0f1d25c821f6606bf31a4e/ugc-creators-services-team.png?w=1136&h=960&q=70&fm=png',
      link: '/influencer-marketing-services',
      linkText: 'Learn more',
    },
    {
      tag: 'The Best Platform for Creators',
      title: "Join Later's Influencer Index",
      desc: 'Transform your passion for content creation into a career. Sign up for free.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4jQP93ti9waIDTrIEoW44b/f8354c512127ad47f8b5e2317c21f4dc/ugc-creators-influencer-program.png?w=1136&h=960&q=70&fm=png',
      link: '/influencer-program',
      linkText: 'Join now',
    },
  ]

  const caseStudyStats = [
    { value: '24.1M', label: 'Impressions' },
    { value: '7.8M', label: 'Engagements' },
    { value: '3', label: 'Pieces of viral content' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
            Best UGC Creator Platform
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Hire and collaborate with UGC creators
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Get authentic content from creators your customers trust. Later Influence makes it easy for creators and brands to work together.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>
            Book a demo
          </a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1wndEygjXVo9N2kKxITRre/d1522113edf8eaa4afbb97878ec53187/ugc-creators-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Later UGC Creators Platform"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
            Unlock the benefits of UGC
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>
            User-generated content drives trust, engagement, and revenue.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {benefits.map((b, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center' }}>
                <img src={b.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Later Influence Works */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>
            How Later Influence Works
          </p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
            Everything you need, all in one platform
          </h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            From discovery to content collection, Later Influence streamlines every step.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/3ccJn1eHmSWc3Cub1tsgq0/4cd0201caed6a127fdc71987939b56f6/ugc-creators-discovery-campaigns-communications-collect.png?w=1136&h=960&q=70&fm=png"
              alt="Later Influence workflow"
              style={{ width: '100%', borderRadius: 8 }}
            />
            <div>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 900, color: '#FE3F00', minWidth: 40 }}>{s.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <p
            className="text-charcoal/60 uppercase tracking-widest text-center reveal"
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            Go Further with Later
          </p>
          <h2
            className="text-center reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 42,
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Tools and services to supercharge your strategy
          </h2>
          {featureCards.map((card, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <img src={card.img} alt={card.title} style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} />
              <div style={{ direction: 'ltr' }}>
                <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>{card.tag}</p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>{card.title}</h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>{card.desc}</p>
                <a href={card.link} className="btn-outline" style={{ fontSize: 15 }}>{card.linkText}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study — f'real foods */}
      <section className="purple-wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ textAlign: 'center' }}>
          <p
            className="uppercase tracking-widest"
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 2,
              marginBottom: 24,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Case Study
          </p>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/4dw7HxgItU3SAbjJgaj8yN/5f9cc40164b639f77706f51092e32e74/logo-freal.png?fm=webp&q=75&w=216&h=96"
            alt="f'real foods logo"
            style={{
              height: 48,
              margin: '0 auto 16px',
              display: 'block',
              filter: 'brightness(0) invert(1)',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 28,
              fontWeight: 900,
              color: '#fff',
              marginBottom: 24,
              maxWidth: 600,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.3,
            }}
          >
            How f'real foods drove massive engagement with Later Influence
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
              marginBottom: 28,
            }}
          >
            {caseStudyStats.map((stat, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 48,
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <a
            href="/case-studies/freal"
            className="btn-primary"
            style={{ fontSize: 15 }}
          >
            Read the case study
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="wood-bg" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
            Grow with Later Influence, the top influencer marketing platform
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
            Start working with UGC creators and turn influencer marketing into your #1 revenue generator.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
