function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 8, display: 'inline' }}>
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const Check = () => <span style={{ color: '#22c55e', fontSize: 20, fontWeight: 700 }}>&#10003;</span>
const Cross = ({ label }) => <span style={{ color: '#999', fontSize: 14 }}>{label}</span>

const benefits = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/5WpaeV0pNmMezuYTxUTMr7/a0658b9dcb60adcb7db958c3dd384af5/icon-free-link-in-bio.png', title: 'Free with every Later plan', desc: "Don't pay extra for a link solution — unlike Linktree, Later's Link in Bio is included for free with every plan." },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/2KhI1JjOj5hhReFkgDW0QC/3bdb0a1d7d7aafda1bfa57c8680c0592/icon-grow-link-in-bio.png', title: 'Grow your following on every platform', desc: 'Guide followers to your featured content, online store, and mailing list to engage on every channel.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7H0OZtt3jwtai9QigTrg6q/5f73e213c56b41df50f61dff7207e074/icon-conversion-link-in-bio.png', title: 'Customize for SEO & appearance', desc: 'Customize the color, shape, style, and shadow of your buttons. You can also optimize your title tag and meta description for search engines.' },
]

const comparisonRows = [
  { feature: 'Unlimited media storage', later: true, linktree: 'No' },
  { feature: 'Custom page designs, button, and font styles', later: true, linktree: 'Paid plans only' },
  { feature: 'Premium Themes', later: true, linktree: 'Paid plans only' },
  { feature: 'Featured banner with important links', later: true, linktree: 'Paid plans only' },
  { feature: 'Add affiliate links', later: true, linktree: 'Paid plans only' },
  { feature: 'Link Instagram and TikTok posts', later: true, linktree: 'No' },
  { feature: 'Link Instagram Reels', later: true, linktree: 'No' },
  { feature: 'Add multiple links to linked social posts', later: true, linktree: 'No' },
  { feature: 'Mailchimp connection', later: true, linktree: 'Paid plans only' },
  { feature: 'Track link clicks and sales in Google Analytics', later: true, linktree: 'Paid plans only' },
  { feature: 'Create, plan, and schedule social content', later: true, linktree: 'No' },
]

const whyCards = [
  { num: '01', title: 'Turn engagement into revenue', desc: 'With clickable Instagram and TikTok grids you can use your social content to direct customers to your online store, specific product listings, or wherever you like.', img: 'https://images.ctfassets.net/nfpsrlop6sws/5UExtbgAXwDcfjP3rehNy5/4080ab459b44835785c62789ecd9c823/link-in-bio-clickable-grid-graphic.png?fm=webp&q=75&w=1136&h=815' },
  { num: '02', title: 'Create & customize', desc: 'Choose between a light and dark theme, curate your content, and then drop your new link into your Instagram and TikTok bio.', img: 'https://images.ctfassets.net/nfpsrlop6sws/3OqQtEjAgFfpWWS5jL1dwq/fa88e833982b4fdaa35044706601b31b/link-in-bio-custom-create-graphic.png?fm=webp&q=75&w=1136&h=996' },
  { num: '03', title: 'Analyze your posts', desc: 'Measure, optimize, repeat. See the Later Link in Bio data flow into Analytics, so you can measure clicks and see which content is driving revenue to your business.', img: 'https://images.ctfassets.net/nfpsrlop6sws/5WFcFNSJasCsmy2zsrdJVZ/28bc2f4d50c42ad5f72240b301d84eb6/link-in-bio-analytics.png?fm=webp&q=75&w=1136&h=904' },
  { num: '04', title: 'Add affiliate links to content & get paid', desc: 'Connect your Later Link in Bio to our Mavely integration and earn with every product you promote — and track direct sales from your posts.', img: 'https://images.ctfassets.net/nfpsrlop6sws/1DcMpgb8vpERbbi0l2ceWK/3aef8a7cdf1b38b329f854d5c9c56694/link-in-bio-create-link-graphic.png?fm=webp&q=75&w=1136&h=924' },
]

const compareLinks = [
  { label: 'Later vs. Hootsuite', href: '/hootsuite-alternative' },
  { label: 'Later vs. Buffer', href: '/buffer-alternative' },
  { label: 'Later vs. Sprout Social', href: '/sprout-social-alternative' },
  { label: 'Later vs. Planoly', href: '/planoly-alternative' },
]

