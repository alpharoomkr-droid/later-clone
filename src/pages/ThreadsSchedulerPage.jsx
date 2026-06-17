export default function ThreadsSchedulerPage() {
  const features = [
    {
      title: 'Streamline your workflow',
      desc: 'Manage all your social profiles & easily repurpose content with Later.',
    },
    {
      title: 'Be where the action is',
      desc: "Threads is growing fast. We'll help you stand out to reach new audiences and grow your brand.",
    },
    {
      title: 'Optimize performance',
      desc: 'Use real-time engagement and impressions analytics to optimize your content.',
    },
  ]

  const steps = [
    { num: '01', title: "Drag and drop your content into Later's content calendar", desc: 'Add your Threads content visuals to your Media Library ahead of time or start a text-only post.' },
    { num: '02', title: 'Add details while you schedule', desc: 'Add your text, links, and images or videos all in a few quick taps.' },
    { num: '03', title: 'Schedule Threads in advance', desc: 'Set it and forget it when you automatically post to Threads — no notifications required.' },
  ]

  const showcases = [
    {
      tag: 'MULTI-PROFILE SCHEDULING',
      title: 'Schedule on Threads and re-post across profiles',
      desc: 'Schedule content to automatically post across multiple social profiles at once, including YouTube, Instagram, Facebook, TikTok, Snapchat, Pinterest, LinkedIn, and Twitter.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/TyhkxEmuyb6I8TkcR93k8/a25d8947d25b2d2081de3917c4da5ceb/threads-scheduler-repost.png?w=1136&h=960&q=70&fm=png',
    },
    {
      tag: 'LATER ANALYTICS',
      title: 'Measure content performance with Threads analytics',
      desc: 'Optimize your performance with real-time engagement and impressions analytics. Understand which posts perform best and what resonates with your audience.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/5rIkrgZRkxYPKU7TujqdZ6/a6cc2d40bd621da2aed21fb8a7ec9f3c/later-threads-scheduler-analytics.png?w=1136&h=961&q=70&fm=png',
    },
  ]

  const faqs = [
    { q: 'What is Threads?', a: 'Threads is a text-based social media platform by Meta (Instagram). It allows you to share text updates, images, and videos with your followers in a conversational format.' },
    { q: 'Can I schedule Threads posts with Later?', a: 'Yes! Later supports scheduling text, image, and video posts to Threads. You can plan your content in advance and let Later auto-publish it for you.' },
    { q: 'Can I schedule the same post to Threads and other platforms?', a: 'Absolutely. With Later\'s multi-profile scheduling, you can publish the same content to Threads, Instagram, Facebook, TikTok, YouTube, and more in one go.' },
    { q: 'Does Later offer Threads analytics?', a: 'Yes! Later provides real-time engagement and impressions analytics for your Threads posts so you can understand what content performs best.' },
  ]

  const blogs = [
    { title: 'Ultimate Guide to Instagram Threads: Everything You Need to Know', img: 'https://images.ctfassets.net/nfpsrlop6sws/7IpLW11LceXZVm4Sgz3iwv/5912f43f1291ac5eac7c1a1a77aabac9/Jul5-Everything-You-Need-To-Know-About-Instagram-Threads-Horizontal.png?w=920&h=800&q=80&fm=png', link: 'https://later.com/blog/instagram-threads-app/' },
    { title: 'How to Get Followers on Threads (+ 6 Brands to Follow)', img: 'https://images.ctfassets.net/nfpsrlop6sws/2M7gaLWzB0GtBcIu1MkTXM/e608190a98992c7099b7256baf63c868/How_to_Get_Followers_on_Threads_-_Horizontal.png?w=920&h=801&q=80&fm=png', link: 'https://later.com/blog/get-followers-on-threads/' },
    { title: 'Do You Need an Instagram Threads Strategy?', img: 'https://images.ctfassets.net/nfpsrlop6sws/525JdJCR2FijnsH8O7jy6k/ff56fc7c34c5b396d0e930f17fc5ff88/July6-Do_You_Need_An_Instagram_Threads_Strategy_-Horizontal-V2.png?w=920&h=800&q=80&fm=png', link: 'https://later.com/blog/instagram-threads-strategy/' },
  ]

  const resources = [
    { title: 'What is Thread?', desc: 'On social media, a thread is a series of connected posts or comments on a specific topic or conversation.', link: 'https://later.com/social-media-glossary/thread' },
    { title: 'How to Create an Instagram Content Plan & Strategy Course', desc: 'In this course, learn how to create a seamless Instagram content plan and strategy.', link: 'https://later.com/resources/course/instagram-content-plan' },
    { title: 'Instagram Reels Planner', desc: 'From curating content pillars to drafting the details, this worksheet will help you up your Reels game.', link: 'https://get.later.com/free-instagram-reels-planner/' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>PLAN NOW, POST LATER</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Schedule Threads Posts Instantly and Easily with Later
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Ride the Threads wave with easy content scheduling and analytics tools from Later. Build a genuine connection with your followers and cut through the noise — get started today.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 48 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/11WPaGQ8u9535uO5NpnQqr/f79dd514f754ebc1ed94220d97586bb6/later-threads-scheduler-hero.png?w=1718&h=1114&q=80&fm=png" alt="Later Threads Scheduler" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Quick features */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Grow your brand on Threads faster</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 56 }}>Easy tools to help you boost your content performance.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>HOW TO SCHEDULE THREADS WITH LATER</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Reach millions of new followers</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>Try it on any Later plan for free.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/eJ0CT1UKObKThaXU82Ral/c8a42abf0d77b2363aef0146a9700265/later-threads-scheduler-how-it-works.png?w=1136&h=1021&q=70&fm=png" alt="Schedule Threads with Later" style={{ width: '100%', borderRadius: 8 }} />
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
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>THREADS SCHEDULING APP</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 64 }}>Build your Threads presence with Later's scheduling tool</h2>
          {showcases.map((s, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
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

      {/* Testimonial */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 24 }}>CUSTOMER TESTIMONIALS</p>
          <img src="https://images.ctfassets.net/nfpsrlop6sws/qiCbxkipeARvkstoUd3FE/af9adb3e6306da933040260a0c80a1a9/goldilocks-steph-snelling.jpeg?w=800&h=800&fl=progressive&q=50&fm=jpg" alt="Steph Snelling" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
          <blockquote style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: '#333', fontStyle: 'italic', marginBottom: 24, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            "The key to a strong organic social strategy is batch working. Later helps me repurpose content for various channels easily when scheduling and optimizing content across accounts."
          </blockquote>
          <p style={{ fontWeight: 700, fontSize: 16 }}>Steph Snelling</p>
          <p style={{ fontSize: 14, color: '#777' }}>Goldilocks</p>
          <div style={{ marginTop: 24 }}>
            <a href="/case-studies" className="btn-outline" style={{ fontSize: 15 }}>Read case studies</a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 48 }}>FAQ</h2>
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
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 48, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Learn how to get better ROI from your social media content & campaigns.</h2>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 32 }}>Blogs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 56 }}>
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
      <section style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>The easiest way to schedule Threads</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Get started with Later for free.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
