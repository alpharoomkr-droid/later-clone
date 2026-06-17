export default function InstagramAutoPostPage() {
  const steps = [
    { num: '01', title: 'Connect your Instagram Business profile to Later', desc: 'Create an Instagram Business Profile to access the Later scheduler.' },
    { num: '02', title: 'Schedule your photo, carousel, or Reel', desc: 'Schedule photos, carousels, and Reels to post automatically with Later. In just a few clicks, you\'ll have on-brand content scheduled to post whenever you want.' },
    { num: '03', title: 'Your content will auto post to Instagram', desc: "Just set the time, and Later will do the rest. You'll even receive a notification when your post is live!" },
    { num: '04', title: 'Find your best times to post', desc: 'Later learns when your Instagram followers are most engaged, and gives you scheduling suggestions that are unique to your audience.' },
    { num: '05', title: 'Auto post with confidence', desc: 'As an Instagram Partner, we use the Instagram Graph API for publishing to Instagram, so scheduling with Later is always safe.' },
  ]

  const showcases = [
    {
      tag: 'Instagram Auto Poster',
      title: 'Protect your time & your peace with Auto Publish',
      desc: "No more late nights or weekend posting — just schedule posts in advance and they'll automatically publish whenever you want. Enjoy a well-deserved screen break!",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/VuKEVvlHXHHt9bv75TNgO/d1c746bb72b2fab6fef41dc7ee9787de/later-scheduler.png?w=1136&h=961&q=70&fm=png',
    },
    {
      tag: 'See it & Forget it',
      title: 'Schedule tons of different posts with Later Social',
      desc: 'Schedule Reels, single-image posts, and Instagram carousel posts (multiple photos and/or videos in one post) to post automatically with Later.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/VuKEVvlHXHHt9bv75TNgO/d1c746bb72b2fab6fef41dc7ee9787de/later-scheduler.png?w=1136&h=961&q=70&fm=png',
    },
    {
      tag: 'Save Draft Posts',
      title: 'Dream it, draft it, and post it later',
      desc: "Skip the spreadsheets with draft posts! Save your next idea as a draft on your calendar, then edit in the Visual Planner and schedule whenever you're ready.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6hQcvMGOkJAtptAhfUTFN8/951636a3a984a10cae464166a19cdb19/save-draft-posts.png?w=1136&h=961&q=70&fm=png',
    },
    {
      tag: 'Later Mobile App',
      title: 'Create at home or on the go',
      desc: 'Run your social from your phone with the Later mobile app. Forget transferring content from your phone to your desktop — easily manage posts no matter where you are.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/nANaXEAsLoNQ6iEBBgX5Z/ecc2437cc4664eb7b95bd0cbf64dd74e/later-mobile-app.png?w=1166&h=974&q=70&fm=png',
    },
  ]

  const faqs = [
    { q: "What's the difference between auto publish and notification publishing?", a: "Auto publish means that the posts you've scheduled in Later will publish to Instagram without any more work on your side. For example, if you have a single photo post set to auto publish at 3:00 PM on Saturday, that post will go live at 3:00 PM on Saturday." },
    { q: 'Can Instagram Reels be scheduled?', a: "Yes! With Later's Instagram Reels Scheduler, you can visually plan & schedule Reels to auto post whenever you want." },
    { q: 'Can I schedule Instagram carousel posts using auto publish?', a: "Yes! Carousel posts (multi-photo posts, aka photo dumps) with multiple photos and/or videos can be auto published and scheduled using Later's Instagram scheduler." },
    { q: 'Can I Auto Publish Instagram Stories?', a: "At the moment, Instagram Stories scheduled in Later must be published through Notification Publishing. That means: you can still plan and edit your Instagram Stories in Later, schedule them, and get a reminder sent to your phone when it's time to post." },
    { q: 'Can I schedule TikTok posts to Auto Publish?', a: 'Yes! With Later for TikTok you can schedule your TikTok posts in advance to publish at a set date and time. Compose your post, add hashtags, mention other users, and decide whether to allow comments, duets, or stitches.' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>Schedule with Later Social</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            The easiest way to auto post on Instagram
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Automatically publish Instagram images, carousels, and Reels — no notifications required! Save time, schedule posts, and keep your grid fresh.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 48 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/3dDTaDgztH9qIGg9DEfsIy/a7611dd37131d81ba3cb8479bad380af/later-auto-publish-hero.png?w=1136&h=961&q=80&fm=png" alt="Later Auto Publish" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>How Auto Publish Works</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Bulk-schedule posts in advance with Later Social</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>No more interruptions or notifications — just set your Instagram posts to publish automatically, then forget about it.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/1EDWV4rUK7sQfQUX6DpxDE/3b6653cc4ced665383e740136ea66414/how-instagram-auto-publish-works.png?w=1142&h=1002&q=70&fm=png" alt="How Instagram Auto Publish Works" style={{ width: '100%', borderRadius: 8 }} />
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

      {/* Feature Showcases */}
      <section style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto">
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
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Testimonial</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 56 }}>How auto posting on Instagram helps real brands</h2>
          <div style={{ maxWidth: 720, margin: '0 auto', background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/3r3lYKs52JfPx6wUEalLcx/142fdcba75b5dbd193242229a0ca5ceb/jessica-hong.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Jessica Hong" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', marginBottom: 24, fontStyle: 'italic' }}>"Later's Instagram Reels analytics tools have helped us tremendously with being more data-driven in our content strategy. The Reels auto publish is also a must — now we can spend less time manually posting, and more time creating great content!"</p>
            <p style={{ fontWeight: 700, fontSize: 16 }}>Jessica Hong</p>
            <p style={{ fontSize: 14, color: '#777' }}>Social Media Manager, APOTHEKE</p>
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
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

      {/* Bottom CTA */}
      <section className="wood-bg" style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Less screen time, more me time</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Schedule posts in advance with Later Social — try it for free.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
