const benefits = [
  {
    title: 'Data-driven insights',
    desc: 'We transform your social strategy with exclusive data, aligning every tactic with your brand goals.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1rd5iVcm6jyCdUBS3KQBat/e197c540bfaf1fcb4a6245cf9d1129c3/icon-navy-roi.png',
  },
  {
    title: 'Smarter social, less effort',
    desc: 'Our team handles everything from strategy to execution, saving you 40+ hours a week.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1qQlvsXnx1tqJCq7sXsTdo/17478b992b076ab92a61ee427f9fd4bd/icon-navy-rocket.png',
  },
  {
    title: 'Proven industry expertise',
    desc: 'With a track record of Fortune 500 success, our team keeps you ahead.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2Q48LgdUMUeG8jJFnXUDfm/5c14a96e162ab27fbc33044d789f3717/icon-navy-trophy.png',
  },
]

const roadmapSteps = [
  { num: '01', title: 'Strategies tailored to your goals', desc: 'From brand awareness to increased engagement.' },
  { num: '02', title: 'Curated, on-brand content', desc: 'Transform your online presence with relevant owned and creator-generated content.' },
  { num: '03', title: 'Engaged community management', desc: 'We actively manage your social channels, responding to comments.' },
  { num: '04', title: 'Advanced reporting and insights', desc: 'Track what’s working with key performance data.' },
  { num: '05', title: 'Paid amplification', desc: 'Amplify your top influencer campaigns with paid media.' },
]

const showcases = [
  {
    tag: 'Social Media Content Creation Services',
    title: 'Let your content do the talking.',
    desc: 'Our team creates content strategies that are hyper-targeted. We use insights from billions of social interactions.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/3zLZ77FifnfN7X5JpdyqVq/18cc01c5be373a2efc8e9dadd5bc3efa/smm-services-content-creation.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Social media content creation services',
  },
  {
    tag: 'Social Media Strategy',
    title: 'Strategy you can count on.',
    desc: 'We bring 10+ years of expertise and exclusive data to craft high-impact strategies.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/4NjKM3CvCmc4NOlNycS1YX/69b4f0ec6fc5fec16a377b54e243f280/smm-services-strategy.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Social media strategy services',
  },
]

export default function SocialMediaManagementServicesPage() {
  return (
    <div style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center">
          <p
            className="text-charcoal/60 uppercase tracking-widest hero-enter"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Social Media Management Services
          </p>
          <h1
            className="text-charcoal hero-enter-d1"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 860,
              margin: '0 auto 24px',
            }}
          >
            Social Media Management Services for Brands That Want Real Results
          </h1>
          <p
            className="hero-enter-d2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 720,
              margin: '0 auto 32px',
              color: '#333',
            }}
          >
            Your brand deserves a social strategy that&rsquo;s as unique as you. At Later, we
            combine organic content creation with curated creator partnerships, building a custom
            strategy that stands out and delivers results.
          </p>
          <a
            href="/influencer-marketing-services"
            className="btn-primary hero-enter-d3"
            style={{ fontSize: 16, marginBottom: 28, display: 'inline-block' }}
          >
            Book a demo
          </a>
          <div className="hero-enter-d3" style={{ maxWidth: 750, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/6qoghJWEvRlMXgNYInEcbE/fd41af55957d9ec0f03b181e28b451be/SMM_Services.png?w=750&h=471&q=80&fm=png"
              alt="Social media management services dashboard"
              style={{ width: '100%', display: 'block' }}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="text-charcoal text-center mb-16 reveal"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.15 }}
          >
            Expert Strategy + Proven Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} text-center`}
                style={{ padding: '40px 24px' }}
              >
                <img
                  src={b.icon}
                  alt=""
                  style={{ width: 56, height: 56, margin: '0 auto 24px', objectFit: 'contain' }}
                  loading="lazy"
                />
                <h3
                  className="text-charcoal"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 24,
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: 12,
                  }}
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

      {/* Social Media Growth Services */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
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
                Your custom roadmap to social success.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {roadmapSteps.map((s) => (
                  <div key={s.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span
                      className="text-gridglow"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 20,
                        fontWeight: 900,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <h4
                        className="text-charcoal"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 20,
                          fontWeight: 900,
                          lineHeight: 1.3,
                          marginBottom: 4,
                        }}
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
                src="https://images.ctfassets.net/nfpsrlop6sws/2skRFxDzeeBcKUjhMY14ES/805cfd26be921537aaeac90b2d2cc03e/Later-influencer-marketing-solution-hero.png?w=1261&h=1137&q=70&fm=png"
                alt="Social media growth services"
                style={{ width: '100%', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcases (alternating) */}
      {showcases.map((s, i) => {
        const reversed = i % 2 === 1
        return (
          <section key={i} style={{ backgroundColor: i % 2 === 0 ? '#FEFCFB' : '#F8F2EA', padding: '60px 0' }}>
            <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
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
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>
                    {s.desc}
                  </p>
                  <a href="/influencer-marketing-services" className="btn-outline" style={{ fontSize: 15 }}>
                    Learn more
                  </a>
                </div>
                <div className={`reveal reveal-d1 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <img src={s.img} alt={s.imgAlt} style={{ width: '100%', display: 'block' }} loading="lazy" />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Testimonial */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/3FcKvxGxMSL00bfggXXVz1/73c806a243de6798860cdd453abe9641/anneka-avila-oak-bay-beach-hotel-full-shot.png"
                alt="Anneke Avila, Oak Bay Beach Hotel"
                style={{ width: '100%', maxWidth: 480, display: 'block', borderRadius: 12 }}
                loading="lazy"
              />
            </div>
            <div className="reveal reveal-d1">
              <svg width="48" height="36" viewBox="0 0 48 36" fill="none" style={{ marginBottom: 24 }}>
                <path d="M0 36V20.4C0 8.4 7.2 2 20 0l2 4c-8 2.4-12 6.8-12.4 13.2H20V36H0zm28 0V20.4C28 8.4 35.2 2 48 0l2 4c-8 2.4-12 6.8-12.4 13.2H48V36H28z" fill="#FE3F00" opacity="0.2" />
              </svg>
              <p
                className="text-charcoal"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 20,
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: 28,
                }}
              >
                &ldquo;The team at Later provided us with exceptional service that was approachable
                and fun, delivering a comprehensive audit of our content across our various profiles
                and insightful evaluations of our industry competitors. This included an elevated
                approach to enhance our current strategies&hellip; we would highly recommend booking
                their services.&rdquo;
              </p>
              <p
                className="text-charcoal"
                style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}
              >
                Anneke Avila
              </p>
              <p className="text-charcoal/60" style={{ fontSize: 14, marginBottom: 4 }}>
                Marketing &amp; Public Relations Manager
              </p>
              <p className="text-charcoal/60" style={{ fontSize: 14 }}>
                Oak Bay Beach Hotel
              </p>
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
            Ready to transform your social media strategy?
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
            Get industry-leading results with Later&rsquo;s comprehensive social media marketing
            &amp; management services.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>

    </div>
  )
}
