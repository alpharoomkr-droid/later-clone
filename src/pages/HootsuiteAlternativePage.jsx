import { Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 8, display: 'inline' }}>
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 10.5l4 4 8-9" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M6 6l8 8M14 6l-8 8" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

const benefits = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/1iPS7vcn3YzDvdSHfmb9Zw/4f3b8bc529276886b9cbdca9fa3288dd/icon-schedule-growth.png', title: 'More tools, more growth', desc: "Later Social makes it easy to schedule social media posts & save time while you're at it." },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/6rilnT4V8v7YXTVdF7O6qv/d0ac358195cb49c86438111ed803fb23/icon-preview-posts.png', title: 'Curate the perfect feed', desc: "Preview & rearrange upcoming posts to find the perfect vibe with Later's Visual Planner." },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7kwn7JlAsTtsDwfI8XA5SZ/796def765fcad3fc4641322e4c874aee/icon-link-in-bio-growth.png', title: 'Drive social sales with Link in Bio', desc: "Drive traffic & increase sales with Link in Bio, Later's link in bio tool." },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/51RbGTsClb19G8pdDV1LuL/1346f559c98f79e3b2c48524391fe0ae/Collaboration.png', title: 'Collaborate on campaigns', desc: 'Later helps creators and brands to find each other and collaborate on campaigns.' },
]

const comparisonRows = [
  { feature: 'Free plan', later: true, hootsuite: false },
  { feature: 'Visually plan Instagram grid', later: true, hootsuite: false },
  { feature: 'Add hashtags as first comment', later: true, hootsuite: false },
  { feature: 'Search and share user-generated content', later: true, hootsuite: false },
  { feature: 'Manage customizable Link in Bio', later: true, hootsuite: true },
  { feature: 'Link in bio for Instagram and TikTok', later: true, hootsuite: true },
  { feature: 'Creator and brand collaboration hub', later: true, hootsuite: false },
  { feature: 'Schedule and auto post social content', later: true, hootsuite: true },
  { feature: 'Best time to post for Instagram and TikTok', later: true, hootsuite: true },
  { feature: 'Reply to Facebook and Instagram DMs', later: true, hootsuite: true },
  { feature: 'Hashtag suggestions for Instagram', later: true, hootsuite: true },
  { feature: 'Team collaboration tools', later: true, hootsuite: true },
  { feature: 'Social listening', later: true, hootsuite: true },
  { feature: 'Built-in media editing tools', later: true, hootsuite: true },
  { feature: 'Add Instagram Shop product tags', later: true, hootsuite: true },
]

const features = [
  { num: '01', title: 'Save time & grow your brand with scheduling tools', desc: 'Later helps you spend less time managing your social media, so you can actually take a break from your phone. Store all of your photos & videos in our Media Library, edit and resize posts, and search for user-generated content all in the app.', img: 'https://images.ctfassets.net/nfpsrlop6sws/12VAm9JbUCaLSQIiTbTNG7/8d8efbb7c2ee656042676e395e61ebc3/hootsuite-save-time.png?fm=webp&q=75&w=1136&h=940' },
  { num: '02', title: 'Boost strategy & engagement with visual-first features', desc: "Create on-brand content in seconds with Later's Visual Planner. Post at the perfect time with our Best Time to Post tool, and extend your reach with personalized Hashtag Suggestions for your audience.", img: 'https://images.ctfassets.net/nfpsrlop6sws/2o05pN8EEHHyLugl5fHuGS/89e7f9e8dda424567e2afcd0147b6b90/hootsuite-visual-first.png?fm=webp&q=75&w=1136&h=1010' },
  { num: '03', title: 'Turn followers into customers with Link in Bio', desc: 'Use Link in Bio to turn your Instagram and TikTok posts into clickable images, complete with analytics that measure which content is driving revenue to your business.', img: 'https://images.ctfassets.net/nfpsrlop6sws/4vzEzBxIVjcUy52gf26KXa/0a509ded003d96250f4207236fa519c8/link-in-bio-cera-studio-graphic.png?fm=webp&q=75&w=1060&h=896' },
]

const compareLinks = [
  { label: 'Later vs. Buffer', href: '/buffer-alternative' },
  { label: 'Later vs. Sprout Social', href: '/sprout-social-alternative' },
  { label: 'Later vs. Planoly', href: '/planoly-alternative' },
  { label: 'Later vs. Linktree', href: '/linktree-alternative' },
]

