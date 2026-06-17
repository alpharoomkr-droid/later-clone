export default function YoutubersPage() {
  const benefits = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/54ONNE0weFYDP0z2Jej34T/6a3ad8ae7d3f0d5d98efec5a46ba8a50/icon-streamline-blue.png',
      title: 'Reach new audiences',
      desc: "Partner with creators in your brand's niche.",
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/51RbGTsClb19G8pdDV1LuL/1346f559c98f79e3b2c48524391fe0ae/Collaboration.png',
      title: 'Get valuable social proof',
      desc: 'Establish your brand and build trust.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/2rxCf0yUdUogcD8zVWteVU/7b65dcb1cea78edd9ba3b2f98dc40e98/icon-auto-publish-youtube-shorts.png',
      title: 'Diversify influencer content',
      desc: 'Show a different side with long-form video.',
    },
  ]

  const steps = [
    { num: '01', title: 'Find reliable creators', desc: "Later's influencers are contactable." },
    { num: '02', title: 'Manage influencer relationships with ease', desc: 'Send messages, approve content, pay creators.' },
    { num: '03', title: 'Secure future budget', desc: 'Prove ROI with accurate EMV metrics.' },
    { num: '04', title: 'Build a bank of video content', desc: 'Repurpose top-performing assets beyond YouTube.' },
  ]

  const featureSections = [
    {
      eyebrow: 'Find YouTube Influencers',
      title: 'Work with the creators your customers love',
      desc: "Search over 10M+ contactable creators in Later's Influencer Index. Find the perfect YouTube influencer for your brand's next campaign.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/2MIw8gZmnlMWEe6u5iByX6/8948309ecc5064384f50101b5651e87f/find-youtube-influencers-with-later.png?w=1132&h=960&q=70&fm=png',
    },
    {
      eyebrow: "Later's Services Team",
      title: 'A team you can trust',
      desc: "Take your ROI to new heights with Later's expert Services team. From strategy to execution, they'll help you get the most out of every campaign.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1dKPGimYgOCKvO3j9pif0r/fc934db3267d8d750d0b43ff36fa4c9d/later-services-team.png?w=1134&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'Become a Later Creator',
      title: 'Turn content into your career',
      desc: "Sign up for Later's Influencer Index for free. Connect with top brands looking for YouTube creators like you.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/2sC87xl54x1f1xx6MgOFQ1/0868f8e0c9fe3dfcc5aba5ac271bf131/become-a-later-creator.png?w=1132&h=960&q=70&fm=png',
    },
  ]

  const caseStudyStats = [
    { value: '64%', label: 'Increase in impressions' },
    { value: '49M', label: 'Total impressions' },
    { value: '1M', label: 'Engagements on TikTok' },
    { value: '3.2%', label: 'CTR on Instagram & Facebook' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <p className="hero-enter text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
              YouTube Influencer Marketing
            </p>
            <h1
              className="hero-enter-d1"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}
            >
              Find YouTubers and boost brand engagement
            </h1>
            <p className="hero-enter-d2" style={{ fontSize: 18, lineHeight: 1.6, color: '#555', marginBottom: 32, maxWidth: 520 }}>
              Hire YouTube influencers and effortlessly scale campaigns with Later Influence.
            </p>
            <a href="/influencer-marketing-services" className="btn-primary hero-enter-d3" style={{ fontSize: 16 }}>
              Book a demo
            </a>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1LixAlN4jUxnjkgdFRNuI8/fcfffcd3b434a8b77b2fd5bfa9a3574c/youtube-influencer-marketing.png?w=1136&h=960&q=80&fm=png"
              alt="YouTube Influencer Marketing with Later"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits — Like, comment, subscribe */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
            Like, comment, subscribe
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 56 }}>
            YouTube influencer marketing helps brands grow in ways no other platform can.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
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
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>
            How Later Influence Works
          </p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
            Influencer marketing on YouTube is simpler than ever
          </h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Later Influence streamlines every step of your YouTube influencer campaigns.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/D96raV6hh3w8fRFJgVMLQ/63f319ec441c0320ce4e1f5173499787/how-later-influence-works.png?w=1136&h=1000&q=70&fm=png"
              alt="How Later Influence works for YouTube"
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
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          {featureSections.map((f, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 60,
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
                <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>
                  {f.eyebrow}
                </p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                  {f.desc}
                </p>
                <a href="/influencer-marketing-services" className="btn-outline" style={{ fontSize: 15 }}>Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study — bibigo */}
      <section className="purple-wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ textAlign: 'center' }}>
          <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 24, color: 'rgba(255,255,255,0.7)' }}>
            Case Study
          </p>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/ADDidN4OVZDsbLPD2V44z/63946dd52ad5047f2dd9a2cd80083cbf/Frame_3480__1_.png?fm=webp&q=75&w=408&h=128"
            alt="bibigo logo"
            style={{ height: 48, margin: '0 auto 40px', display: 'block', filter: 'brightness(0) invert(1)' }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginBottom: 40 }}>
            {caseStudyStats.map((stat, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, color: '#fff', marginBottom: 8 }}>{stat.value}</p>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
          <a href="/case-studies/bibigo" className="btn-primary" style={{ fontSize: 15 }}>
            Read the case study
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="wood-bg" style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
            Grow your brand on YouTube with Later's influencer marketing platform
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
            Start working with the right YouTubers and turn influencer marketing into your #1 revenue generator.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
