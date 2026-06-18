export default function FindInfluencersPage() {
  const steps = [
    { num: '01', title: 'Discover 10-million+ creators', desc: "Search over 10M+ contactable influencers in Later's Influencer Database." },
    { num: '02', title: 'Streamline outreach', desc: 'Reach out to influencers, send offers & manage communications all from within the platform.' },
    { num: '03', title: 'Automate communications', desc: 'Save time with always-on, automated campaign applications & influencer recruitment tools.' },
    { num: '04', title: 'Customize your search', desc: 'Use over 20 search filters and customizable data points to find influencers by demographic.' },
  ]

  const featureSections = [
    {
      eyebrow: 'Streamline Your Search',
      title: 'Access smart search filters',
      desc: "Later's AI-driven tools use advanced filters to help you search influencers based on over 20 criteria, including demographics, audience, and brand affinity, to find the best fit for you.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6zjZfakXOlccKnOi7LTprX/3c7bf035517366ff585c85854ae9591f/later-influence-access-smart-search-filters.png?w=1136&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'Influencer Discovery',
      title: "Explore Later's influencer database",
      desc: "Don't compromise on finding the right fit. With over 10 million influencers to choose from - from household names to micro influencers and UGC creators - you'll find influencers who maximize your ROI.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/2TTANA1yybDqJuhNiWeNTD/d1e169a8b4b8492526064996c633c132/influencer-discovery.png?w=1136&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'Influencer Outreach Tool',
      title: 'Easily connect with influencers from one place',
      desc: "Manage influencer communications and campaigns with Later's built-in influencer relationship management tool. Send bulk messages, approve content, and pay influencers in-platform.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/15oq99KhXq1e6bKTm01ydK/1749164e9f3979c254f5062f40a530cd/find-influencers-manage.png?w=1136&h=960&q=70&fm=png',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <p className="hero-enter text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
              Influencer Search Tool
            </p>
            <h1
              className="hero-enter-d1"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}
            >
              Find the right influencers for your brand
            </h1>
            <p className="hero-enter-d2" style={{ fontSize: 18, lineHeight: 1.6, color: '#555', marginBottom: 32, maxWidth: 520 }}>
              Discover over 10M+ influencer profiles across every industry and platform with Later Influence.
            </p>
            <a href="#" className="btn-primary hero-enter-d3" style={{ fontSize: 16 }}>Book a demo</a>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/6CyNSBQJrD3SfPCkhmr9Kp/33105e887836e9ac55e60907e6e794e2/later-influence-find-influencers-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Find Influencers with Later Influence"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div className="text-center" style={{ marginBottom: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              Find influencer partners that grow your brand
            </h2>
            <p style={{ fontSize: 18, color: '#555', maxWidth: 640, margin: '0 auto 56px' }}>
              Later's features help you discover and recruit the best-fit influencers for the biggest brand impact.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/24NRkjMnX5fyPaffYOx3tB/8a5f56faf51b9376369c88c86f65d55d/find-influencers-search-index-and-manage.png?w=1136&h=960&q=70&fm=png"
              alt="Search, index, and manage influencers"
              style={{ width: '100%' }}
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
      <section style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto">
          {featureSections.map((f, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 48,
                alignItems: 'center',
                marginBottom: i < featureSections.length - 1 ? 80 : 0,
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              <img
                src={f.img}
                alt={f.title}
                style={{ width: '100%', direction: 'ltr' }}
              />
              <div style={{ direction: 'ltr' }}>
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
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" style={{ margin: '0 auto 24px' }}>
            <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3"/>
          </svg>
          <p style={{ fontSize: 22, lineHeight: 1.6, color: '#333', marginBottom: 32 }}>
            "There is so much depth and diversity in Later's influencer network. No matter how many campaigns we run, there are always new, on-brand influencers to engage with&mdash;and the creative performs long after the campaign is over."
          </p>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/1eCCedygHqYqwD09vpxPYH/2fb86b51d93ee8c7981fbc18f70b3892/kym-recco.png?w=640&h=640&q=50&fm=png"
            alt="Kym Recco"
            style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px' }}
          />
          <p style={{ fontWeight: 700, fontSize: 16 }}>Kym Recco</p>
          <p style={{ fontSize: 14, color: '#777' }}>Tom's of Maine, Digital Marketing Manager</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="purple-wood-bg text-white" style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
            Your next partnership is waiting
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, marginBottom: 32 }}>
            Start working with talented influencers who will take your brand to the next level.
          </p>
          <a href="#" className="btn-primary" style={{ fontSize: 16 }}>Book a demo</a>
        </div>
      </section>
    </div>
  )
}