export default function HootsuiteAlternativePage() {
  const thHead = { fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, padding: '16px 24px', textAlign: 'center', borderBottom: '2px solid #e5e5e5' }
  const td = { padding: '14px 24px', borderBottom: '1px solid #eee', textAlign: 'center', fontSize: 15 }
  const tdFeature = { ...td, textAlign: 'left', fontWeight: 600 }

  return (
    <div style={{ paddingTop: 70 }}>

      {/* 1. Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
          <div>
            <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>BUILD YOUR BRAND ON SOCIAL</p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Best social media management platform: Later vs. Hootsuite
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginBottom: 32, maxWidth: 520 }}>
              See how Later Social saves you more time, helps you reach more engaged audiences, and grow your brand bigger, better, and faster with social media.
            </p>
            <Link to="/signup" className="btn-primary" style={{ fontSize: 16 }}>Start free trial <ArrowIcon /></Link>
          </div>
          <div>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/18nlMmXE3hWNzewBvR2u1T/2edc71d8a5760c618fcfe863900c06aa/later-hootsuite-hero.png?w=1136&h=960&q=80&fm=png" alt="Later vs Hootsuite" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* 2. Benefits */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>WHY LATER IS THE BEST HOOTSUITE ALTERNATIVE</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Manage your social strategy & growth in one platform</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
            Later Social helps you manage your social media marketing, social commerce, and creator partnerships all in one app.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {benefits.map((b, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center' }}>
                <img src={b.icon} alt="" style={{ width: 56, height: 56, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comparison Table */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[900px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>Feature comparison</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#fafafa' }}>
                <th style={{ ...thHead, textAlign: 'left' }}>Features</th>
                <th style={thHead}>Later Social</th>
                <th style={thHead}>Hootsuite</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r, i) => (
                <tr key={i}>
                  <td style={tdFeature}>{r.feature}</td>
                  <td style={td}>{r.later ? <CheckIcon /> : <XIcon />}</td>
                  <td style={td}>{r.hootsuite ? <CheckIcon /> : <XIcon />}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center" style={{ fontSize: 13, color: '#999', marginTop: 16 }}>Last updated April 2025</p>
        </div>
      </section>

      {/* 4. Numbered Features */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center reveal" style={{ marginBottom: 24 }}>
            <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>LATER VS. HOOTSUITE</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>3 reasons to choose Later Social</h2>
            <p style={{ fontSize: 18, color: '#555' }}>Plus, try any Later plan for free.</p>
          </div>
          {features.map((f, i) => (
            <div key={f.num} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <img src={f.img} alt={f.title} style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} loading="lazy" />
              <div style={{ direction: 'ltr' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, color: '#FE3F00' }}>{f.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 900, lineHeight: 1.15, marginBottom: 16, marginTop: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonial */}
      <section className="purple-wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[900px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 28, color: '#fff' }}>
            Over 7 million people — from creators to small shops to global brands — use Later Social. Here's why.
          </h2>
          <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 48, textAlign: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/6m4TVrAovjBjvxbLJfjBEe/90ff1cdd42789f887c192f1ce31d2dcc/kate-talcott.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Kate Talcott" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#fff', marginBottom: 24, fontStyle: 'italic' }}>
              "Later's TikTok auto publish is a game-changer. With two kids, I could never sneak in time to post. Now I can reliably post at peak times—PLUS, Later's analytics allows me to reach peak viewership across all my platforms."
            </p>
            <p style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>Kate Talcott, @splatter.and.bloom</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>Founder — Splatter &amp; Bloom</p>
          </div>
        </div>
      </section>

      {/* 6. Compare Links */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>What's the best social media marketing platform for you?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 24 }}>Learn why over 7 million people use Later Social every day.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {compareLinks.map((l, i) => (
              <Link key={i} to={l.href} className="btn-outline" style={{ fontSize: 15 }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section style={{ backgroundColor: '#000', padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, lineHeight: 1.1, color: '#FEFCFB', marginBottom: 16 }}>
            Later Social is the best Hootsuite alternative
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Try any Later plan free for 14 days.</p>
          <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>Start free trial <ArrowIcon /></Link>
        </div>
      </section>

    </div>
  )
}
