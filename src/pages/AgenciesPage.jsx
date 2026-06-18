function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function AgenciesPage() {
  const benefits = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/600u6xv4MpznXUsZHB0tOy/8cb9520dcad1ed259a9e1adcf23fdf9a/icon-tools.png',
      title: 'Schedule & publish',
      desc: 'Plan and auto publish posts for every client across Instagram, TikTok, Facebook, Pinterest, LinkedIn, X, and YouTube.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/7kwn7JlAsTtsDwfI8XA5SZ/796def765fcad3fc4641322e4c874aee/icon-link-in-bio-growth.png',
      title: 'More sales, views & clicks',
      desc: 'Drive traffic and revenue for your clients with Link in Bio — a clickable, shoppable landing page for every profile.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/4biG0qn6WRvNYFiAZOY09Y/9e84d0713d8bbf1fa003af05ec2482cd/Later_Icon_SocialMediaMgmt.png',
      title: 'Automate pesky tasks',
      desc: 'From AI captions to best time to post, let automation handle the repetitive work so your team can focus on strategy.',
    },
  ]

  const steps = [
    { num: '01', title: 'Onboard your clients', desc: 'Connect your clients\' social profiles and organize them by account. Each client gets their own workspace.' },
    { num: '02', title: 'Plan content in the calendar', desc: 'Use the visual calendar to drag, drop, and schedule posts for every client across every platform.' },
    { num: '03', title: 'Auto publish everything', desc: 'Turn on auto publish and let Later post on behalf of your clients — no manual posting required.' },
    { num: '04', title: 'Generate captions with AI', desc: 'Use the AI-powered Caption Writer to create on-brand copy for each client in seconds.' },
    { num: '05', title: 'Report on performance', desc: 'Share Later Analytics reports with your clients to prove ROI and refine your strategy.' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
            MANAGE YOUR CLIENTS' SOCIAL IN ONE APP
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 64, fontWeight: 900, lineHeight: '80px', letterSpacing: '0.32px', maxWidth: 900, margin: '0 auto 24px' }}>
            The #1 social media management tool for agencies
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 700, margin: '0 auto 32px', color: '#333' }}>
            Schedule, auto publish, and manage all of your clients' social media accounts from one powerful platform. Spend less time posting and more time growing your agency.
          </p>
          <div className="hero-enter-d2" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 28 }}>
            <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Start free trial</a>
            <a href="/pricing" className="btn-outline" style={{ fontSize: 16 }}>Explore plans</a>
          </div>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/518ZWNTLUQETXa9lscU4Qf/3ec6716b5b2744b37419f002ab906b18/seamless-social-influencer-marketing.png?w=1136&h=960&q=80&fm=png" alt="Social media management for agencies" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {benefits.map((b, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center' }}>
                <img src={b.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agencies Choose Later */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Later for Agencies</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Why agencies choose Later</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Manage every client's social media from one app. Here's how it works.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/4Rj3dWeQsEayKog2wZ310o/8115a4742829bd737a6cb0161f692b8c/later-social-media-scheduling-tools-for-agencies.png?w=1160&h=978&q=70&fm=png" alt="Why agencies choose Later" style={{ width: '100%', borderRadius: 8 }} />
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

      {/* Feature: Content Creation Tools */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/QdaVBe6UcPVh2WdyA4pSA/8508571e5a7645fbd5e80dc27d9051ce/content-creation-agencies.png?w=1174&h=1012&q=70&fm=png" alt="Content creation tools" style={{ width: '100%', borderRadius: 8 }} />
            <div>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>CONTENT CREATION TOOLS</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>Create scroll-stopping content.</h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                Use Later's AI Caption Writer, hashtag suggestions, and Canva integration to create polished, on-brand content for every client. No more starting from scratch.
              </p>
              <a href="/content-creation-tools" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Multi-Platform Management */}
      <section style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', direction: 'rtl' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/5DvA5mdOfjGpaPRS2u6gh9/7b47b27d84191fa8970c6ff524756f5a/build-it-once.png?w=1136&h=960&q=70&fm=png" alt="Manage multiple social platforms" style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} />
            <div style={{ direction: 'ltr' }}>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>MANAGE MULTIPLE SOCIAL PLATFORMS</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>One post. Every platform.</h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                Build a post once and publish it across Instagram, Facebook, TikTok, Pinterest, LinkedIn, X, and YouTube. Customize the caption for each platform to keep every client's voice unique.
              </p>
              <a href="/social-media-scheduler" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Explore scheduling <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>
            Trusted by agencies worldwide.
          </h2>
          <div style={{ maxWidth: 720, margin: '0 auto', background: '#fff', borderRadius: 12, padding: 48, display: 'flex', gap: 32, alignItems: 'flex-start' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/6BBRKLdRpiNKoI3F6YsBm/b145d6978eb7043904a2809d032969a8/bread-and-butter.png?w=640&h=640&q=50&fm=png" alt="bread & butter" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginBottom: 24 }}>
                "Later is such a visual tool. I can look at my content calendar and see if everything is consistent and on brand before it goes out. It's been a game-changer for managing multiple client accounts."
              </p>
              <p style={{ fontWeight: 700, fontSize: 15 }}>Samantha Markiewicz</p>
              <p style={{ fontSize: 14, color: '#777' }}>bread & butter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Make your team & your clients happy.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Try any Later plan 100% free for 14 days. No credit card required.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
            <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Start free trial</a>
            <a href="/pricing" className="btn-outline" style={{ fontSize: 16 }}>Explore plans</a>
          </div>
        </div>
      </section>
    </div>
  )
}
