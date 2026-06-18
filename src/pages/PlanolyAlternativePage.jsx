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
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/604XO5TEeSwNfARO48IEln/aec16ae66b35db81967bcfd9be3fda85/icon-save-time.png', title: 'Automatically publish your posts', desc: 'Instagram Reels, TikToks, carousels, you name it. Later Social lets you schedule ahead & save time while you\'re at it.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/14UWGZIzbpwlUATcv8ajOy/134cf2ce399c54e18a7fbdbe689937fc/icon-measure.png', title: 'Analyze your performance', desc: 'Measure, optimize, and repeat to see what\'s working across Instagram, TikTok and Facebook - and what\'s not - with Later Analytics.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/AaBm3ibequ1BOFMIa82kg/fc9e23dae9280557ca13b9565fc6236e/later-linkinbio-icon.png', title: 'Create shoppable social grids with Link in Bio', desc: 'Feature your latest video content, e-commerce shop, and connect your Mailchimp account to build your newsletter audience with Link in Bio, Later\'s link in bio tool.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/51RbGTsClb19G8pdDV1LuL/1346f559c98f79e3b2c48524391fe0ae/Collaboration.png', title: 'Collaborate on brand campaigns', desc: 'Later helps creators and brands to find each other and collaborate on campaigns that reach customers.' },
]

const COMPARISON = [
  { feature: 'Auto-publish TikTok videos', later: true, planoly: false },
  { feature: 'Auto-publish to Facebook and LinkedIn', later: true, planoly: false },
  { feature: 'Unlimited media storage', later: true, planoly: false },
  { feature: 'Hashtag analytics', later: true, planoly: false },
  { feature: 'Reply to Facebook and Instagram DMs', later: true, planoly: false },
  { feature: 'Visually plan Instagram grid', later: true, planoly: false },
  { feature: 'Best Time to Post for Instagram and TikTok', later: true, planoly: true },
  { feature: 'Crop media, add filters, trim video', later: true, planoly: true },
  { feature: 'Tag products from Instagram Shop', later: true, planoly: true },
  { feature: 'Search and Share user-generated content', later: true, planoly: true },
  { feature: 'Manage customizable Link in Bio page', later: true, planoly: true },
  { feature: 'Free Link in Bio for Instagram and TikTok', later: true, planoly: false },
  { feature: 'Creator and brand collabs', later: 'FREE!', planoly: false },
]

const NUMBERED = [
  { num: '01', title: 'Save time & grow your brand with scheduling tools', desc: 'Store all of your photos & videos in our Media Library, automatically publish posts, and search for user-generated content all in the app.', img: 'https://images.ctfassets.net/nfpsrlop6sws/44KXXZWD2vzsKkvxJ9cRmg/72ae67c2ce5165498feae80ac01521b5/auto-publish-posts-user-generated-content-media-library.png?fm=webp&q=75&w=1136&h=968' },
  { num: '02', title: 'Boost strategy & engagement with visual-first features', desc: 'Create on-brand content in seconds with Later\'s Visual Planner and post at the perfect time for more engagement with our Best Time to Post tool.', img: 'https://images.ctfassets.net/nfpsrlop6sws/GqHPQrUyi08KaLOewtrth/6860a814b4740891de5d29fff0e346ab/visual-planner-best-time-to-post-instagram-tiktok.png?fm=webp&q=75&w=1136&h=970' },
  { num: '03', title: 'Turn followers into customers with Link in Bio', desc: 'Use Link in Bio to turn your Instagram and TikTok posts into clickable, shoppable images, complete with analytics that measure which content is driving revenue to your business.', img: 'https://images.ctfassets.net/nfpsrlop6sws/7JrsTnoUmJm809DeFoHApY/51c00be1cc139ae5e76ab43ab6008679/link-in-bio-instagram-tiktok-analytics.png?fm=webp&q=75&w=1136&h=994' },
]

