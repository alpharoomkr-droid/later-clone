function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 8, display: 'inline' }}>
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

function CellIcon({ value }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <XIcon />
  return <span style={{ fontSize: 14, color: '#666' }}>{value}</span>
}

const benefits = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/5WpaeV0pNmMezuYTxUTMr7/a0658b9dcb60adcb7db958c3dd384af5/icon-free-link-in-bio.png', title: 'Free with every Later plan', desc: "Don't pay extra for a link solution — unlike Linktree, Later's Link in Bio is included for free with every plan." },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/2KhI1JjOj5hhReFkgDW0QC/3bdb0a1d7d7aafda1bfa57c8680c0592/icon-grow-link-in-bio.png', title: 'Grow your following on every platform', desc: 'Guide followers to your featured content, online store, and mailing list to engage on every channel.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7H0OZtt3jwtai9QigTrg6q/5f73e213c56b41df50f61dff7207e074/icon-conversion-link-in-bio.png', title: 'Customize for SEO & appearance', desc: 'Customize the color, shape, style, and shadow of your buttons. You can also optimize your title tag and meta description for search engines.' },
]

const comparisonRows = [
  { feature: 'Unlimited media storage', later: true, linktree: false },
  { feature: 'Custom page designs, button, and font styles', later: true, linktree: 'Paid plans only' },
  { feature: 'Premium Themes', later: true, linktree: 'Paid plans only' },
  { feature: 'Featured banner with important links', later: true, linktree: 'Paid plans only' },
  { feature: 'Add affiliate links', later: true, linktree: 'Paid plans only' },
  { feature: 'Link Instagram and TikTok posts', later: true, linktree: false },
  { feature: 'Link Instagram Reels', later: true, linktree: false },
  { feature: 'Add multiple links to linked social posts', later: true, linktree: false },
  { feature: 'Mailchimp connection', later: true, linktree: 'Paid plans only' },
  { feature: 'Track link clicks and sales in Google Analytics', later: true, linktree: 'Paid plans only' },
  { feature: 'Create, plan, and schedule social content', later: true, linktree: false },
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
  return (
    <div style={{ paddingTop: 70, background: '#FEFCFB' }}>

      {/* 1. Hero */}
      <section className="wood-bg reveal">
        <div
          className="max-w-[1440px] mx-auto px-[40px]"
          style={{ padding: '60px 40px' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 36,
            alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                color: '#FE3F00',
                marginBottom: 16,
                textTransform: 'uppercase',
              }}>
                LINKTREE VS. LATER LINK IN BIO
              </p>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 52,
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
              }}>
                Start earning more with Later Link in Bio
              </h1>
              <p style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: '#444',
                marginBottom: 32,
                maxWidth: 520,
              }}>
                Add a single link to your social media bios to help your followers discover more about you, your products, and your brand — for free.
              </p>
              <a
                href="/pricing/"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                Claim your free bio <ArrowIcon />
              </a>
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/LiJ4s59q28peYNYLawp6l/b91a37fae9f73b10b743b4dd9c32e0d8/later-linktree-hero.png?w=1136&h=960&q=80&fm=png"
                alt="Later Link in Bio vs Linktree"
                style={{ width: '100%', borderRadius: 16 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Benefits */}
      <section className="reveal">
        <div
          className="max-w-[1440px] mx-auto px-[40px]"
          style={{ padding: '60px 40px', textAlign: 'center' }}
        >
          <p style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2,
            color: '#FE3F00',
            marginBottom: 12,
            textTransform: 'uppercase',
          }}>
            The Linktree alternative for you
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 42,
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            One link is all you need
          </h2>
          <p style={{
            fontSize: 18,
            color: '#555',
            marginBottom: 32,
            maxWidth: 680,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Drive traffic from social media to wherever you want, like your website, online shop, or blog. Sell your products, track your sales, and make more money.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {benefits.map((b) => (
              <div key={b.title} style={{ textAlign: 'center', padding: '32px 20px' }}>
                <img
                  src={b.icon}
                  alt=""
                  style={{ width: 56, height: 56, objectFit: 'contain', margin: '0 auto 20px' }}
                />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, marginBottom: 12 }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#555' }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Claim your free Link in Bio <ArrowIcon /></a>
          </div>
        </div>
      </section>

      {/* 3. Comparison Table */}
      <section className="wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 28 }}>Feature comparison</h2>
          <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#000', color: '#fff' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontWeight: 600, fontSize: 15 }}>Features</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Later Link in Bio</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Linktree</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#f9f7f4' }}>
                    <td style={{ padding: '14px 24px', fontSize: 15 }}>{row.feature}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.later} /></span></td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.linktree} /></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#999', marginTop: 16 }}>Last updated August 2023</p>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Claim your free Link in Bio <ArrowIcon /></a>
          </div>
        </div>
      </section>

      {/* 4. Why Later */}
      <section className="reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase', textAlign: 'center' }}>Linktree Alternative</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 12 }}>Why creators choose Later Link in Bio:</h2>
          <p style={{ fontSize: 18, color: '#555', textAlign: 'center', marginBottom: 24 }}>Start using our tools today and try any plan free for 14 days.</p>
          {whyCards.map((c, i) => (
            <div key={c.num} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: i < whyCards.length - 1 ? 80 : 0, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <div style={{ direction: 'ltr' }}>
                <span style={{ fontSize: 64, fontWeight: 800, color: '#FE3F00', opacity: 0.2, lineHeight: 1 }}>{c.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 16, marginTop: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: '#555', maxWidth: 480 }}>{c.desc}</p>
                <a href="/pricing/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#FE3F00', fontWeight: 600, fontSize: 15, marginTop: 16, textDecoration: 'none' }}>Learn more <ArrowIcon /></a>
              </div>
              <div style={{ direction: 'ltr' }}>
                <img src={c.img} alt={c.title} style={{ width: '100%', borderRadius: 16 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="purple-wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', color: '#fff' }}>
          <p className="uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12, color: 'rgba(255,255,255,0.7)' }}>WHY LATER LINK IN BIO?</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>Here's what Later Link in Bio customers have to say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 40 }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/2eqJV8CgYCshzZXqFHePNC/abd91d4dc644182bd5a0bf9438a98d19/ProfileImage.png?w=641&h=640&q=50&fm=png" alt="Brock Cardiner" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
              <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                "Later Link in Bio has been a game changer for us, successfully allowing us to utilize Instagram as a traffic resource and not just as an engagement resource. We also now have better than ever alignment between our web content and Instagram."
              </p>
              <p style={{ fontWeight: 700, fontSize: 15 }}>Brock Cardiner</p>
              <p style={{ fontSize: 14, opacity: 0.6 }}>HighSnobiety</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 40 }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/16TD47SxfB6Rkv7mPavDsw/cea040387cf50e15662cd18d35702f60/usa-today.png?w=640&h=640&q=50&fm=png" alt="USA Today" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
              <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                "The Later Link in Bio landing page is a copy of the account's grid. This is a seamless experience for our users who are looking for more. We use the Later Link in Bio analytics to send reports back to section editors about what people are clicking through to."
              </p>
              <p style={{ fontWeight: 700, fontSize: 15 }}>USA Today</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Compare Links */}
      <section className="reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 12 }}>What's the best social media marketing platform for you?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 24 }}>Learn why over 7 million people use Later Social every day.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            {compareLinks.map((l) => (
              <a key={l.href} href={l.href} className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15 }}>{l.label} <ArrowIcon /></a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>Ready to add Later Link in Bio?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Switch to Later for free. Linktree customers can import their profile into Later Link in Bio with just a few clicks.</p>
          <a href="/pricing/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Claim your free Link in Bio <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
