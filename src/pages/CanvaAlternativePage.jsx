function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function XIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

const BENEFITS = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/1iPS7vcn3YzDvdSHfmb9Zw/4f3b8bc529276886b9cbdca9fa3288dd/icon-schedule-growth.png', title: 'No extra apps required', desc: 'Upload and store your media, bulk schedule your posts, and even measure the impact of your efforts for platforms like Instagram, Facebook, Pinterest, LinkedIn, and TikTok.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7kwn7JlAsTtsDwfI8XA5SZ/796def765fcad3fc4641322e4c874aee/icon-link-in-bio-growth.png', title: 'Drive traffic & track sales', desc: 'Link in Bio by Later turns your Instagram and TikTok profile into a mini web page, complete with analytics.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/51RbGTsClb19G8pdDV1LuL/1346f559c98f79e3b2c48524391fe0ae/Collaboration.png', title: 'Collaborate on campaigns', desc: 'Later helps creators and brands to find each other and collaborate on campaigns.' },
]

const COMPARISON = [
  { feature: 'Schedule and autopost Instagram Carousels, Reels and TikTok videos', later: true, canva: false },
  { feature: 'Bulk schedule to multiple social profiles', later: true, canva: false },
  { feature: 'Best Time to Post for Instagram and TikTok', later: true, canva: false },
  { feature: 'Team collaboration tools', later: true, canva: false },
  { feature: 'Approval workflows', later: true, canva: false },
  { feature: 'Social listening', later: true, canva: false },
  { feature: 'Instagram hashtag suggestions', later: true, canva: false },
  { feature: 'Visually plan Instagram grid', later: true, canva: false },
  { feature: 'Search and Share user-generated content', later: true, canva: false },
  { feature: 'Unlimited media storage', later: true, canva: false },
  { feature: 'Save captions and hashtags', later: true, canva: false },
  { feature: 'Built-in media editing tools', later: true, canva: true },
  { feature: 'Manage customizable link in bio page', later: true, canva: true },
  { feature: 'Link in Bio for Instagram and TikTok (clickable + shoppable)', later: true, canva: false },
  { feature: 'Connect Mailchimp to link in bio', later: true, canva: false },
  { feature: 'Creator and brand collaboration hub', later: true, canva: false },
]

const NUMBERED = [
  { num: '01', title: 'Save time & auto post from anywhere', desc: 'Schedule your Instagram posts, Carousels, Reels, and even TikToks to automatically publish ahead of time.', img: 'https://images.ctfassets.net/nfpsrlop6sws/5OAlY0tfCVbhiLoR9Fm5AG/9729ba38a0662452f1f1e55d9be648ab/auto-publish-instagram-reel-carousels-tiktok-posts.png?fm=webp&q=75&w=1136&h=870' },
  { num: '02', title: 'Measure what matters', desc: 'Reporting, personalized insights, and more, Later helps you understand what works for your business, who is paying attention to and engaging with your content and offers suggestions to optimize your strategy.', img: 'https://images.ctfassets.net/nfpsrlop6sws/5Betj9iacu2ixZWezhKLAu/a5d4da0dc6ca3dd08a63f8337a55d225/social-analytics-performance-demographics.png?fm=webp&q=75&w=1136&h=994' },
  { num: '03', title: 'Find, save, and share the right content', desc: 'Use the drag-and-drop Visual Planner to schedule multiple posts to multiple accounts. Plus, easily find user-generated content that resonates with your feed and your audience.', img: 'https://images.ctfassets.net/nfpsrlop6sws/w5aH28Uy4pdPDBMBMYACh/49edc2870e96630679b87ef4a866458c/save-schedule-user-generated-content.png?fm=webp&q=75&w=1136&h=992' },
]

const COMPARE_LINKS = [
  { label: 'Later vs Buffer', href: '/buffer-alternative' },
  { label: 'Later vs Hootsuite', href: '/hootsuite-alternative' },
  { label: 'Later vs Linktree', href: '/linktree-alternative' },
  { label: 'Later vs Planoly', href: '/planoly-alternative' },
  { label: 'Later vs Native Posting', href: '/native-posting-alternative' },
  { label: 'Later vs Meta', href: '/meta-alternative' },
  { label: 'Later vs Sprout Social', href: '/sprout-social-alternative' },
]

function CellIcon({ value }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <XIcon />
  return <span style={{ fontSize: 14, color: '#666' }}>{value}</span>
}

