export default function InstagramDesktopPage() {
  const steps = [
    { num: '01', title: 'More space, better planning', desc: "Later's Instagram planner for desktop gives you a full view of your content calendar, making it easy to visually plan posts and preview your feed." },
    { num: '02', title: 'Drag-and-drop simplicity', desc: 'Bye-bye lengthy image uploads! Just drag & drop media into your content calendar and they\'re ready to publish whenever you want.' },
    { num: '03', title: 'Turn followers into customers', desc: 'Create a custom Link in Bio page for your Instagram and add links to your posts so your followers can shop your stuff or find the content they\'re looking for.' },
    { num: '04', title: 'Publish content from anywhere', desc: "Download Later's mobile app and schedule posts whenever inspiration strikes, no matter where you are." },
    { num: '05', title: 'One platform for everything', desc: 'Later has everything you need to manage your account in one place, including image editing, Stories scheduling, analytics, and more.' },
  ]

  const showcases = [
    {
      tag: 'POST INSTAGRAM STORIES FROM YOUR DESKTOP',
      title: 'Schedule Stories to publish automatically',
      desc: 'Say goodbye to notification posting! Create, edit, and schedule your Instagram Stories ahead of time, and let Later do the rest.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4xTACNNul6y9NOmTe5aHlB/480bde4a7e13ad89f8a524ca755213ba/post-instagram-stories-from-desktop.png?w=1136&h=800&q=70&fm=png',
    },
    {
      tag: 'POST INSTAGRAM REELS ON YOUR DESKTOP',
      title: 'Schedule Instagram Reels & boost engagement',
      desc: 'Use the Later desktop app to schedule Reels in advance — so you can save time planning social posts, show off your brand, & reach more followers.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3mmUBawkPbpjzAgUt9d1BI/dcaa22c5dfaee50baae7c2c65a186aab/post-instagram-reels-on-desktop.png?w=1172&h=800&q=70&fm=png',
    },
    {
      tag: 'INSTAGRAM FEED PLANNER FOR DESKTOP',
      title: 'Curate your grid your way',
      desc: 'Find the perfect vibe for your feed with the Visual Planner tool! Create and preview posts before you schedule & rearrange your grid exactly how you want it.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/5zx8u6qbYj4EkGARSAAKrv/fe3993f8c68acf77e422805ccde1602e/instagram-feed-planner-for_desktop.png?w=1162&h=801&q=70&fm=png',
    },
  ]

  const faqs = [
    { q: 'Can I post to Instagram from my desktop?', a: 'Yes! You can schedule Instagram posts using Auto Publish from the Later desktop app, as well as from the Later mobile app.' },
    { q: 'How do I schedule a post on Instagram from my desktop?', a: 'From the Calendar, select your social profile(s), drag and drop media from your Side Library, edit your media, write a caption, add suggested hashtags, and click Schedule Post. Done!' },
    { q: 'Can I post Instagram Stories from my desktop?', a: 'Yes, you can! Just create, edit, and schedule your Stories the same way you would with regular Instagram posts.' },
    { q: 'When is the best time to post Instagram Reels?', a: "Not sure when to post? Try Later's Best Time to Post tool. It combines data from your audience & post engagement to give you recommendations on the best days and times to post that are completely unique to you." },
  ]

  const blogs = [
    { img: 'https://images.ctfassets.net/nfpsrlop6sws/6fr3hFAtva4tUf7ccUg3UP/cd337967640c5016c68ab9d5563120d2/blog-thumbnail.png?w=550&h=292&q=80&fm=png', title: 'When Is the Best Time to Post on Instagram?', link: '/blog/best-time-to-post-on-instagram' },
    { img: 'https://images.ctfassets.net/nfpsrlop6sws/8WX01xMGIXADoxdxnOEsv/02869ff8515d1d2ee0ca7e5530f807eb/2024-How-Often-to-Post-on-IG-Horizontal.png?w=920&h=800&q=80&fm=png', title: 'How Often Should You Post on Instagram Every Week', link: '/blog/how-often-post-to-instagram' },
    { img: 'https://images.ctfassets.net/nfpsrlop6sws/4aqMh7luElLHew9G5pKdaJ/41f092cae5d6813766fb4fd2bfefe606/Dec15-How-to-Schedule-Instagram-Posts-Horizontal.png?w=920&h=800&q=80&fm=png', title: 'How to Schedule Instagram Posts: The Ultimate Guide', link: '/blog/schedule-instagram-posts' },
  ]

  const resources = [
    { title: 'Ste Michelle Wine Estates', desc: 'How Ste Michelle Wine Estates scaled social proof with Later to drive cost savings.', link: '/case-studies/ste-michelle-wine-estates' },
    { title: 'Influencer Marketing Planning Guide', desc: 'Download the planning guide and get ready for the year ahead!', link: '/resources/guide/influencer-marketing-planning' },
    { title: 'Instagram Marketing: The Definitive Guide', desc: 'Learn the fundamentals of Instagram marketing in this guide from Later!', link: '/training/instagram-marketing' },
    { title: 'Spectrum Brands', desc: 'How Spectrum Brands and Later activated 4 pet brands for a Holly Jolly holiday campaign.', link: '/case-studies/spectrum-brands' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>DITCH THE SMALL SCREEN</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Manage all your socials on the Later desktop app
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Easily post on Instagram from your desktop with Later! Plan your feed, schedule in advance, and automatically post images, carousels, Stories, and Reels.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Start free trial</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/1CO6kdBh5H2x2wnm97ZXg5/58f7cac2c3ace382081a190a147c1114/later-desktop-posting.png?w=1172&h=832&q=80&fm=png" alt="Instagram desktop posting with Later" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>SCHEDULE. POST. REPEAT.</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>How to post on Instagram from your desktop</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/5Z2fJbdbKcK0mQpmfx1hco/f48f2206d9bfdbce50591cf52f50e17a/post-on-instagram-from-desktop-with-later.png?w=1133&h=1088&q=70&fm=png" alt="Post on Instagram from desktop" style={{ width: '100%', borderRadius: 8 }} />
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
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>SET IT & FORGET IT</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Plan all of your Instagram posts right from your laptop</h2>
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
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>DON'T JUST TAKE OUR WORD FOR IT</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>Here's why people love Later!</h2>
          <div style={{ maxWidth: 800, margin: '0 auto', background: '#fff', borderRadius: 12, padding: 48 }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/6gdO8tgJsusrGqyW7Lv819/03dec4e02a6c50d38e4bd071ca1b8afb/artifact-uprising.png?w=640&h=640&q=50&fm=png" alt="Artifact Uprising" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', fontStyle: 'italic', marginBottom: 24 }}>
                  "We love using Later because not only does it allow us to visually see our images laid out on a calendar week by week, but it shows us the best time to post. We wouldn't go anywhere else to schedule and curate our social media - biggest fans of the Later team and the technology they've created!"
                </p>
                <p style={{ fontWeight: 700, fontSize: 16 }}>Megan White</p>
                <p style={{ fontSize: 14, color: '#777' }}>Brand Marketing Associate - Artifact Uprising</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
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
        <div className="max-w-[1440px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 900, lineHeight: 1.3, marginBottom: 12 }}>Learn how to get better ROI from your social media content & campaigns with Later's helpful (free!) resources.</h2>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 32, marginTop: 48 }}>Blogs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 32 }}>
            {blogs.map((b, i) => (
              <a key={i} href={b.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={b.img} alt={b.title} style={{ width: '100%', borderRadius: 8, marginBottom: 16, aspectRatio: '16/9', objectFit: 'cover' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, lineHeight: 1.4 }}>{b.title}</h4>
                <p style={{ fontSize: 14, color: '#777', marginTop: 4 }}>Blog Post</p>
              </a>
            ))}
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Resources</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #eee' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{r.title}</h4>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.5, marginBottom: 16 }}>{r.desc}</p>
                <a href={r.link} style={{ fontSize: 15, color: '#FE3F00', fontWeight: 600, textDecoration: 'none' }}>Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="wood-bg" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Manage your entire social strategy from your desktop</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Create, edit, and schedule Instagram posts with Later.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Start free trial</a>
        </div>
      </section>
    </div>
  )
}
