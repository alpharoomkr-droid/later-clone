function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function SocialMediaManagersPage() {
  const benefits = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1iPS7vcn3YzDvdSHfmb9Zw/4f3b8bc529276886b9cbdca9fa3288dd/icon-schedule-growth.png',
      title: 'Schedule & auto publish',
      desc: 'Plan and schedule posts across all your social channels, then let Later auto publish them for you.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/7kwn7JlAsTtsDwfI8XA5SZ/796def765fcad3fc4641322e4c874aee/icon-link-in-bio-growth.png',
      title: 'Get more sales, views & clicks',
      desc: 'Drive traffic from your social profiles to your website, blog, or online store with Link in Bio.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/537WvxPFZdaYNZ0M8Khb0Z/2c80d5b3e213c4d6599dfa15497d3419/schedule-all-platforms-icon.png',
      title: 'Post across multiple profiles',
      desc: 'Manage multiple social media profiles in one place, saving you time and keeping everything organized.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/7yABJG0xFhDaLvKHqmVMCM/c577ff2fa59e24041e9f7acb2d28c344/pointing-hand-icon.png',
      title: 'Automate daily social tasks',
      desc: 'From best time to post suggestions to AI-generated captions, automate the repetitive stuff.',
    },
  ]

  const steps = [
    { num: '01', title: 'Upload your media', desc: 'Drag and drop photos and videos into your media library, or connect to Canva, Dropbox, and Google Drive.' },
    { num: '02', title: 'Schedule your posts', desc: 'Drag your media onto the calendar, write your captions, add hashtags, and schedule across all platforms.' },
    { num: '03', title: 'Turn on auto publish', desc: 'Sit back and let Later post for you. Auto publish works for Instagram, Facebook, TikTok, Pinterest, LinkedIn, and X.' },
    { num: '04', title: 'Track your results', desc: 'Use Later Analytics to discover your best-performing content, best time to post, and audience demographics.' },
  ]

  const testimonials = [
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3NpSp1hgf92ehK4TX2jKrg/6152c843f1f18d206e436a0b62bc679e/lucky-iron-fish-testimonial-profile.png?w=640&h=643&q=50&fm=png',
      quote: "Later has streamlined our social posting process — we used to spend an entire day scheduling content, and now it takes just a few hours.",
      name: 'Shraddha Sekhon',
      role: 'Lucky Iron Fish',
    },
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6BBRKLdRpiNKoI3F6YsBm/b145d6978eb7043904a2809d032969a8/bread-and-butter.png?w=640&h=640&q=50&fm=png',
      quote: "Later is such a visual tool. I can look at my content calendar and see if everything is consistent and on brand before it goes out.",
      name: 'Samantha Markiewicz',
      role: 'bread & butter',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
            MANAGE SOCIAL MEDIA WITH LATER
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 64, fontWeight: 900, lineHeight: '80px', letterSpacing: '0.32px', maxWidth: 860, margin: '0 auto 24px' }}>
            Work faster with tools for social media managers
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Plan, schedule, and auto publish across every social platform — and get back to screen-free weekends. Start your free trial today.
          </p>
          <div className="hero-enter-d2" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
            <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Start free trial</a>
            <a href="/pricing" className="btn-outline" style={{ fontSize: 16 }}>Explore plans</a>
          </div>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/2nIwfdL9wNftLO9qDvi5fE/262cfa7a0e6de1821106fe5ac7b5c2da/social-media-managers-hero.png?w=1136&h=960&q=80&fm=png" alt="Social media manager tools" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
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

      {/* How It Works */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Social Media Management Tools</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>How Later's tools work</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            The easiest way to manage all of your social media accounts — in one app.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/7acm3x3DYVapiRmR950h7J/b7aba96f9a26cd28d03c579e9568089a/easiest-way-to-manage.png?w=1137&h=960&q=70&fm=png" alt="How Later works" style={{ width: '100%', borderRadius: 8 }} />
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

      {/* Feature: Multi-Profile Scheduling */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/5DvA5mdOfjGpaPRS2u6gh9/7b47b27d84191fa8970c6ff524756f5a/build-it-once.png?w=1136&h=960&q=70&fm=png" alt="Multi-profile scheduling" style={{ width: '100%', borderRadius: 8 }} />
            <div>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>MULTI-PROFILE SCHEDULING</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>Build it once, post everywhere.</h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                Create your post once and schedule it across Instagram, Facebook, TikTok, Pinterest, LinkedIn, X, and YouTube. Tailor the caption for each platform and let Later handle the rest.
              </p>
              <a href="/pricing" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Explore plans <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Link in Bio */}
      <section style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', direction: 'rtl' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/6qy7FnGeMFXou2A3IscIUn/1c84b9a8f6d1f1795cd431eb2681578c/followers-into-customers.png?w=1136&h=960&q=70&fm=png" alt="Link in Bio" style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} />
            <div style={{ direction: 'ltr' }}>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>LINK IN BIO</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>Turn followers into customers.</h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                Create a clickable, shoppable landing page from your social profiles. Drive traffic and sales from Instagram, TikTok, and more to your website, blog, or online store.
              </p>
              <a href="/link-in-bio" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Learn more <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 56 }}>
            Trusted by social media managers everywhere.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, maxWidth: 960, margin: '0 auto' }}>
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ background: '#fff', borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column' }}>
                <img src={t.img} alt={t.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#333', marginBottom: 24, flex: 1 }}>"{t.quote}"</p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</p>
                  <p style={{ fontSize: 14, color: '#777' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Post more, stress less.</h2>
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
