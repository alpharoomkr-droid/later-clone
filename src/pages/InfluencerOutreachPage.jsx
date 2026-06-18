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
    title: 'Over 10 million influencers to choose from',
    desc: "Explore Later's Influencer Index, our creator database, with over 20 AI-driven filters to narrow your search and find your perfect match.",
  },
  {
    number: '02',
    title: 'Quality you can trust',
    desc: 'Time-consuming background checks are a thing of the past. Our Influencer Index includes over 10 million reliable creator partners, ready to be contacted.',
  },
  {
    number: '03',
    title: 'Automate influencer recruitment',
    desc: 'Customize message templates & pre-schedule outreach to build workflows that work how you need them to.',
  },
  {
    number: '04',
    title: 'Scale your campaigns',
    desc: 'With streamlined outreach and communication, growing your influencer marketing program is straightforward - why not go bigger than ever?',
  },
]

const featureSections = [
  {
    eyebrow: 'Influencer Outreach Services',
    title: 'An expert team on your side',
    desc: "Take the mystery out of outreach. Later's Services team works with you to find the best-match brand partners and create strategies that lead to real ROI.",
    image: 'https://images.ctfassets.net/nfpsrlop6sws/1gsuQH4ZB80By7r8QQ7WHK/8b337b461c0ee7ead35ba7634011c1b9/later-influencer-outreach-services.png?w=566&h=480&q=70&fm=png',
    imageAlt: 'Later influencer outreach services dashboard',
    reversed: false,
  },
  {
    eyebrow: 'Influencer Management Tools',
    title: 'Take partnerships from prospect to payment',
    desc: 'Manage all your influencer communications and campaigns in-platform. Send messages, give feedback, approve content and distribute payment in one place.',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/pC4sPEDY1BTcCRhttT1HH/eea5740ccd6df3587d80d0a4b03781b7/later-influencer-management-tools.png?w=568&h=480&q=70&fm=png',
    imageAlt: 'Later influencer management tools interface',
    reversed: true,
  },
]

export default function InfluencerOutreachPage() {
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
              Recruit Creators & Influencers
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
              Hire the best creators with influencer outreach tools
            </h1>
            <p
              className="text-charcoal/70 hero-enter-d2"
              style={{ fontSize: 20, fontWeight: 400, lineHeight: '30px', maxWidth: 520, marginBottom: 36 }}
            >
              Save time pitching your brand to influencers. Later Influence's outreach tools help you connect with and build relationships with ease.
            </p>
            <div className="hero-enter-d3">
              <a href="/influencer-marketing-platform/pricing" className="btn-primary" style={{ fontSize: 18 }}>
                Book a demo <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/6PUF944kXuSZaJkq1KNST5/fa66358ce139e63bfc067be3f2d14f71/later-influencer-outreach-hero.png?w=568&h=482&q=80&fm=png"
              alt="Later influencer outreach hero"
              className="w-full h-auto rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p
                className="text-gridglow"
                style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}
              >
                How Later Influence Works
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
                Enlist your customers' favorite creators
              </h2>
              <p
                className="text-charcoal/70"
                style={{ fontSize: 18, lineHeight: '28px', maxWidth: 480, marginBottom: 24 }}
              >
                Discover why brands and creators prefer collaborating within Later's influencer marketing platform.
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
                src="https://images.ctfassets.net/nfpsrlop6sws/6bgixvsclj8ZlPzqgBKRLQ/5ea476849b26c47dd21bf69aa993499e/how-later-influence-works.png?w=568&h=500&q=70&fm=png"
                alt="How Later Influence works"
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
          style={{ backgroundColor: i % 2 === 0 ? undefined : '#FEFCFB', padding: '70px 0' }}
        >
          <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
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
                <a href="/influencer-marketing-platform/pricing" className="btn-primary" style={{ fontSize: 18 }}>
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
      <section style={{ backgroundColor: '#000', padding: '70px 0' }}>
        <div className="max-w-[900px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mx-auto" style={{ marginBottom: 32 }}>
            <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3"/>
          </svg>
          <p
            className="text-offline/90 reveal reveal-d1"
            style={{ fontSize: 24, lineHeight: '36px', fontStyle: 'italic', marginBottom: 36 }}
          >
            "There is so much depth and diversity in Later's influencer network. No matter how many campaigns we run, there are always new, on-brand influencers to engage with—and the creative performs long after the campaign is over."
          </p>
          <div className="flex items-center justify-center gap-4 reveal reveal-d2">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1eCCedygHqYqwD09vpxPYH/2fb86b51d93ee8c7981fbc18f70b3892/kym-recco.png?w=640&h=640&q=50&fm=png"
              alt="Kym Recco"
              className="rounded-full object-cover"
              style={{ width: 56, height: 56 }}
              loading="lazy"
            />
            <div className="text-left">
              <p className="text-offline font-bold" style={{ fontSize: 16 }}>Kym Recco</p>
              <p className="text-offline/60" style={{ fontSize: 14 }}>Tom's of Maine, Digital Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="purple-wood-bg" style={{ padding: '70px 0' }}>
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
            Upgrade your influencer outreach
          </h2>
          <p
            style={{ fontSize: 20, lineHeight: '30px', color: 'rgba(254,252,251,0.8)', marginBottom: 36 }}
          >
            Connect with the best creators and turn influencer marketing into your #1 revenue generator.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 18 }}>
            Book a demo <ArrowIcon />
          </a>
        </div>
      </section>

    </div>
  )
}