export default function LinktreeAlternativePage() {
  const thHead = { fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, padding: '16px 24px', textAlign: 'center', borderBottom: '2px solid #e5e5e5' }
  const td = { padding: '14px 24px', borderBottom: '1px solid #eee', textAlign: 'center', fontSize: 15 }
  const tdFeature = { ...td, textAlign: 'left', fontWeight: 600 }

  return (
    <div style={{ paddingTop: 70 }}>
      {/* 1. Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto hero-enter" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
          <div>
            <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>LINKTREE VS. LATER LINK IN BIO</p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Start earning more with Later Link in Bio
            </h1>
            <p className="hero-enter-d1" style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginBottom: 32, maxWidth: 520 }}>
              Add a single link to your social media bios to help your followers discover more about you, your products, and your brand — for free.
            </p>
            <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16 }}>Claim your free bio <ArrowIcon /></a>
          </div>
          <div className="hero-enter-d3">
            <img src="https://images.ctfassets.net/nfpsrlop6sws/LiJ4s59q28peYNYLawp6l/b91a37fae9f73b10b743b4dd9c32e0d8/later-linktree-hero.png?w=1136&h=960&q=80&fm=png" alt="Later Link in Bio vs Linktree" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* 2. Benefits */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>The Linktree alternative for you</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>One link is all you need</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
            Drive traffic from social media to wherever you want, like your website, online shop, or blog. Sell your products, track your sales, and make more money.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginBottom: 28 }}>
            {benefits.map((b, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center' }}>
                <img src={b.icon} alt="" style={{ width: 56, height: 56, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Claim your free Link in Bio <ArrowIcon /></a>
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
                <th style={thHead}>Later Link in Bio</th>
                <th style={thHead}>Linktree</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r, i) => (
                <tr key={i}>
                  <td style={tdFeature}>{r.feature}</td>
                  <td style={td}><Check /></td>
                  <td style={td}>{r.linktree === 'No' ? <span style={{ color: '#ef4444', fontSize: 18, fontWeight: 700 }}>&#10007;</span> : <Cross label={r.linktree} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center" style={{ fontSize: 13, color: '#999', marginTop: 16 }}>Last updated August 2023</p>
          <div className="text-center" style={{ marginTop: 32 }}>
            <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get started for free <ArrowIcon /></a>
          </div>
        </div>
      </section>

      {/* 4. Why Later */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Linktree Alternative</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Why creators choose Later Link in Bio:</h2>
          {whyCards.map((c, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <img src={c.img} alt={c.title} style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} />
              <div style={{ direction: 'ltr' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, color: '#FE3F00' }}>{c.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 900, lineHeight: 1.15, marginBottom: 16, marginTop: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="purple-wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12, color: 'rgba(255,255,255,0.7)' }}>WHY LATER LINK IN BIO?</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32, color: '#fff' }}>Here's what Later Link in Bio customers have to say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            <div className="reveal reveal-d1" style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 40 }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/2eqJV8CgYCshzZXqFHePNC/abd91d4dc644182bd5a0bf9438a98d19/ProfileImage.png?w=641&h=640&q=50&fm=png" alt="Brock Cardiner" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
              <p style={{ fontSize: 16, lineHeight: 1.7, color: '#fff', marginBottom: 24 }}>
                "Later Link in Bio has been a game changer for us, successfully allowing us to utilize Instagram as a traffic resource and not just as an engagement resource. We also now have better than ever alignment between our web content and Instagram."
              </p>
              <p style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>Brock Cardiner</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>HighSnobiety</p>
            </div>
            <div className="reveal reveal-d2" style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 40 }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/16TD47SxfB6Rkv7mPavDsw/cea040387cf50e15662cd18d35702f60/usa-today.png?w=640&h=640&q=50&fm=png" alt="USA Today" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
              <p style={{ fontSize: 16, lineHeight: 1.7, color: '#fff', marginBottom: 24 }}>
                "The Later Link in Bio landing page is a copy of the account's grid. This is a seamless experience for our users who are looking for more. We use the Later Link in Bio analytics to send reports back to section editors about what people are clicking through to."
              </p>
              <p style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>USA Today</p>
            </div>
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
              <a key={i} href={l.href} className="btn-outline" style={{ fontSize: 15 }}>{l.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="wood-bg" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Ready to add Later Link in Bio?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Switch to Later for free. Linktree customers can import their profile into Later Link in Bio with just a few clicks.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Claim your free Link in Bio <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