export default function CanvaAlternativePage() {
  return (
    <div style={{ paddingTop: 70, background: '#FEFCFB' }}>

      {/* 1 — Hero */}
      <section className="wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 16, textTransform: 'uppercase' }}>
                Later vs Canva
              </p>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 52, lineHeight: 1.1, marginBottom: 24 }}>
                Between Later and Canva, Later has all the tools to actually help you grow
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32, maxWidth: 520 }}>
                When it comes to saving time, boosting engagement, and expanding your reach, Later is your go-to social marketing solution. Here's how Later and Canva compare. Try all of our plans 100% free for 14 days.
              </p>
              <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Start free trial <ArrowIcon />
              </a>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/3x2XdsJ0QvUzN6KgHgTOvQ/cec57de69cafb185eba6ea3b322d4e5f/auto-publish-social-posts-analytics-user-generated-content.png?w=1136&h=972&q=80&fm=png"
                alt="Later vs Canva features"
                style={{ width: '100%', borderRadius: 16 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Benefits */}
      <section className="reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase' }}>Later vs Canva</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>
            The social media marketing platform to share your passion, grow your community and build your business.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#555', maxWidth: 700, margin: '0 auto' }}>
            Later gives you everything you need to plan, schedule, and analyze your social media content — without juggling multiple tools.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 56 }}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={{ textAlign: 'center', padding: '32px 20px' }}>
                <img src={b.icon} alt="" style={{ width: 56, height: 56, objectFit: 'contain', margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, marginBottom: 12 }}>{b.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#555' }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Start free trial <ArrowIcon /></a>
          </div>
        </div>
      </section>

      {/* 3 — Comparison Table */}
      <section className="wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 28 }}>Later vs. Canva at a glance</h2>
          <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#000', color: '#fff' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontWeight: 600, fontSize: 15 }}>Features</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Later</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Canva</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#f9f7f4' }}>
                    <td style={{ padding: '14px 24px', fontSize: 15 }}>{row.feature}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.later} /></span></td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.canva} /></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#999', marginTop: 16 }}>Last updated December 2022</p>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Start free trial <ArrowIcon /></a>
          </div>
        </div>
      </section>

      {/* 4 — Numbered Features */}
      <section className="reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase', textAlign: 'center' }}>Later vs Canva</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 12 }}>See what Later can do for you.</h2>
          <p style={{ fontSize: 18, color: '#555', textAlign: 'center', marginBottom: 24 }}>Start using our tools today and try any plan free for 14 days.</p>
          {NUMBERED.map((item, i) => (
            <div key={item.num} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: i < NUMBERED.length - 1 ? 80 : 0, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <div style={{ direction: 'ltr' }}>
                <span style={{ fontSize: 64, fontWeight: 800, color: '#FE3F00', opacity: 0.2, lineHeight: 1 }}>{item.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 16, marginTop: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: '#555', maxWidth: 480 }}>{item.desc}</p>
                <div style={{ marginTop: 24 }}>
                  <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Start free trial <ArrowIcon /></a>
                </div>
              </div>
              <div style={{ direction: 'ltr' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: 16 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Testimonials */}
      <section className="purple-wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 28, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Over 7 million people — from small shops to global brands — use Later. Here's why.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 960, margin: '0 auto' }}>
            <div>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/6m4TVrAovjBjvxbLJfjBEe/90ff1cdd42789f887c192f1ce31d2dcc/kate-talcott.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Kate Talcott" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
              <blockquote style={{ fontSize: 17, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 24, opacity: 0.95 }}>"Later's TikTok auto publish is a game-changer. With two kids, I could never sneak in time to post. Now I can reliably post at peak times—PLUS, Later's analytics allows me to reach peak viewership across all my platforms."</blockquote>
              <p style={{ fontWeight: 600, fontSize: 15 }}>Kate Talcott</p>
              <p style={{ fontSize: 14, opacity: 0.8 }}>@splatter.and.bloom · Founder, Splatter & Bloom</p>
            </div>
            <div>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/7nMlwBPmQiAEXbrCVFUK91/842ff1f7d440fe30a27e7acf66f3578a/jessica-hong-apotheke.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Jessica Hong" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
              <blockquote style={{ fontSize: 17, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 24, opacity: 0.95 }}>"Later's Instagram Reels analytics tools have helped us tremendously with being more data-driven in our content strategy. The Reels auto publish is also a must- now we can spend less time manually posting, and more time creating great content!"</blockquote>
              <p style={{ fontWeight: 600, fontSize: 15 }}>Jessica Hong</p>
              <p style={{ fontSize: 14, opacity: 0.8 }}>Social Media Manager, APOTHEKE</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Compare Links */}
      <section className="reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 12 }}>What's the best social media marketing platform for you?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 24 }}>Learn why over 7 million people use Later Social every day.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            {COMPARE_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15 }}>{l.label} <ArrowIcon /></a>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Bottom CTA */}
      <section className="wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>The best social media scheduling tool for every platform.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Pick the plan that works for you. Test out any Later plan 100% free for 14 days.</p>
          <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Start free trial <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
