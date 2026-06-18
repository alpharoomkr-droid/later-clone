function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const benefits = [
  {
    title: 'Find the right influencers',
    desc: 'Search 10M+ creators by audience, demographics, and engagement to find influencers who resonate with your consumers.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1bvmWGQuOE7nrCC1FFjjtM/f64a1566f47ff9aca12901368e439541/icon-magnify-blue.png',
  },
  {
    title: 'Manage campaigns & payments',
    desc: 'Recruit, brief, approve content, and pay creators all within a single platform built for efficiency.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/4biG0qn6WRvNYFiAZOY09Y/9e84d0713d8bbf1fa003af05ec2482cd/Later_Icon_SocialMediaMgmt.png',
  },
  {
    title: 'Increase your bandwidth',
    desc: 'Scale your team’s capacity with streamlined workflows and Later’s expert managed services.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
  },
]

const steps = [
  { num: '01', title: 'Find influencers your audience loves', desc: 'Discover creators who already reach your target consumers with advanced search and audience insights.' },
  { num: '02', title: 'Manage communication in one tool', desc: 'Centralize all influencer outreach, negotiations, and approvals in a single streamlined workflow.' },
  { num: '03', title: 'Scale campaigns', desc: 'Launch campaigns with hundreds of creators using automated tools for briefs, contracts, and content approvals.' },
  { num: '04', title: 'Collect ratings & reviews', desc: 'Gather authentic product reviews and ratings from influencers to build social proof and boost conversions.' },
]

const clifStats = [
  { value: '138%', label: 'more content produced' },
  { value: '$265K', label: 'saved in production costs' },
]

export default function CpgPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '70px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <p
            className="text-charcoal/60 uppercase tracking-widest hero-enter"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Later Influence
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
            The best CPG influencer marketing solution
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
            Build award-winning influencer campaigns that drive awareness, trial, and sales
            for your consumer packaged goods brand.
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
              src="https://images.ctfassets.net/nfpsrlop6sws/2zN59ONG8GYtGy8j2HQHdG/0e2a4faae153b1d2c85773e2ee072c46/the-best-cpg-influencer-marketing-solution.png?w=1136&h=960&q=80&fm=png"
              alt="CPG influencer marketing solution"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
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

      {/* Easy Influencer Marketing */}
      <section className="wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                Easy Influencer Marketing
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
                src="https://images.ctfassets.net/nfpsrlop6sws/3zRKew3BW3cdD7YQfuyKVm/1cf1d6f21376aa69c6d39bed6363ba6c/easy-influencer-marketing.png?w=1136&h=960&q=70&fm=png"
                alt="Easy influencer marketing"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes-Driven Campaigns */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p
                className="text-gridglow uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
              >
                Case Study
              </p>
              <h2
                className="text-charcoal"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
              >
                Outcomes-Driven Campaigns
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>See how CLIF Bar used Later Influence to scale their influencer marketing program and achieve outstanding results.</p>
              <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
                {clifStats.map((st, i) => (
                  <div key={i}>
                    <div className="text-gridglow" style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1 }}>
                      {st.value}
                    </div>
                    <p className="text-charcoal/60 mt-1" style={{ fontSize: 14, lineHeight: 1.4 }}>{st.label}</p>
                  </div>
                ))}
              </div>
              <a href="/case-studies" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Read the case study <ArrowIcon />
              </a>
            </div>
            <div className="reveal reveal-d1">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/5TxVge0Nyma9EshqHFmt4j/b0055de21bf06482951c82d317c5bc21/outcomes-driven-campaigns.png?w=1136&h=960&q=70&fm=png"
                alt="Outcomes-driven campaigns"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Marketing Services */}
      <section className="wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:[direction:rtl]">
            <div className="reveal lg:[direction:ltr]">
              <p
                className="text-gridglow uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
              >
                Managed Services
              </p>
              <h2
                className="text-charcoal"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
              >
                End-to-End Marketing Services
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>Leverage Later&rsquo;s expert team to plan, execute, and optimize your CPG influencer campaigns. From strategy to reporting, our managed services team acts as an extension of yours.</p>
              <a href="/influencer-marketing-services" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
            <div className="reveal reveal-d1 lg:[direction:ltr]">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/4VxbBqksX7DYskc7NjTxe3/1c261f2314b77f14afa2755bcc966410/end-to-end-marketing-services.png?w=1136&h=960&q=70&fm=png"
                alt="End-to-end marketing services"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Results */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p
                className="text-gridglow uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
              >
                Analytics &amp; Reporting
              </p>
              <h2
                className="text-charcoal"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
              >
                Data-Driven Results
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>Measure the true impact of your CPG influencer campaigns with real-time analytics, EMV tracking, and custom reporting. Make data-backed decisions to optimize future campaigns and prove ROI to stakeholders.</p>
              <a href="/influencer-analytics-platform" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
            <div className="reveal reveal-d1">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/5jhwGNvLuAO6LMuIrMCfte/0202bf1feacb56cff90afcae37ce3e71/influencer-marketing-services-data-driven-results.png?w=1136&h=960&q=70&fm=png"
                alt="Data-driven results"
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
          style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, alignItems: 'center' }}
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
      <section style={{ backgroundColor: '#000', padding: '70px 0' }}>
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
            Get real ROI from your CPG influencer marketing
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
            Build campaigns that drive awareness, trial, and loyalty for your
            consumer packaged goods brand with Later Influence.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
