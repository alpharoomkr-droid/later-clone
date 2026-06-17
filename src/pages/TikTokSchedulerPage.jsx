export default function TikTokSchedulerPage() {
  const features = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/55nuMdGWWe3p5bihOfhs7Y/f2c67885e361ce6899bdd4a1ccf62f80/auto-publish-icon.png',
      title: 'Auto publish',
      desc: 'Schedule multiple TikTok posts in advance.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
      title: 'Custom link in bio',
      desc: 'Drive traffic & increase sales from your TikTok to your link in bio page.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/4biG0qn6WRvNYFiAZOY09Y/9e84d0713d8bbf1fa003af05ec2482cd/Later_Icon_SocialMediaMgmt.png',
      title: 'Monitor performance',
      desc: 'Identify your most engaging posts with social media analytics.',
    },
  ]

  const steps = [
    { num: '01', title: 'Plan content in one-go', desc: 'Post your next viral TikTok video with Later! Add hashtags, mentions, and allow comments, duets, and stitching.' },
    { num: '02', title: 'Find your best time to post on TikTok', desc: 'Schedule TikTok videos to automatically publish based on when your followers are online.' },
    { num: '03', title: 'Moderate with conversations', desc: "Publish posts & engage with followers, all in one spot. TikTok conversations lets you easily reply to, like, hide, and delete comments." },
    { num: '04', title: 'Customize your link in bio page', desc: 'Send your TikTok followers to your other social profiles, website, blog, and online shop with Later Link in Bio.' },
    { num: '05', title: 'Get detailed analytics reports', desc: "Use Later's TikTok analytics tool to measure, track, and optimize your profile & post performance." },
  ]

  const showcases = [
    {
      tag: 'AUTO PUBLISH',
      title: 'Bulk schedule TikTok posts with auto publish',
      desc: 'Save time (and enjoy dinner without your phone) by scheduling your TikTok posts to publish automatically — whenever you want. Take the guesswork out of scheduling by enabling best time to post for TikTok.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3LaC7BIZ3aurJzyO9XbW95/27329ff8f2ff01ea85aefc9b9d705ce3/tiktok-autopublish.png?w=1148&h=859&q=70&fm=png',
    },
    {
      tag: 'LINK IN BIO',
      title: 'Increase sales with a customizable TikTok link in bio page',
      desc: 'Direct your TikTok followers from your videos to your link in bio page with links to your website, blog, or online store. Link in bio is like a mini-website built into your TikTok profile, turning each of your posts into clickable images.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6t10UaOxTb1AYskUTjfrwI/449feb4ca67b44f100a1a547f3cc4c54/tiktok-link-in-bio.png?w=1363&h=1151&q=70&fm=png',
    },
    {
      tag: 'ANALYTICS',
      title: 'Measure what matters with TikTok analytics',
      desc: 'Get detailed TikTok follower analytics including demographics and audience growth. Plus, understand the performance of each post so you can boost the top-performing ones & share them on other platforms.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/5RR9ukQsLAUoSFqlNkFmtu/7e5b744c16fa0a37d43e9a4042bbc94d/tiktok-analytics.png?w=1076&h=986&q=70&fm=png',
    },
    {
      tag: 'CONVERSATIONS',
      title: 'Moderate your TikTok comments with Later conversations',
      desc: "Engaging with followers just got easier! With Later's conversations tool, you can view and filter TikTok comments and then reply to, like, hide, or delete comments — all in one spot.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1lp7IKTJWFuAc3j8MPyPxJ/d0d24b9c3e7bfe8ca823cf16c81456d4/tiktok-conversations.png?w=1345&h=995&q=70&fm=png',
    },
  ]

  const faqs = [
    { q: 'Can I check my TikTok analytics using Later?', a: 'Yes! You can view your TikTok analytics at both the audience and individual post level. With TikTok analytics you get a better understanding of who is watching your TikTok videos and which posts are performing best.' },
    { q: 'Can I schedule TikTok posts to auto publish?', a: 'Yes! With Later for TikTok you can schedule your TikTok posts in advance to publish at a set date and time. Compose your post, add hashtags, mention other users, and decide whether to allow comments, duets, or stitches.' },
    { q: 'How do I add a link to my TikTok bio?', a: "As long as you have over 1,000 followers on TikTok, you'll be able to add a customizable link in bio page to your TikTok bio. With link in bio you can link TikTok posts from your feed to specific URLs to drive traffic and increase engagement." },
    { q: 'Can I use one link in bio link for both Instagram and TikTok?', a: 'Yup! You can use the same link in bio link for both your Instagram and TikTok profiles. Your followers will see the posts from the platform that they\'re on when they click your bio link.' },
    { q: 'Can I delete comments on TikTok posts using Later?', a: "Yes. Later's TikTok conversations feature allows you to moderate the comments on your TikTok posts. You can reply, like, hide, or delete comments on your TikTok posts." },
  ]

  const blogs = [
    { title: 'The Best Time to Post on TikTok', img: 'https://images.ctfassets.net/nfpsrlop6sws/3DRl9pr59JUqaGZoSM9fK7/dc4a5939337648c60150d72ca8131c36/Nov28-The-Best-Time-to-Post-on-TikTok-in-2022-Horizontal.png?w=920&h=800&q=80&fm=png', link: 'https://later.com/blog/best-time-to-post-on-tiktok/' },
    { title: 'How to Schedule TikTok Posts With Later', img: 'https://images.ctfassets.net/nfpsrlop6sws/2FHwqx3aQLpSOYV7rI2gUN/8e3d0d5f108385fcd5480cffcf3d0ad1/May17-How-to-Schedule-TikTok-Posts-with-Later-Horizontal.png?w=920&h=800&q=80&fm=png', link: 'https://later.com/blog/schedule-tiktok-posts/' },
    { title: 'How to Get More Views on TikTok', img: 'https://images.ctfassets.net/nfpsrlop6sws/1YN1k1bMXNVCv0iJYVITJf/ebcda7dc856a4a0cca5a1636547a7f09/April4-How-to-Get-More-Views-on-TikTok-Horizontal.png?w=920&h=800&q=80&fm=png', link: 'https://later.com/blog/how-to-get-views-on-tiktok/' },
  ]

  const resources = [
    { title: 'Take Your TikTok Strategy to the Next Level', desc: 'We\'re sharing all the inside information to elevate your TikTok presence with our free 5 day email course.', link: 'https://later.com/training/tiktok-for-business/' },
    { title: 'TikTok Influencer Marketing Guide', desc: 'Learn everything you need to know about influencer marketing on TikTok.', link: 'https://later.com/resources/guide/tiktok-influencer-marketing/' },
    { title: 'How to Never Run Out of TikTok Content Ideas', desc: 'Never run out of TikTok video ideas again! Watch our how-to video to learn how.', link: 'https://later.com/resources/videos/tiktok-content-ideas/' },
    { title: 'How to Grow Your TikTok Following Fast', desc: 'Watch this video to learn how to grow your TikTok followers fast.', link: 'https://later.com/resources/videos/how-to-grow-your-tiktok-following-fast/' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>PLAN YOUR TIKTOK SUCCESS</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            TikTok Scheduler for Planning and Publishing Content in Advance
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Save time & schedule your TikTok videos to publish automatically with Later. We have you covered on TikTok with scheduling, auto-publishing, comment moderation, and a customizable bio link.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 48 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/7szs2I4cOy5tJR2RSSwD6f/f603bac0794ed42d89cd5da1576006fc/tiktok-hero.png?w=1035&h=1076&q=80&fm=png" alt="Later TikTok Scheduler" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Quick features */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>The ultimate TikTok scheduling tool.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 56 }}>Strategize, schedule, and thrive on TikTok.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <img src={f.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
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
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>HOW LATER FOR TIKTOK WORKS</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Your all-in-one TikTok management tool.</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>From cooking videos to ASMR content, Later makes it easy to plan and schedule TikTok videos in less time.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/3xax5sIrOTOYy08dbTwAal/44fd883896223f0671d90226711272e0/tiktok-how-it-works.png?w=1153&h=1161&q=70&fm=png" alt="TikTok How It Works" style={{ width: '100%', borderRadius: 8 }} />
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

      {/* Testimonial 1 */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <img src="https://images.ctfassets.net/nfpsrlop6sws/6m4TVrAovjBjvxbLJfjBEe/90ff1cdd42789f887c192f1ce31d2dcc/kate-talcott.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Kate Talcott" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
          <blockquote style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: '#333', fontStyle: 'italic', marginBottom: 24, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            "Later's TikTok auto publish is a game-changer. With two kids, I could never sneak in time to post. Now I can reliably post at peak times — PLUS, Later's analytics allows me to reach peak viewership across all my platforms."
          </blockquote>
          <p style={{ fontWeight: 700, fontSize: 16 }}>Kate Talcott</p>
          <p style={{ fontSize: 14, color: '#777' }}>Founder - Splatter & Bloom</p>
        </div>
      </section>

      {/* Feature showcases */}
      <section style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>TIKTOK FEATURES</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 64 }}>Keep the good times scrolling.</h2>
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

      {/* Testimonial 2 */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <img src="https://images.ctfassets.net/nfpsrlop6sws/gMft3m6e9RCxWJCFzYM4A/37189e048938ef1d715b59b8c956a5b4/alisha-reed.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Dr. Alisha Reed" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
          <blockquote style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: '#333', fontStyle: 'italic', marginBottom: 24, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            "As a self-care strategist, widowed mom, and pharmacist with a lifestyle brand, I use Later to engage with my audience and share informative content without feeling overwhelmed. Later's conversations feature allows me to respond more quickly to my DMs to grow my community, giving me more time to spend with my son."
          </blockquote>
          <p style={{ fontWeight: 700, fontSize: 16 }}>Dr. Alisha Reed</p>
          <p style={{ fontSize: 14, color: '#777' }}>Self-Care Strategist, @theselfcarepharmacist</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
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
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>The best TikTok post scheduler.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Manage all things TikTok, all in one place with Later.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
