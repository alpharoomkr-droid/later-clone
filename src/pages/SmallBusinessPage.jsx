function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function SmallBusinessPage() {
  const benefits = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1iPS7vcn3YzDvdSHfmb9Zw/4f3b8bc529276886b9cbdca9fa3288dd/icon-schedule-growth.png',
      title: 'Bulk-schedule content',
      desc: 'Plan and schedule weeks of social content in one sitting, then let Later auto publish for you.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/7kwn7JlAsTtsDwfI8XA5SZ/796def765fcad3fc4641322e4c874aee/icon-link-in-bio-growth.png',
      title: 'Get more sales',
      desc: 'Drive traffic and revenue from social with Link in Bio — a clickable, shoppable landing page.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/537WvxPFZdaYNZ0M8Khb0Z/2c80d5b3e213c4d6599dfa15497d3419/schedule-all-platforms-icon.png',
      title: 'Get more reach',
      desc: 'Post consistently across Instagram, TikTok, Facebook, Pinterest, LinkedIn, X, and YouTube.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
      title: 'Automate tasks',
      desc: 'From AI-written captions to best time to post suggestions, automate the busy work so you can focus on your business.',
    },
  ]

  const steps = [
    { num: '01', title: 'Upload your media', desc: 'Drag and drop photos and videos into your media library, or connect Canva, Dropbox, and Google Drive.' },
    { num: '02', title: 'Schedule your posts', desc: 'Drag media onto the calendar, write captions, add hashtags, and schedule across every platform.' },
    { num: '03', title: 'Turn on auto publish', desc: 'Let Later post for you automatically on Instagram, Facebook, TikTok, Pinterest, LinkedIn, and X.' },
    { num: '04', title: 'Set up Link in Bio', desc: 'Create a shoppable landing page for your social profiles and start driving traffic to your website or store.' },
    { num: '05', title: 'Track your results', desc: 'Use Later Analytics to see your best-performing content, best time to post, and audience demographics.' },
  ]

  const testimonials = [
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6m4TVrAovjBjvxbLJfjBEe/90ff1cdd42789f887c192f1ce31d2dcc/kate-talcott.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg',
      quote: "As a small business owner, I don't have time to post every day. Later lets me batch my content on Sundays and not think about it for the rest of the week.",
      name: 'Kate Talcott',
      handle: '@splatter.and.bloom',
    },
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6gdO8tgJsusrGqyW7Lv819/03dec4e02a6c50d38e4bd071ca1b8afb/artifact-uprising.png?w=640&h=640&q=50&fm=png',
      quote: "Later helps us stay organized and consistent across all of our social platforms. The visual calendar makes it so easy to plan ahead and see the big picture.",
      name: 'Megan White',
      handle: 'Artifact Uprising',
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
            Easy social media management for small business.
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Save time with scheduling and automation, drive sales with Link in Bio, and grow your audience — all from one app. Start your free trial today.
          </p>
          <div className="hero-enter-d2" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
            <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Start free trial</a>
            <a href="/pricing" className="btn-outline" style={{ fontSize: 16 }}>Explore plans</a>
          </div>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/5RBmvf50A01tSR0tEw6cit/424fb5c9919d6b145128f2d87f8ffa48/easy-social-media-management.png?w=1136&h=960&q=80&fm=png" alt="Easy social media management for small business" style={{ width: '100%', display: 'block' }} />
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

      {/* How to use Later Social */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Later for Small Business</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>How to use Later Social</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Check social media off your to-do list — for the whole week — in just one sitting.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/1dihRRmCfVycQkhId1JaW1/97bd1263b7f44849561fab2170f2c2ab/check-social-media-off.png?w=1136&h=960&q=70&fm=png" alt="How to use Later Social" style={{ width: '100%', borderRadius: 8 }} />
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
            <img src="https://images.ctfassets.net/nfpsrlop6sws/2TIopEhJArrIRQjNBCUVwu/3868bad1167d4246db5f69d75ac6aeb1/small-business-owner-build-it-once.png?w=1136&h=960&q=70&fm=png" alt="Multi-profile scheduling" style={{ width: '100%', borderRadius: 8 }} />
            <div>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>MULTI-PROFILE SCHEDULING</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>Build it once, post everywhere.</h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                Create your post once and schedule it across Instagram, Facebook, TikTok, Pinterest, LinkedIn, X, and YouTube. Customize the caption for each platform and let Later do the posting.
              </p>
              <a href="/pricing" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Explore plans <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Caption Writer */}
      <section style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', direction: 'rtl' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/6Mo2bca7BGcz7m8GDFZc2u/b04b7096fe3387731ff22c4fae5a55ef/caption-writer.png?w=1136&h=960&q=70&fm=png" alt="Caption Writer" style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} />
            <div style={{ direction: 'ltr' }}>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>CAPTION WRITER</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>Write captions faster with AI.</h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                Skip the writer's block. Later's AI-powered Caption Writer generates on-brand captions in seconds. Just describe what you want to say and get polished, ready-to-post copy.
              </p>
              <a href="/caption-writer" className="btn-outline" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
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
            Loved by small businesses everywhere.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, maxWidth: 960, margin: '0 auto' }}>
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ background: '#fff', borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column' }}>
                <img src={t.img} alt={t.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#333', marginBottom: 24, flex: 1 }}>"{t.quote}"</p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</p>
                  <p style={{ fontSize: 14, color: '#777' }}>{t.handle}</p>
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
