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
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/55nuMdGWWe3p5bihOfhs7Y/f2c67885e361ce6899bdd4a1ccf62f80/auto-publish-icon.png', title: 'Automatically publish your posts', desc: 'Instagram posts, Reels, TikToks, you name it. Later lets you schedule ahead & save time while you\'re at it.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/Twy4RBNMePPJKLsM9Vdvx/9c02bd4a69aa1d32cef3ca199b488859/icon-curate-feed-blue.svg', title: 'Curate the perfect feed', desc: 'Preview & rearrange upcoming posts to find the perfect vibe with Later\'s Visual Planner.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7kwn7JlAsTtsDwfI8XA5SZ/796def765fcad3fc4641322e4c874aee/icon-link-in-bio-growth.png', title: 'Drive social sales with Link in Bio', desc: 'Curate your entire digital presence into one high performing landing page with Later\'s Link in Bio.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/51RbGTsClb19G8pdDV1LuL/1346f559c98f79e3b2c48524391fe0ae/Collaboration.png', title: 'Collaborate on brand campaigns', desc: 'Later helps creators and brands to find each other and collaborate on social marketing campaigns that reach customers.' },
]

const COMPARISON = [
  { feature: 'AI Caption Writer for Instagram', later: true, meta: false },
  { feature: 'Manage and schedule to multiple social profiles', later: true, meta: 'Facebook and Instagram only' },
  { feature: 'Instagram and TikTok best-time-to-post suggestions', later: true, meta: 'Instagram only' },
  { feature: 'Visually plan and preview Instagram grid', later: true, meta: false },
  { feature: 'Unlimited media storage', later: true, meta: false },
  { feature: 'Find and repost user-generated content', later: true, meta: false },
  { feature: 'Instagram hashtag suggestions', later: true, meta: false },
  { feature: 'Social listening', later: true, meta: false },
  { feature: 'Manage your link-in-bio', later: true, meta: false },
  { feature: 'Link Instagram and TikTok posts in link-in-bio', later: true, meta: false },
  { feature: 'Save captions and hashtags', later: true, meta: false },
  { feature: 'Media editing (crop, filters, video trimming)', later: true, meta: true },
  { feature: 'Reply to Facebook and Instagram DMs', later: true, meta: true },
  { feature: 'Team collaboration tools', later: true, meta: true },
  { feature: 'Approval workflows', later: true, meta: true },
  { feature: 'Creator and brand collabs', later: true, meta: false },
]

const NUMBERED = [
  { num: '01', title: 'Save time & grow your brand beyond Meta platforms', desc: 'Store your content Media Library, search user-generated content all in the app, and schedule and automatically publish posts.', img: 'https://images.ctfassets.net/nfpsrlop6sws/5SJZuu7YhAOcayo90teu4Y/8efcc3d9421974c9c67fc3b6f2087b0e/later-social-platforms-auto-publish.png?fm=webp&q=75&w=1136&h=761' },
  { num: '02', title: 'Collaborate on brand campaigns', desc: 'Later helps creators and brands to find each other and collaborate on campaigns that reach customers beyond Meta-owned platforms including TikTok.', img: 'https://images.ctfassets.net/nfpsrlop6sws/7us1Ui1op4WoyeCzpBiAsF/0ffafcc6d4ed66eac8c49fc5678980c1/meta-collab-campaigns.png?fm=webp&q=75&w=1136&h=974' },
  { num: '03', title: 'Turn followers into customers with Link In Bio', desc: 'Use Link in Bio to turn your Instagram and TikTok posts into clickable images, complete with analytics that measure which content is driving revenue to your business.', img: 'https://images.ctfassets.net/nfpsrlop6sws/61sxk0AYb1RMtIg0jD3Sdv/2638d93dbc558c22e4a3dd015b20dea9/link-in-bio-bstudio-graphic.png?fm=webp&q=75&w=1136&h=899' },
]

const COMPARE_LINKS = [
  { label: 'Later vs Buffer', href: '/buffer-alternative' },
  { label: 'Later vs Hootsuite', href: '/hootsuite-alternative' },
  { label: 'Later vs Linktree', href: '/linktree-alternative' },
  { label: 'Later vs Planoly', href: '/planoly-alternative' },
  { label: 'Later vs Native Posting', href: '/native-posting-alternative' },
  { label: 'Later vs Canva', href: '/canva-alternative' },
  { label: 'Later vs Sprout Social', href: '/sprout-social-alternative' },
]

function CellIcon({ value }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <XIcon />
  return <span style={{ fontSize: 14, color: '#666' }}>{value}</span>
}

export default function MetaAlternativePage() {
  return (
    <div style={{ paddingTop: 70, background: '#FEFCFB' }}>

      {/* 1 — Hero */}
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 16, textTransform: 'uppercase' }}>
                Meta Business Suite Alternative
              </p>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 52, lineHeight: 1.1, marginBottom: 24 }}>
                Why choose Later vs. Meta Business Suite?
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32, maxWidth: 520 }}>
                Later helps you save more time, reach more engaged audiences and grow your brand bigger, better, and faster on social media.
              </p>
              <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Start free trial <ArrowIcon />
              </a>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/5yU304cQa1FWjc5FnKmPnX/d28d4612ed30e1a21ac7e4bdedb8150a/meta-alternative-hero.png?w=1136&h=900&q=80&fm=png"
                alt="Later vs Meta Business Suite"
                style={{ width: '100%', borderRadius: 16 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Benefits */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase' }}>
            Best Meta Business Suite Alternative
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>
            Manage all your social channels in one platform
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
            Later helps you manage your social media marketing, social commerce, and creator partnerships all in one app.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
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
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 28 }}>Later vs. Meta Business Suite at a glance</h2>
          <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#000', color: '#fff' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontWeight: 600, fontSize: 15 }}>Features</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Later</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 200 }}>Meta Business Suite</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#f9f7f4' }}>
                    <td style={{ padding: '14px 24px', fontSize: 15 }}>{row.feature}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.later} /></span></td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.meta} /></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#999', marginTop: 16 }}>Last updated April 2025</p>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Start free trial <ArrowIcon /></a>
          </div>
        </div>
      </section>

      {/* 4 — Numbered Features */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase', textAlign: 'center' }}>Later vs. Meta Business Suite</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 12 }}>Ready to see what Later can do for you?</h2>
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

      {/* 5 — Testimonial */}
      <section className="purple-wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 28, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Over 7 million people — from small shops to global brands — use Later. Here's why.</h2>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/5fzCk9FyNc8vd4QSN37J3e/23ff1c25c81f9ce891d267cf71beeb6f/elizabeth-joy.png?w=640&h=641&q=50&fm=png" alt="Elizabeth Joy" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
            <blockquote style={{ fontSize: 18, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 24, opacity: 0.95 }}>"Later's scheduling tool helps us stay more consistent across our social channels so we can share our resources about sustainability & slow fashion. It's great because we've also seen an increase in the number of views & engagement that we get with our content."</blockquote>
            <p style={{ fontWeight: 600, fontSize: 15 }}>Elizabeth Joy</p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>@consciousstyle · Founder, Editor and Podcaster</p>
          </div>
        </div>
      </section>

      {/* 6 — Compare Links */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
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
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>Need a Meta Business Suite alternative?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Try any Later plan free for 14 days.</p>
          <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Start free trial <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
