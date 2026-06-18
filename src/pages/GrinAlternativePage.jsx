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
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/1bvmWGQuOE7nrCC1FFjjtM/f64a1566f47ff9aca12901368e439541/icon-magnify-blue.png', title: 'The easiest way to find influencers', desc: 'Search & find the right influencers who match your brand and resonate with your target audience.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/2qyr3a3Vh8qvrdbW1uFGmU/fa9ff90b12acfa83f7ea2a66f766abbc/Later_Icon_PayoutRevenue.png', title: 'Accurately track performance & measure ROI', desc: 'No more fuzzy third-party data. Get real, verifiable data and campaign results every time.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/1D7sg6HnJ0QTHWmMe4KKFH/9fc479d4ba51fd8c02923370ec1c564e/icon-scale-blue.png', title: 'Scale campaigns with easy influencer management', desc: "You don't have to do it all by yourself. Later is here to help you scale your influencer marketing capabilities — and your returns." },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/3IXF5rjCV43K9558ebcUWd/edf0705de9611e924925e3bc5dd29d6f/icon-integrations-blue.png', title: "Explore Later's influencer marketing integrations", desc: 'Leverage our extensive integrations including major social media platforms, Google, Dropbox, Mailchimp, Canva, and more.' },
]

const COMPARISON = [
  { feature: 'Managed services', later: true, competitor: false },
  { feature: 'All-in-one pricing', later: true, competitor: false },
  { feature: 'Reviews and research', later: true, competitor: false },
  { feature: 'Social Media Management add-on', later: true, competitor: false },
  { feature: 'Later Link in Bio add-on', later: true, competitor: false },
  { feature: 'Social Listening', later: true, competitor: true },
  { feature: 'Launch affiliate and track campaigns', later: true, competitor: true },
  { feature: 'Incentive management and fulfillment (Shopify)', later: true, competitor: true },
  { feature: 'Influencer incentives and payments', later: 'Payment, product, promo codes, coupons, sweepstakes, contests, loyalty points', competitor: 'Payment, product, gift cards' },
]

const NUMBERED = [
  { num: '01', title: 'Maximize your ROI for influencer marketing', desc: 'Later helps you partner with the right influencers who actually reach your audience, so you always get the best results.', img: 'https://images.ctfassets.net/nfpsrlop6sws/3x8ob9n8e8PB8LHWPL88WZ/584adc6c8585f2cd21aff1a87c0f3175/competitor-feature-1.png?fm=webp&q=75&w=1136&h=960' },
  { num: '02', title: 'Bye-bye bots and inflated engagement rates', desc: 'Later only works with trusted creators backed by verified stats and results.', img: 'https://images.ctfassets.net/nfpsrlop6sws/1haczWTosaxSiatCfaU45T/3d0f66de6cc03379dcf9366f56170910/competitor-feature-2.png?fm=webp&q=75&w=1136&h=960' },
  { num: '03', title: 'Seamless campaign management', desc: "Our expert services team handles all the nitty gritty campaign work so you don't have to.", img: 'https://images.ctfassets.net/nfpsrlop6sws/6r4qbvDgoOahqnUbbbCPVh/09a18c1fc47091624cea8478bd9b9657/competitor-feature-3.png?fm=webp&q=75&w=1136&h=960' },
  { num: '04', title: 'Integrate with your preferred affiliate network', desc: 'Later enables brands across many different affiliate networks including: Rakuten, Impact, Commission Junction (CJ), Partnerize, Ascend, AWIN, ShareASale, Avant a Link, Pepperjam, and BrandVerity.', img: 'https://images.ctfassets.net/nfpsrlop6sws/1Xy3fjCZcN9JowA3Ur9e1F/1c4615150965c8890413269ba30d6517/find-influencers-search-index-and-manage.png?fm=webp&q=75&w=1136&h=960' },
]

