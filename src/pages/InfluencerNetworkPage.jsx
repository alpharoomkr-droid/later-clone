export default function InfluencerNetworkPage() {
  const steps = [
    { num: '01', title: 'Streamline your search', desc: 'Find authentic creators in your niche with easy-to-use filters.' },
    { num: '02', title: 'Background checks, begone', desc: 'Our influencers come fully contactable.' },
    { num: '03', title: 'Discover similar creators', desc: 'Build a roster using the similar creators tool.' },
    { num: '04', title: 'Recruit influencers in platform', desc: 'Automated communications and streamlined workflows.' },
  ]

  const featureSections = [
    {
      eyebrow: 'Influencer Search Tool',
      title: 'Filter to find your best partnerships',
      desc: "Navigate Later's creator network with 20+ demographic filters to find influencers who align with your brand's values, audience, and goals. Narrow your search by location, engagement rate, audience demographics, and more.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/jyifrdzs9xsn8obUek7LQ/997d83aafb76888de14bba2159d06fac/influencer-network-partnerships.png?w=1136&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'Influencers for Every Campaign',
      title: 'Tailored talent to meet your needs',
      desc: "Whether you're looking for UGC creators, brand ambassadors, or niche influencers, Later's network has the right talent for every campaign type and budget.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/EGUe6ckcURTVU0y5njSE0/e3fc9921ada10b456bcd352e27d5eb49/influencer-network-discovery.png?w=1136&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'Influencer Marketing Experts',
      title: 'Partner with the best in the business',
      desc: "Craft the perfect strategy with Later's services team. From campaign planning to creator selection and performance reporting, our experts help you get the most out of every partnership.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6AjeBjHNLVixAwmKDEDB0O/d3a668887ce95a7f84d7597fb2508958/influencer-network-services.png?w=1136&h=960&q=70&fm=png',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg reveal" style={{ padding: '64px 24px 0' }}>
        <div
          className="max-w-7xl mx-auto"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}
        >
          <div>
            <p
              className="hero-enter text-charcoal/60 uppercase tracking-widest"
              style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
            >
              Later&rsquo;s Influencer Network
            </p>
            <h1
              className="hero-enter-d1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 56,
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              10 million opportunities for your brand.
            </h1>
            <p
              className="hero-enter-d2"
              style={{ fontSize: 18, lineHeight: 1.6, color: '#555', marginBottom: 32, maxWidth: 520 }}
            >
              Find the best brand partnerships with Later&rsquo;s influencer network, a database with millions of creators to choose from.
            </p>
            <a
              href="/influencer-marketing-services"
              className="btn-primary hero-enter-d3"
              style={{ fontSize: 16 }}
            >
              Book a demo
            </a>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/5qYGZhCWJqBQZ2Tw9cG6Gb/1bc2ad53f88703847055fa9433d93e51/influencers-that-actually-convert.png?w=1379&h=1428&q=80&fm=png"
              alt="Later's influencer network with millions of creators"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="reveal py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 16 }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 42,
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Influencer collaborations, curated for you.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 36,
              alignItems: 'center',
              marginTop: 56,
            }}
          >
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/4T95l6WbYAXGX8aJYFtDiK/082ba7b4aedf24bf6234f7bb4e9131ee/influencer-collaborations-curated-for-you.png?w=1056&h=892&q=70&fm=png"
              alt="Influencer collaborations curated for you"
              style={{ width: '100%', borderRadius: 8 }}
            />
            <div>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 28,
                      fontWeight: 900,
                      color: '#FE3F00',
                      minWidth: 40,
                    }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 22,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections (alternating) */}
      <section className="reveal py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {featureSections.map((f, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 36,
                alignItems: 'center',
                marginBottom: i < featureSections.length - 1 ? 80 : 0,
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              <img
                src={f.img}
                alt={f.title}
                style={{ width: '100%', borderRadius: 8, direction: 'ltr' }}
              />
              <div style={{ direction: 'ltr' }}>
                <p
                  className="uppercase tracking-widest"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#FE3F00',
                    letterSpacing: 2,
                    marginBottom: 12,
                  }}
                >
                  {f.eyebrow}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 36,
                    fontWeight: 900,
                    lineHeight: 1.15,
                    marginBottom: 16,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                  {f.desc}
                </p>
                <a
                  href="/influencer-marketing-services"
                  className="btn-outline"
                  style={{ fontSize: 15 }}
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="wood-bg reveal py-16 md:py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            style={{ margin: '0 auto 24px' }}
          >
            <path
              d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z"
              fill="#FE3F00"
              fillOpacity="0.3"
            />
          </svg>
          <p style={{ fontSize: 22, lineHeight: 1.6, color: '#333', marginBottom: 32 }}>
            &ldquo;There is so much depth and diversity in Later&rsquo;s influencer network. No matter how many campaigns we run, there are always new, on-brand influencers to engage with&mdash;and the creative performs long after the campaign is over.&rdquo;
          </p>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/1eCCedygHqYqwD09vpxPYH/2fb86b51d93ee8c7981fbc18f70b3892/kym-recco.png?w=640&h=640&q=50&fm=png"
            alt="Kym Recco"
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '0 auto 12px',
            }}
          />
          <p style={{ fontWeight: 700, fontSize: 16 }}>Kym Recco</p>
          <p style={{ fontSize: 14, color: '#777' }}>Tom&rsquo;s of Maine, Digital Marketing Manager</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="purple-wood-bg text-white reveal py-16 md:py-24 px-6"
        style={{ textAlign: 'center' }}
      >
        <div className="max-w-[700px] mx-auto">
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            See Later&rsquo;s influencer network in action.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, marginBottom: 32 }}>
            Find the right content creators and turn influencer marketing into your #1 revenue generator.
          </p>
          <a
            href="/influencer-marketing-services"
            className="btn-primary"
            style={{ fontSize: 16 }}
          >
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
