export default function InstagramPlannerPage() {
  const steps = [
    { num: '01', title: 'Organize your content calendar', desc: 'Schedule your posts by dropping photos and videos onto the calendar. Need a look at what\'s coming up? Toggle between monthly and weekly views.' },
    { num: '02', title: 'Curate your aesthetic', desc: 'See your profile the way your followers will. Arrange your upcoming scheduled posts with a drag-and-drop to find the perfect look for your feed.' },
    { num: '03', title: 'Auto post all your content', desc: 'Save time by scheduling all your Instagram posts — including carousels, Reels, and Stories — in the Instagram feed planner.' },
    { num: '04', title: 'Bulk-schedule posts in seconds', desc: 'Just drag and drop content from your media library to bulk-schedule multiple posts at once!' },
    { num: '05', title: 'Post to 7 different social platforms', desc: 'Schedule the same post for multiple social platforms at the same time and customize the post for each channel.' },
  ]

  const showcases = [
    {
      tag: 'CONTENT CALENDAR FOR INSTAGRAM',
      title: 'Plan a day, a week, or months ahead',
      desc: 'Why use multiple apps? Do it all with Later Social! Create, edit, and schedule posts and plan your entire social content calendar all in the Later app.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3RjEPkxTtxXa1Vl5TLumUQ/30353065f94f1ebbd0cd6b854a37fa6f/later-content-calendar-for-instagram.png?w=1136&h=846&q=70&fm=png',
    },
    {
      tag: 'INSTAGRAM GRID PLANNER',
      title: 'Align your grid with your vibe',
      desc: 'Want to curate your Instagram feed? No problem! Use Later Social to preview & rearrange posts so your grid always suits your brand aesthetic.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6YGb4Suzo8G4upNd2jhsTT/f916dbed3c1ad83e373c53c66b48fe41/instagram-grid-planner.png?w=1172&h=870&q=70&fm=png',
    },
    {
      tag: 'MEDIA LIBRARY',
      title: 'Keep all of your media in one app',
      desc: 'Upload all your photos, videos, and user-generated content to your Media Library and have them easily accessible on any device.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4JNq2dhod3RSTxIr7t3rNN/b58f12cb82f9e0f6cd84d41f14dd3f4b/later-media-library.png?w=1162&h=836&q=70&fm=png',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>Easy Instagram planning app</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Curate your grid with Later's Instagram feed planner
          </h1>
          <p className="hero-enter-d1" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Find the perfect vibe for your feed with the Visual Planner on Later Social! Create and preview posts before you schedule & rearrange your grid exactly how you want it.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/3vnYyG6OTfQpWB6TP2UrYZ/4b013d821268b3a41db07ae2c4610516/later-instagram-visual-planner-hero.png?w=1168&h=870&q=80&fm=png" alt="Later Visual Instagram Planner" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>How the Visual Planner works</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Plan and preview your grid</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
            Use Later's Visual Planner to create, edit, and preview your Instagram feed — then schedule your posts to publish whenever you want.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/4Kt8wIntNQwQ0L7hsrOjLi/66e92c3db94ad0e1d8d738d3bab3be27/later-instagram-feed-planner.png?w=1134&h=1048&q=70&fm=png" alt="Instagram Feed Planner" style={{ width: '100%', borderRadius: 8 }} />
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
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Plan your Instagram layout</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Save time while staying on brand</h2>
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

      {/* Testimonial */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[900px] mx-auto text-center reveal">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Testimonial</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>Why people love Later Social's Visual Planner</h2>
          <div style={{ background: '#F8F2EA', borderRadius: 16, padding: 48, maxWidth: 700, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/5czdqmdPQtpordskGFSKmI/ac71c797e83900c76839758100ea049d/hippeas.png?w=640&h=640&q=50&fm=png" alt="HIPPEAS Snacks" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', marginBottom: 24, fontStyle: 'italic' }}>
              "My favorite thing about using Later is how intuitive and visual the platform is. Maintaining a consistent feed for HIPPEAS was our top priority and Later's grid preview was exactly what we needed to organize our content. Our marketing team is spread across the US and UK, so having Later really helped us all stay connected."
            </p>
            <p style={{ fontWeight: 700, fontSize: 16 }}>Bella Ly</p>
            <p style={{ fontSize: 14, color: '#777' }}>Social Media Manager, HIPPEAS Snacks</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="wood-bg" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Plan, preview, & schedule your Instagram posts</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Start scheduling with Later Social — try it for free.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
