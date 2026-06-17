const benefits = [
  {
    title: 'Boost engagement',
    desc: "Micro influencers' high engagement rates mean higher ROI potential for every campaign you launch.",
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
  },
  {
    title: 'Hyper-targeted campaigns',
    desc: 'Niche creators put your brand in front of exactly the right audience, driving meaningful conversions.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/4biG0qn6WRvNYFiAZOY09Y/9e84d0713d8bbf1fa003af05ec2482cd/Later_Icon_SocialMediaMgmt.png',
  },
  {
    title: 'Brand building on a budget',
    desc: 'Affordable micro influencers make your marketing dollar go further without sacrificing quality.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2EcpFWenkEg4QhFVmqd1Ze/04172ecf947fa3e18cbb188d58f3c5b3/roi.svg',
  },
]

const steps = [
  {
    num: '01',
    title: 'Discover the best micro influencers',
    desc: "Search Later's influencer database with advanced filters to find creators who align with your brand and audience.",
  },
  {
    num: '02',
    title: 'Ensure quality partnerships',
    desc: '10M+ influencers fully contactable — vet profiles, review past work, and connect with confidence.',
  },
  {
    num: '03',
    title: 'Run campaigns in-platform',
    desc: 'Manage communication, approve content, and track performance from a single, streamlined dashboard.',
  },
  {
    num: '04',
    title: 'Automate payouts',
    desc: 'Ensure micro influencers are always paid on time with automated, hassle-free payment workflows.',
  },
  {
    num: '05',
    title: 'Get the data you actually need',
    desc: 'Access up-to-date performance analytics, ROI & EMV metrics that prove campaign value.',
  },
]

const featureCards = [
  {
    tag: 'End-to-End Influencer Marketing',
    title: 'Save time & stay on track',
    desc: 'Streamline your micro influencer campaigns from discovery to reporting — all in one platform.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/7GNdwhVizBlsJLftN5FrfO/20447e3fb22d8e3ec36746fe8b904fb2/end-to-end-influencer-marketing.png?w=1136&h=960&q=70&fm=png',
    link: '/influencer-marketing-platform/',
  },
  {
    tag: 'Influencer Marketing Services',
    title: 'Influencer marketing meets innovation',
    desc: 'Smash your marketing targets with expert partners who manage everything from strategy to execution.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/5ggBtsgy7OFdVcu3x2cOzs/9c2cdb9939f55c68b7e79a37b72fc363/later-influencer-marketing-services.png?w=1134&h=960&q=70&fm=png',
    link: '/influencer-marketing-services/',
  },
  {
    tag: "Later's Influencer Program",
    title: 'Micro influencer collaboration made easy',
    desc: 'Get discovered, monetize your content and grow your audience with Later.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/4hpFMWldv4g20aINLUCg5M/b493c81fa673c0156ce06f6c10cad16b/later-influencer-program.png?w=1136&h=960&q=70&fm=png',
    link: '/influencer-creator-program/',
  },
]

const caseStudyStats = [
  { value: '70', label: 'Pieces of Content' },
  { value: '1.7M', label: 'Total impressions' },
  { value: '1M', label: 'Engagements on TikTok' },
]