const COMPARE_LINKS = [
  { label: 'Later vs Hootsuite', href: '/hootsuite-alternative' },
  { label: 'Later vs Buffer', href: '/buffer-alternative' },
  { label: 'Later vs Sprout Social', href: '/sprout-social-alternative' },
  { label: 'Later vs Linktree', href: '/linktree-alternative' },
  { label: 'Later vs Native Posting', href: '/native-posting-alternative' },
  { label: 'Later vs Meta', href: '/meta-alternative' },
  { label: 'Later vs Canva', href: '/canva-alternative' },
]

function CellIcon({ value }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <XIcon />
  return <span style={{ fontSize: 14, color: '#666' }}>{value}</span>
}

export default function PlanolyAlternativePage() {
  return (
    <div style={{ paddingTop: 70, background: '#FEFCFB' }}>

      {/* 1 — Hero */}
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 16, textTransform: 'uppercase' }}>PLANOLY VS. LATER</p>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 52, lineHeight: 1.1, marginBottom: 24 }}>Later is the best Planoly alternative.</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32, maxWidth: 520 }}>Compared to Planoly, Later offers more tools, more social platforms, and multiple app integrations to help leading brands get better performance.</p>
              <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Start free trial <ArrowIcon /></a>
            </div>
            <div>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/3Yngh5pORtpLdqrSJxHib9/4b8fec7888e910efc551906ec276dfd2/planoly-vs-later-hero.png?w=1136&h=960&q=80&fm=png" alt="Later vs Planoly" style={{ width: '100%', borderRadius: 16 }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Benefits */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase' }}>THE PLANOLY ALTERNATIVE FOR YOU</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>One App. Endless tools for growth.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>Social scheduling, Link in Bio, and brand partnerships – get them all with Later.</p>
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
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 28 }}>Later vs. Planoly at a glance</h2>
          <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#000', color: '#fff' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontWeight: 600, fontSize: 15 }}>Features</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Later</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Planoly</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#f9f7f4' }}>
                    <td style={{ padding: '14px 24px', fontSize: 15 }}>{row.feature}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.later} /></span></td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.planoly} /></span></td>
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
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase', textAlign: 'center' }}>PLANOLY VS. LATER</p>
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
      <section className="purple-wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 28, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Over 7 million people — from small shops to global brands — use Later. Here's why.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 960, margin: '0 auto' }}>
            <div>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/6m4TVrAovjBjvxbLJfjBEe/90ff1cdd42789f887c192f1ce31d2dcc/kate-talcott.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Kate Talcott" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
              <blockquote style={{ fontSize: 17, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 24, opacity: 0.95 }}>"Later's TikTok auto publish is a game-changer. With two kids, I could never sneak in time to post. Now I can reliably post at peak times — PLUS, Later's analytics allows me to reach peak viewership across all my platforms."</blockquote>
              <p style={{ fontWeight: 600, fontSize: 15 }}>Kate Talcott</p>
              <p style={{ fontSize: 14, opacity: 0.8 }}>@splatter.and.bloom · Founder, Splatter & Bloom</p>
            </div>
            <div>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/1UkhjmSljwhDK3suCxuHxC/853f5ceda864ab9941c586938691d215/lucas-o-keefe.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Lucas O'Keefe" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
              <blockquote style={{ fontSize: 17, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 24, opacity: 0.95 }}>"Later's scheduling tools make it so easy to plan and publish content across all our social channels. It's completely transformed our workflow and saved us countless hours every week."</blockquote>
              <p style={{ fontWeight: 600, fontSize: 15 }}>Lucas O'Keefe</p>
              <p style={{ fontSize: 14, opacity: 0.8 }}>Social Media Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Compare Links */}
      <section className="reveal" style={{ padding: '70px 0' }}>
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
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>Need a Planoly alternative?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Try any Later plan free for 14 days.</p>
          <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Start free trial <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
