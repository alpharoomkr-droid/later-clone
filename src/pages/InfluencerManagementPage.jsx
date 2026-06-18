function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const steps = [
  {
    num: '01',
    title: 'Relationship management',
    desc: 'Manage all influencer communications from one platform with ease.',
  },
  {
    num: '02',
    title: 'Optimize content',
    desc: 'Track influencer content creation in real-time and review drafts before posting.',
  },
  {
    num: '03',
    title: 'Flexible workflows',
    desc: 'Customize your campaign workflow based on your influencers and target platform.',
  },
  {
    num: '04',
    title: 'Fake influencer detection',
    desc: 'Explore a searchable database of pre-screened influencers to avoid fraud & suspicious activity.',
  },
]

const featureSections = [
  {
    eyebrow: 'Access flexible tools',
    title: 'Customize your campaign workflows',
    desc: 'Efficiently manage thousands of influencers at every stage of the campaign process with our automated and adjustable workflows based on your target audience and social platform.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/7waPd1XKKc1iU3sQz3ayVE/194a960907f715870da9554bb99e88c6/manage-influencers-customize-campaign-workflows.png?w=1136&h=960&q=70&fm=png',
  },
  {
    eyebrow: 'Manage Influencer Relationships',
    title: 'Centralize influencer communication',
    desc: "Easily work with thousands of influencers with Later's built-in tools. Send bulk emails, track content, measure performance and execute payouts all from one place.",
    img: 'https://images.ctfassets.net/nfpsrlop6sws/5ByCsTWjAyWJHns43AfT06/9befc9d6befe10834d4828e4a7cc88a2/manage-influencers-centralize-communication-performance-payouts.png?w=1136&h=960&q=70&fm=png',
  },
  {
    eyebrow: 'Compliance & Tracking',
    title: 'Ensure compliance at every step',
    desc: 'Keep your brand and data safe with a searchable database of pre-screened influencers, ongoing safety checks, and fake follower analysis.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/6FNWxoqweTcza5K1QUAK5n/313b160d638f57143db25b836537bce2/manage-influencers-prescreened-database.png?w=1136&h=960&q=70&fm=png',
  },
]

export default function InfluencerManagementPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '70px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div className="hero-enter">
            <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
              Connect with Influencers
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              The influencer management platform designed for growth
            </h1>
            <p className="hero-enter-d1" style={{ fontSize: 18, lineHeight: 1.6, color: '#555', marginBottom: 32, maxWidth: 520 }}>
              Manage your influencers, customer advocates, and loyalists at scale with Later Influence.
            </p>
            <div className="hero-enter-d2">
              <a href="#" className="btn-primary">Book a demo <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/6LdsRRGdOeejXZLIUZPs62/45956bcce80c6c4755803c57477afac3/manage-influencers-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Influencer management platform"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              Effortlessly manage influencer relationships
            </h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, marginBottom: 28 }}>
              Later&rsquo;s tools &amp; features let you manage influencer campaigns and communications all from one place.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {steps.map((s, i) => (
                <div key={i} className={`reveal reveal-d${Math.min(i + 1, 3)}`} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, color: '#FE3F00', lineHeight: 1, flexShrink: 0 }}>
                    {s.num}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-d2">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/ERmMdhsBkQ9Czh37VtT4E/65fc17bbecc2e147aef330586af6b740/efforlessly-manage-influencer-relationships.png?w=1136&h=960&q=70&fm=png"
              alt="Manage influencer relationships"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Feature Sections (alternating) */}
      {featureSections.map((f, i) => (
        <section key={i} className={i % 2 === 0 ? 'wood-bg' : ''} style={{ padding: '80px 40px' }}>
          <div
            className="max-w-[1440px] mx-auto reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
              direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}
          >
            <img
              src={f.img}
              alt={f.title}
              style={{ width: '100%', direction: 'ltr' }}
            />
            <div style={{ direction: 'ltr' }}>
              <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>
                {f.eyebrow}
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
                {f.title}
              </h2>
              <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[900px] mx-auto text-center reveal">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" style={{ margin: '0 auto 24px' }}>
            <path d="M0 32V18.3C0 6.1 7.4 0 18 0v8.6C12.2 9.6 9.4 13 9 18h9v14H0zm22 0V18.3C22 6.1 29.4 0 40 0v8.6c-5.8 1-8.6 4.4-9 8.4h9v14H22z" fill="#FE3F00" opacity="0.15" />
          </svg>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 700, lineHeight: 1.4, maxWidth: 720, margin: '0 auto 40px' }}>
            &ldquo;Later makes dealing with the world of influencers as turnkey as it can be. I consider them partners. The influencer landscape is constantly changing and evolving. Later helps us stay on top of trends and reach consumers in an authentic, effective, and efficient way.&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png"
              alt="Clif Bar"
              style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'contain', background: '#fff', border: '1px solid #eee' }}
            />
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 700, fontSize: 16 }}>Drew McGowan</p>
              <p style={{ fontSize: 14, color: '#777' }}>Clif Bar &amp; Company, Communications and Influencer Marketing Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="wood-bg" style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            Automate your influencer management with Later Influence
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>
            Always stay in charge and on track with Later&rsquo;s influencer management platform.
          </p>
          <a href="#" className="btn-primary">Book a demo <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