export default function MicroInfluencersPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p
            className="text-charcoal/60 uppercase tracking-widest"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Micro Influencer Marketing Platform
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
            Maximize engagement with micro&nbsp;influencers
          </h1>
          <p
            className="hero-enter-d1"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 680,
              margin: '0 auto 32px',
              color: '#333',
            }}
          >
            Discover the potential of micro influencer marketing. Use Later Influence to execute
            creator-driven campaigns that deliver genuine ROI.
          </p>
          <a
            href="/influencer-marketing-services/"
            className="btn-primary hero-enter-d2"
            style={{ fontSize: 16, marginBottom: 48 }}
          >
            Book a demo
          </a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/5RrunyU7hSHjYvCxxtigTO/508b7831436e43b10e14c92c77984d87/microinfluencers-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Micro influencers hero"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="max-w-[800px] mx-auto text-center mb-16 reveal">
            <h2
              className="text-charcoal"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 48,
                fontWeight: 900,
                lineHeight: 1.15,
              }}
            >
              Small audiences, big wins
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} p-8 text-center`}
                style={{ backgroundColor: '#F8F2EA', borderRadius: 0 }}
              >
                <img
                  src={b.icon}
                  alt=""
                  style={{ width: 56, height: 56, margin: '0 auto 20px', objectFit: 'contain' }}
                />
                <h3
                  className="text-charcoal mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 900, lineHeight: 1.2 }}
                >
                  {b.title}
                </h3>
                <p className="text-charcoal/60" style={{ fontSize: 16, lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="wood-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="max-w-[800px] mx-auto text-center mb-16 reveal">
            <p
              className="text-charcoal/60 uppercase tracking-widest"
              style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
            >
              How Later Influence Works
            </p>
            <h2
              className="text-charcoal"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 48,
                fontWeight: 900,
                lineHeight: 1.15,
              }}
            >
              Your go-to platform for all things creator
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
            <div>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/iGdSaBKBPniMHuLFIYp98/a1c768cf160d22cf628da0052ec85b8c/why-use-later-influence.png?w=1136&h=960&q=70&fm=png"
                alt="Why use Later Influence"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div className="flex flex-col gap-6">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span
                    className="text-gridglow flex-shrink-0"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 900, lineHeight: '36px' }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <h3
                      className="text-charcoal mb-1"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, lineHeight: 1.3 }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-charcoal/60" style={{ fontSize: 16, lineHeight: 1.6 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study — Trident */}
      <section style={{ backgroundColor: '#000', padding: '80px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/3ViTOyAo52Zbl2AyV5tSIY/af7ef0b949aeee1d2931e75da387d075/trident-logo-pill.png?fm=webp&q=75&w=335&h=145"
            alt="Trident"
            style={{ height: 56, margin: '0 auto 40px', objectFit: 'contain' }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto mb-10">
            {caseStudyStats.map((s, i) => (
              <div key={i}>
                <div
                  className="text-gridglow"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <p className="text-white/60 mt-2" style={{ fontSize: 16 }}>{s.label}</p>
              </div>
            ))}
          </div>
          <a
            href="/case-studies/trident/"
            className="btn-outline"
            style={{ fontSize: 15, color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            View case study
          </a>
        </div>
      </section>

      {/* Feature Cards — alternating */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="flex flex-col gap-20">
            {featureCards.map((card, i) => {
              const reversed = i % 2 !== 0
              return (
                <div
                  key={i}
                  className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}
                >
                  <div className={reversed ? 'lg:[direction:ltr]' : ''}>
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{ width: '100%', display: 'block' }}
                    />
                  </div>
                  <div className={reversed ? 'lg:[direction:ltr]' : ''}>
                    <p
                      className="text-gridglow uppercase tracking-widest mb-3"
                      style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2 }}
                    >
                      {card.tag}
                    </p>
                    <h3
                      className="text-charcoal mb-4"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15 }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-charcoal/60 mb-6"
                      style={{ fontSize: 18, lineHeight: 1.6 }}
                    >
                      {card.desc}
                    </p>
                    <a
                      href={card.link}
                      className="btn-outline"
                      style={{ fontSize: 15 }}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="purple-wood-bg text-white" style={{ padding: '120px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 48,
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            See results with Later&rsquo;s micro influencer marketing platform
          </h2>
          <p
            className="mx-auto mb-10"
            style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 640, opacity: 0.85 }}
          >
            Increase your marketing ROI and build partnerships with micro influencers your
            audience loves.
          </p>
          <a
            href="/influencer-marketing-services/"
            className="btn-primary"
            style={{ fontSize: 18 }}
          >
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
