export default function PinterestSchedulerPage() {
  const features = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
      title: 'Pin more, reach more',
      desc: 'Extend your reach & grow your brand with Pinterest.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/55nuMdGWWe3p5bihOfhs7Y/f2c67885e361ce6899bdd4a1ccf62f80/auto-publish-icon.png',
      title: 'Schedule ahead & save time',
      desc: 'Plan & schedule Pinterest content to automatically post in advance.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/7yABJG0xFhDaLvKHqmVMCM/c577ff2fa59e24041e9f7acb2d28c344/pointing-hand-icon.png',
      title: 'Creating is easy',
      desc: 'Create, edit, and schedule pins in a few clicks.',
    },
  ]

  const steps = [
    { num: '01', title: 'Pinterest Marketing Partner', desc: 'Later is a Pinterest Marketing Partner, with exclusive API access for scheduling video pins.' },
    { num: '02', title: 'Post on the go', desc: 'Shoot content on the go, then post it from your phone or desktop.' },
    { num: '03', title: 'Create the perfect feed', desc: "Preview & rearrange upcoming posts with Later's visual planner to find the perfect vibe." },
    { num: '04', title: 'Share more', desc: 'Automatically publish Pinterest photos & videos ahead of time.' },
    { num: '05', title: 'Schedule on all platforms', desc: 'Schedule posts across all your profiles at once including TikTok, Facebook, Instagram, LinkedIn, Snapchat, and X.' },
  ]

  const showcases = [
    {
      tag: 'SCHEDULE PINTEREST PINS',
      title: 'Planning & posting made simple.',
      desc: "Plan your pins with our visual content calendar, build your boards in the app and schedule at your personal best time to post.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4gg6QVr3TVLvrIzmITqtP8/90c528f18ef01ea23f7936387cc7b51b/schedule-pinterest-pins.png?w=1155&h=927&q=70&fm=png',
    },
    {
      tag: 'DESIGN YOUR PINS',
      title: 'Optimize your content for Pinterest.',
      desc: "Craft the perfect pins with Later's content creation tools! Customize, crop and caption your branded photos and videos for Pinterest.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4Um8wCNGvPxgIxOlvGqE9Y/f7215fffa2398389f715a8e15571954d/edit-pinterest-pins.png?w=1158&h=938&q=70&fm=png',
    },
    {
      tag: 'MULTI-PROFILE SOCIAL SCHEDULING',
      title: 'Post all your social content in one place.',
      desc: "Amplify your best-performing content by scheduling the same post to multiple platforms including Instagram, Facebook, TikTok, LinkedIn, YouTube, Snapchat, and X. Plus, it's easy to tailor your posts to each platform in-app.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1Z8fsupajuHtC8xTYAS9fL/cc8c4a58baa6e9187dc7909e4756cdfb/later-supports-social-platforms.png?w=1160&h=915&q=70&fm=png',
    },
    {
      tag: 'PINTEREST ANALYTICS',
      title: 'Track your Pinterest traffic & growth.',
      desc: "Shorten links, track clicks, and see which pins are driving the most traffic. Later's social media analytics tool makes it easy to analyze, report on, and optimize all of your social media campaigns.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6V5mnCxHBYTeqJ66TmQIKF/61a871757e9ba43f14c8e9f8ba909495/later-pinterest-analytics.png?w=1171&h=859&q=70&fm=png',
    },
  ]

  const faqs = [
    { q: 'How do I schedule Pinterest pins with Later?', a: 'Upload your images or videos to Later\'s media library, drag them into the visual calendar, add your pin description and board, choose a time, and let Later auto publish. It\'s that simple.' },
    { q: 'Is Later an official Pinterest Marketing Partner?', a: 'Yes! Later is an official Pinterest Marketing Partner with exclusive API access, including the ability to schedule video pins.' },
    { q: 'Can I schedule video pins with Later?', a: 'Absolutely. As a Pinterest Marketing Partner, Later has exclusive API access that lets you schedule both photo and video pins to publish automatically.' },
    { q: 'Can I schedule pins to multiple boards?', a: 'Yes, you can schedule your pins to different boards and manage all your Pinterest content from Later\'s visual content calendar.' },
  ]

  const blogs = [
    { title: 'How to Schedule Pinterest Pins', img: 'https://images.ctfassets.net/nfpsrlop6sws/1JmdQEJDWGSDsom2mKaYmz/5c9efea183ed548c3bb763460fe9bb55/step_by_step_guide_to_scheduling_pinterest_pins_horizontal_image.png?w=920&h=800&q=80&fm=png', link: 'https://later.com/blog/schedule-pinterest-pins/' },
    { title: 'Pinterest Predicts: What Trends Will We Be Seeing?', img: 'https://images.ctfassets.net/nfpsrlop6sws/4PLKalQ2qPAK9uM2R0nKjC/3f3364f20c687ccace7ca413334f9225/Pinterest_Predicts_-_Horizontal.png?w=920&h=800&q=80&fm=png', link: 'https://later.com/blog/pinterest-predicts/' },
    { title: 'The Ultimate Guide to Pinterest Analytics', img: 'https://images.ctfassets.net/nfpsrlop6sws/7Mj6hwfTJIemsGG0FkFt2q/24abbfc9aba0fc5d2d407efca6c53777/Mar1-The_Ultimate_Guide_to_Pinterest_Analytics-Feature-FL.png?w=1200&h=800&q=80&fm=png', link: 'https://later.com/blog/pinterest-analytics/' },
  ]

  const resources = [
    { title: 'Influencer Marketing Guide by Social Platforms', desc: 'Download our guide to learn how to market on different social media platforms.', link: 'https://later.com/resources/guide/influencer-marketing-social/' },
    { title: 'Influencer Marketing Planning Guide', desc: 'Download the planning guide and get ready for the year ahead!', link: 'https://later.com/resources/guide/influencer-marketing-planning/' },
    { title: 'Influencer Marketing 101: Free Course', desc: 'In this course, you\'ll learn everything you need to know to run a successful influencer marketing campaign.', link: 'https://later.com/training/influencer-marketing-course/' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1100px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>CREATE PIN-WORTHY POSTS</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Reach new customers with Later's Pinterest Scheduler.
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Drive traffic and grow your brand on Pinterest with Later.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/2mefov3Tu0Qp0zxrEEU8pg/d679d43a7e971f9bc8a5ddba11826eeb/pinterest-scheduler-hero-2.png?w=1150&h=880&q=80&fm=png" alt="Later Pinterest Scheduler" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Quick features */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Do it all with Later's Pinterest scheduling tool.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Work smarter with Later.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} text-center`}>
                <img src={f.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>HOW LATER'S PINTEREST SCHEDULER WORKS</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Share your products & get discovered on Pinterest.</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>With photo & video editing tools and seamless scheduling, Later has everything you need to grow on Pinterest.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/5bFCB5DwvvdUOu8dZkf6S0/27c2ce21af70fae5821b8d8094a4eef7/later-pinterest-scheduler-tools.png?w=1138&h=929&q=70&fm=png" alt="Pinterest Scheduler Tools" style={{ width: '100%', borderRadius: 8 }} />
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

      {/* Feature showcases */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>LATER'S PINTEREST FEATURES</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Stand out on Pinterest with Later.</h2>
          {showcases.map((s, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <img src={s.img} alt={s.title} style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} />
              <div style={{ direction: 'ltr' }}>
                <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>{s.tag}</p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>{s.title}</h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>
                <a href="/pricing" className="btn-outline" style={{ fontSize: 15 }}>Explore plans</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar planner */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto reveal text-center">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>PINTEREST FEED PLANNER</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Visual content calendar</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 28 }}>Schedule, manage, and edit your posts from any device.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 24 }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/6sobOGxqwnjk4zW33Ws28w/e45808195d72022b668231cbe6fc3c95/weekly-pinterest-calendar-view.png?w=1586&h=884&q=70&fm=png" alt="Weekly view" style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Weekly calendar view</h3>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>View times your audience is most active and easily drag-and-drop your scheduled content into the time slots.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, padding: 24 }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/4iP5r2D82zeFN9ff9lel2Z/c83da7e914932c97520cad60d5a58894/monthly-pinterest-calendar-view.png?w=1488&h=833&q=70&fm=png" alt="Monthly view" style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Monthly calendar view</h3>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>Get a bird's eye view of your scheduled content for the month. See your scheduled posts for all accounts at once.</p>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/pricing" className="btn-outline" style={{ fontSize: 15 }}>Explore plans</a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 24 }}>CUSTOMER TESTIMONIAL</p>
          <img src="https://images.ctfassets.net/nfpsrlop6sws/4fOaTKzxYovTYp3CGkMkBG/7769b94bb3c441010dd03872351a6563/emily-takeshita.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Emily Takeshita" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
          <blockquote style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: '#333', fontStyle: 'italic', marginBottom: 24, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            "Using Later has tremendously helped our growth on Pinterest since we joined. We're able to easily align all of our marketing campaigns on Pinterest by using the platform and it's so user friendly which makes scheduling a breeze!"
          </blockquote>
          <p style={{ fontWeight: 700, fontSize: 16 }}>Emily Takeshita</p>
          <p style={{ fontSize: 14, color: '#777' }}>Digital Marketing Coordinator, House of Lashes</p>
          <div style={{ marginTop: 24 }}>
            <a href="/case-studies" className="btn-outline" style={{ fontSize: 15 }}>Read case studies</a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>FAQ</h2>
          {faqs.map((f, i) => (
            <details key={i} style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: 20, marginBottom: 20 }}>
              <summary style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {f.q}
                <span style={{ fontSize: 24, fontWeight: 300, marginLeft: 16 }}>+</span>
              </summary>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, marginTop: 12 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Blogs & Resources */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 28, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Learn how to get better ROI from your social media content & campaigns.</h2>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 32 }}>Blogs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 32 }}>
            {blogs.map((b, i) => (
              <a key={i} href={b.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={b.img} alt={b.title} style={{ width: '100%', borderRadius: 8, marginBottom: 16, aspectRatio: '920/800', objectFit: 'cover' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700 }}>{b.title}</h4>
              </a>
            ))}
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 32 }}>Resources</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 32 }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{r.title}</h4>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5, marginBottom: 16 }}>{r.desc}</p>
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 14 }}>Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="wood-bg" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Try Later Today</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Grow your brand with Later's Pinterest scheduler. Start your free trial today.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