const COMPARE_LINKS = [
  { label: 'Later vs Captiv8', href: '/captiv8-alternative' },
  { label: 'Later vs CreatorIQ', href: '/creatoriq-alternative' },
  { label: 'Later vs Tagger by Sprout Social', href: '/tagger-alternative' },
]

function CellIcon({ value }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <XIcon />
  return <span style={{ fontSize: 14, color: '#666' }}>{value}</span>
}

export default function GrinAlternativePage() {
  return (
    <div style={{ paddingTop: 70, background: '#FEFCFB' }}>

      {/* 1 — Hero */}
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 16, textTransform: 'uppercase' }}>LATER INFLUENCE</p>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 52, lineHeight: 1.1, marginBottom: 24 }}>Later vs GRIN: What's the best influencer marketing platform?</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32, maxWidth: 520 }}>Later Influence combines the power of data, technology, and superior services to help brands build high-performing influencer marketing campaigns.</p>
              <a href="/demo/" className="btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Book a demo <ArrowIcon /></a>
            </div>
            <div>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/6EeQO0pEfnZQk53cA1YFGv/d4f4c8349a31f52c588382820956d020/later-vs-grin-hero.png?w=1136&h=960&q=80&fm=png" alt="Later vs GRIN" style={{ width: '100%', borderRadius: 16 }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Benefits */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase' }}>THE BEST GRIN ALTERNATIVE</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>Seamless influencer campaign management</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>Later is the influencer marketing platform that works for you.</p>
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
            <a href="/demo/" className="btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Book a demo <ArrowIcon /></a>
          </div>
        </div>
      </section>

      {/* 3 — Comparison Table */}
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 28 }}>Later vs. GRIN at a glance</h2>
          <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#000', color: '#fff' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontWeight: 600, fontSize: 15 }}>Features</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Later</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>GRIN</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#f9f7f4' }}>
                    <td style={{ padding: '14px 24px', fontSize: 15 }}>{row.feature}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.later} /></span></td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={row.competitor} /></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#999', marginTop: 16 }}>Last updated March 2025</p>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/demo/" className="btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Book a demo <ArrowIcon /></a>
          </div>
        </div>
      </section>

      {/* 4 — Numbered Features */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase', textAlign: 'center' }}>GRIN VS. LATER</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 12 }}>4 reasons to choose Later Influence</h2>
          <p style={{ fontSize: 18, color: '#555', textAlign: 'center', marginBottom: 24 }}>Later is easier to set up than GRIN — see for yourself with a free demo.</p>
          {NUMBERED.map((item, i) => (
            <div key={item.num} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: i < NUMBERED.length - 1 ? 80 : 0, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <div style={{ direction: 'ltr' }}>
                <span style={{ fontSize: 64, fontWeight: 800, color: '#FE3F00', opacity: 0.2, lineHeight: 1 }}>{item.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 16, marginTop: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: '#555', maxWidth: 480 }}>{item.desc}</p>
                <div style={{ marginTop: 24 }}>
                  <a href="/demo/" className="btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Book a demo <ArrowIcon /></a>
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
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 28, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Leading brands trust Later Influence to power their campaigns.</h2>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png" alt="Clif Bar" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'contain', margin: '0 auto 24px', background: '#fff', padding: 8 }} />
            <blockquote style={{ fontSize: 18, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 24, opacity: 0.95 }}>"Later makes dealing with the world of influencers as turnkey as it can be. I consider them partners. The influencer landscape is constantly changing and evolving. Later helps us stay on top of trends and reach consumers in an authentic, effective, and efficient way."</blockquote>
            <p style={{ fontWeight: 600, fontSize: 15 }}>Drew McGowan</p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>Clif Bar & Company · Communications and Influencer Marketing Strategy</p>
          </div>
        </div>
      </section>

      {/* 6 — Compare Links */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 12 }}>What's the best influencer marketing platform for you?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 24 }}>See how Later Influence compares to other platforms.</p>
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
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>Later Influence is the best GRIN alternative</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>We help leading brands create unforgettable campaigns.</p>
          <a href="/demo/" className="btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Book a demo <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
