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

function CellIcon({ value }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <XIcon />
  return <span style={{ fontSize: 14, color: '#666' }}>{value}</span>
}

const benefits = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/1fcB34bUuiR1XErXgUTWQ7/7e551713fe1c9c5ca68d79c3bf872fdb/rocket.png', title: 'Find creators that perform', desc: 'Other platforms guess. Later uses verified, proprietary campaign data.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7xEXSfbRdvIpRMrSLB6LFH/1103fc0918a4a511e4595b6211b3a76f/Campaign.png', title: 'Full-funnel, results-driven.', desc: 'Other platforms track likes. Later tracks all the way through to sales.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/67iJHifNSvZRKH7TAMKm71/432d648c6a754fcae1d35c336e692641/Platform.png', title: 'Experienced, transparent partnership', desc: 'Other platforms rotate teams. Ours has 10+ years of expertise and stays with you.' },
]

const comparisonRows = [
  { feature: 'Managed services', later: true, captiv8: 'Limited' },
  { feature: 'All-in-one pricing', later: true, captiv8: false },
  { feature: 'Reviews and research', later: true, captiv8: false },
  { feature: 'Private-label your platform experience', later: true, captiv8: false },
  { feature: 'Social Media Management add-on', later: true, captiv8: false },
  { feature: 'Later Link in Bio add-on', later: true, captiv8: false },
  { feature: 'Social Listening', later: true, captiv8: true },
  { feature: 'Launch affiliate marketing and track campaigns', later: true, captiv8: true },
  { feature: 'Incentive management and fulfillment (Shopify)', later: true, captiv8: true },
  { feature: 'Creator payments', later: 'Cash, ACH, gift cards, Stripe', captiv8: 'PayPal' },
]

const features = [
  { num: '01', title: 'Maximize your ROI for influencer marketing', desc: 'Later helps you partner with the right influencers who actually reach your audience, so you always get the best results.', img: 'https://images.ctfassets.net/nfpsrlop6sws/59I0zOxMQ1luqsS2Khbi5s/653bd688189dd92bc1edb4a4b035811e/maximize-your-ROI-for-influencer-marketing-with-later.png?fm=webp&q=75&w=1136&h=960' },
  { num: '02', title: 'Partner with trusted influencers', desc: 'Bye-bye bots and inflated engagement rates. Later only works with trusted creators backed by verified stats and results.', img: 'https://images.ctfassets.net/nfpsrlop6sws/3q86cslfBHYrRbL7OZ2eFc/21c53cc33b72d6cc54ff000c04e23492/partner-with-trusted-influencers-with-later.png?fm=webp&q=75&w=1136&h=960' },
  { num: '03', title: 'Seamless campaign management', desc: "Our expert services team handles all the nitty gritty campaign work so you don't have to.", img: 'https://images.ctfassets.net/nfpsrlop6sws/7J0bEBQSVqgugDL4PFWkAk/349506656b431022cab59ff4dc4195be/seamless-campaign-management-with-later.png?fm=webp&q=75&w=1136&h=960' },
  { num: '04', title: 'Integrate with your preferred affiliate network', desc: 'Later enables brands across many different affiliate networks including: Rakuten, Impact, Commission Junction (CJ), Partnerize, Ascend, AWIN, ShareASale, Avant a Link, Pepperjam, and BrandVerity.', img: 'https://images.ctfassets.net/nfpsrlop6sws/62Y6odpnoQfphNhnbcmbRC/c8f645abb7230ded6945e52599601952/find-influencers-search-index-and-manage.png?fm=webp&q=75&w=1078&h=827' },
]

const compareLinks = [
  { label: 'Later vs CreatorIQ', href: '/creatoriq-alternative' },
  { label: 'Later vs GRIN', href: '/grin-alternative' },
  { label: 'Later vs Tagger by Sprout Social', href: '/tagger-alternative' },
]

export default function Captiv8AlternativePage() {
  return (
    <div style={{ paddingTop: 70, background: '#FEFCFB' }}>

      {/* 1 — Hero */}
      <section className="wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 16, textTransform: 'uppercase' }}>LATER INFLUENCE</p>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
                Later vs Captiv8: What's the best influencer marketing platform?
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32, maxWidth: 520 }}>
                Unlike Captiv8, Later's in-house services team provides our customers with a full suite of services to supercharge their influencer marketing strategy and optimize their investments. Plus, you get clear, transparent pricing — no surprise costs for extra seats, campaigns, creators, or reports.
              </p>
              <a href="/demo/" className="btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Book a demo <ArrowIcon /></a>
            </div>
            <div>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/3FGdHaoo5me9zucLdlD7SX/72c2023a3deeadc6ba526cce56fa829f/captiv8-alternative-hero.png?w=1136&h=960&q=80&fm=png" alt="Later vs Captiv8" style={{ width: '100%', borderRadius: 16 }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Benefits */}
      <section className="reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase' }}>THE BEST CAPTIV8 ALTERNATIVE</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>See where Later goes further</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
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

      {/* 3 — Comparison Table */}
      <section className="wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, textAlign: 'center', marginBottom: 28 }}>Feature comparison</h2>
          <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#000', color: '#fff' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontWeight: 600, fontSize: 15 }}>Features</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Later Influence</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 15, width: 140 }}>Captiv8</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f9f7f4' }}>
                    <td style={{ padding: '14px 24px', fontSize: 15 }}>{r.feature}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={r.later} /></span></td>
                    <td style={{ padding: '14px 24px', textAlign: 'center' }}><span style={{ display: 'inline-flex', justifyContent: 'center' }}><CellIcon value={r.captiv8} /></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#999', marginTop: 16 }}>Last updated May 2024</p>
        </div>
      </section>

      {/* 4 — Numbered Features */}
      <section className="reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#FE3F00', marginBottom: 12, textTransform: 'uppercase', textAlign: 'center' }}>CAPTIV8 VS. LATER</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, textAlign: 'center', marginBottom: 12 }}>4 reasons to choose Later Influence</h2>
          <p style={{ fontSize: 18, color: '#555', textAlign: 'center', marginBottom: 24 }}>Later is easier to set up than Captiv8 — see for yourself with a free demo.</p>
          {features.map((f, i) => (
            <div key={f.num} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: i < features.length - 1 ? 80 : 0, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <div style={{ direction: 'ltr' }}>
                <span style={{ fontSize: 64, fontWeight: 800, color: '#FE3F00', opacity: 0.2, lineHeight: 1 }}>{f.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 16, marginTop: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: '#555', maxWidth: 480 }}>{f.desc}</p>
              </div>
              <div style={{ direction: 'ltr' }}>
                <img src={f.img} alt={f.title} style={{ width: '100%', borderRadius: 16 }} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Testimonial */}
      <section className="purple-wood-bg reveal">
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
      <section className="reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 12 }}>What's the best influencer marketing platform for you?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 24 }}>See how Later Influence compares to the competition.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            {compareLinks.map((l, i) => (
              <a key={i} href={l.href} className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15 }}>{l.label} <ArrowIcon /></a>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Bottom CTA */}
      <section className="wood-bg reveal">
        <div className="max-w-[1440px] mx-auto px-[40px]" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, marginBottom: 16 }}>Later Influence is the best Captiv8 alternative</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>We help leading brands create unforgettable campaigns.</p>
          <a href="/demo/" className="btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>Book a demo <ArrowIcon /></a>
        </div>
      </section>

    </div>
  )
}
