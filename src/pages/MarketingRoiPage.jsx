export default function MarketingRoiPage() {
  const steps = [
    { num: '01', title: 'See results as they happen', desc: 'Get real-time metrics to evaluate which strategies and creators are key to your success.' },
    { num: '02', title: 'Take the guesswork out of performance', desc: "Evaluate and predict profit with up-to-date, accurate estimations of your influencer marketing campaigns' dollar value." },
    { num: '03', title: 'Secure more budget', desc: 'Prove the quality of influencer marketing activities to maintain and grow your influencer marketing budget.' },
    { num: '04', title: 'Show the value of influencer marketing', desc: 'Later Influence automatically compares the earned media value of your influencer marketing campaigns to traditional advertising platforms.' },
    { num: '05', title: 'Upgrade your reporting', desc: 'Earned media value, ROI, and other key metrics make in-depth analysis and optimizations simpler.' },
  ]

  const featureSections = [
    {
      eyebrow: 'EARNED MEDIA VALUE',
      title: 'Analyze content quality with earned media value',
      desc: "Earned media value is the best KPI for influencer marketing success. Understand daily performance, compare to other forms of advertising, and prioritize valuable partnerships with Later's accurate calculations.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/BHgGKkc9bSsxPsaR2Y2Vr/73a656bba0653df3dcd4813742e48d64/emv-roi-analyze-emv.png?w=1136&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'INFLUENCER MARKETING ROI',
      title: 'Keep (and grow) your influencer budget',
      desc: 'Later Influence automatically calculates your campaign ROI, proving the value of your influencer marketing investment and helping you secure future budget.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4ELcDud6ZeJzFlIZfvZEEp/be9347c3bd2ab8e9d1ba1d16d0e31c61/emv-roi-influencer-budget.png?w=1136&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'INFLUENCER MARKETING ANALYTICS',
      title: 'Actionable insights, ready when you need them',
      desc: 'Get access to a suite of influencer analytics & reporting tools that help you make decisions that positively impact your brand.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/ksngIdiuSoaCweUK5Yn6Q/05e33ac2379699f90455d08e6e47246a/emv-roi-insights.png?w=1136&h=960&q=70&fm=png',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
          <div>
            <p className="hero-enter text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
              INFLUENCER MARKETING METRICS
            </p>
            <h1
              className="hero-enter-d1"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}
            >
              Measure marketing success with ROI &amp; earned media value
            </h1>
            <p className="hero-enter-d2" style={{ fontSize: 18, lineHeight: 1.6, color: '#555', marginBottom: 32, maxWidth: 520 }}>
              Budgeting and reporting made simple. Later Influence helps you measure ROI &amp; earned media value to make data-backed decisions about your influencer marketing budget.
            </p>
            <a href="#" className="btn-primary hero-enter-d3" style={{ fontSize: 16 }}>Book a demo</a>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/641KlY3t7PH5hly1sXSBLb/4681ec4005b4b4658b203e9d213b9a1f/emv-roi-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Measure ROI and Earned Media Value with Later Influence"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto reveal">
          <div className="text-center" style={{ marginBottom: 16 }}>
            <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>
              HOW IT WORKS
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              Track ROI &amp; earned media value with Later Influence
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-14">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/2P2hYf6kFBnqEibU2auMhy/ed24a1f968ec2216bba71ea827db36f3/how-ROI-_-EMV-works-with-later.png?w=1136&h=960&q=70&fm=png"
              alt="How ROI and EMV works with Later"
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

      {/* Feature Sections (alternating) */}
      {featureSections.map((f, i) => (
        <section key={i} className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
            <img
              src={f.img}
              alt={f.title}
              className={i % 2 === 1 ? 'lg:order-2' : ''}
              style={{ width: '100%', borderRadius: 8 }}
            />
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>
                {f.eyebrow}
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                {f.desc}
              </p>
              <a href="#" className="btn-outline" style={{ fontSize: 15 }}>Learn more</a>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      <section className="wood-bg py-16 md:py-24 px-6">
        <div className="max-w-[800px] mx-auto text-center reveal">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" style={{ margin: '0 auto 24px' }}>
            <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3" />
          </svg>
          <p style={{ fontSize: 22, lineHeight: 1.6, color: '#333', marginBottom: 32 }}>
            "Later makes dealing with the world of influencers as turnkey as it can be. I consider them partners. The influencer landscape is constantly changing and evolving. Later helps us stay on top of trends and reach consumers in an authentic, effective, and efficient way."
          </p>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png"
            alt="Clif Bar & Company"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
          />
          <p style={{ fontWeight: 700, fontSize: 16 }}>Drew McGowan</p>
          <p style={{ fontSize: 14, color: '#777' }}>Clif Bar &amp; Company, Communications and Influencer Marketing Strategy</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="purple-wood-bg text-white py-16 md:py-24 px-6 text-center">
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
            Make decisions backed by data
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, marginBottom: 32 }}>
            Find out what works (and what doesn't) with real-time earned media value &amp; ROI calculations from Later Influence.
          </p>
          <a href="#" className="btn-primary" style={{ fontSize: 16 }}>Book a demo</a>
        </div>
      </section>
    </div>
  )
}
