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
      <path d="M4 10l4 4 8-8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 5l10 10M15 5L5 15" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const benefits = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7yABJG0xFhDaLvKHqmVMCM/c577ff2fa59e24041e9f7acb2d28c344/pointing-hand-icon.png', title: 'The easiest way to find influencers', desc: "Later's AI-driven tools use advanced filters to help you search for influencers based on over 20 criteria." },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png', title: 'Build review & ambassador programs', desc: 'Easily source and repurpose UGC and surveys, and build reviews and ambassadors programs — a must-have for any e-commerce brand.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/71B4dNiBTWUHOh7FGakYK6/2a90f98f5ab4f3ffce5d9796aac11339/adapt-grow-icon.png', title: 'Automated influencer campaign workflows', desc: 'Scale your impact with intelligent automations that ensure your campaigns reach their full potential while making your team\'s life easier.' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/2TFMduJpudJQZp5d2eDHee/b0c01b8a08ec6c4e3c10b0d719f51a85/icon-lead.png', title: 'All-in-one pricing, no surprises', desc: 'Scale your impact with intelligent automations that ensure your campaigns reach their full potential while making your team\'s life easier.' },
]

const comparisonRows = [
  { feature: 'Managed services', later: 'Yes', creatoriq: 'No' },
  { feature: 'All-in-one pricing', later: 'Yes', creatoriq: 'No' },
  { feature: 'Reviews and research', later: 'Yes', creatoriq: 'No' },
  { feature: 'Private-label your platform experience', later: 'Yes', creatoriq: '$ Add-on' },
  { feature: 'Social Media Management add-on', later: 'Yes', creatoriq: 'No' },
  { feature: 'Later Link in Bio add-on', later: 'Yes', creatoriq: 'No' },
  { feature: 'Social Listening', later: 'Yes', creatoriq: 'Yes' },
  { feature: 'Launch affiliate marketing and track campaigns', later: 'Yes', creatoriq: 'Yes' },
  { feature: 'Incentive management and fulfillment (Shopify)', later: 'Yes', creatoriq: 'Yes' },
  { feature: 'Influencer incentives and payments', later: 'Payment, product, promo codes, coupons, sweepstakes, contests, loyalty points', creatoriq: 'Payment, product, gift cards' },
]

const features = [
  { num: '01', title: 'Maximize your ROI for influencer marketing', desc: 'Later helps you partner with the right influencers who actually reach your audience, so you always get the best results.', img: 'https://images.ctfassets.net/nfpsrlop6sws/1MgEpcaqLI4a4u1gjRRK6J/aea084dd68a458abb7a7e4651e810a08/later-influence-maximize-roi.png?fm=webp&q=75&w=1136&h=960' },
  { num: '02', title: 'Manage creator payments and measure program ROI', desc: 'Incentivize and compensate creators seamlessly while tracking key metrics to gauge return on investment and optimize future campaigns.', img: 'https://images.ctfassets.net/nfpsrlop6sws/4qqadg0Pgqq4IfWCZtKM39/78939fd21a20b49b237725a835ecddb3/later-influence-manage-social.png?fm=webp&q=75&w=1136&h=960' },
  { num: '03', title: 'Create a winning program strategy', desc: 'Collaborate with our expert professional services to create campaigns that resonate with your audience.', img: 'https://images.ctfassets.net/nfpsrlop6sws/1PhDNJLlVJCPRJ6iju8bIm/09f9ff6c12f2c53bbee69601b01f3355/later-influence-seamless-management.png?fm=webp&q=75&w=1136&h=934' },
  { num: '04', title: 'Integrate with your preferred affiliate network', desc: 'Later enables brands across many different affiliate networks including: Rakuten, Impact, Commission Junction (CJ), Partnerize, Ascend, AWIN, ShareASale, Avant a Link, Pepperjam, and BrandVerity.', img: 'https://images.ctfassets.net/nfpsrlop6sws/1Xy3fjCZcN9JowA3Ur9e1F/1c4615150965c8890413269ba30d6517/find-influencers-search-index-and-manage.png?fm=webp&q=75&w=1136&h=960' },
]

const compareLinks = [
  { label: 'Later vs Captiv8', href: '/captiv8-alternative' },
  { label: 'Later vs GRIN', href: '/grin-alternative' },
  { label: 'Later vs Tagger by Sprout Social', href: '/tagger-alternative' },
]

export default function CreatorIqAlternativePage() {
  const thHead = { fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, padding: '16px 24px', textAlign: 'center', borderBottom: '2px solid #e5e5e5' }
  const td = { padding: '14px 24px', borderBottom: '1px solid #eee', textAlign: 'center', fontSize: 15 }
  const tdFeature = { ...td, textAlign: 'left', fontWeight: 600 }

  return (
    <div style={{ paddingTop: 70 }}>

      {/* 1. Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>LATER INFLUENCE</p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Later vs CreatorIQ: What's the best influencer marketing platform?
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginBottom: 32, maxWidth: 520 }}>
              Unlike CreatorIQ, Later's in-house services team provides our customers with a full suite of services to supercharge their influencer marketing strategy and optimize their investments. Plus, you get clear, transparent pricing — no surprise costs for extra seats, campaigns, creators, or reports.
            </p>
            <Link to="/demo" className="btn-dark" style={{ fontSize: 16 }}>Book a demo <ArrowIcon /></Link>
          </div>
          <div>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/2vZgcWVp3Im33iH8chPQiD/ef20395cda9a3875c50fa2a20470cb33/influencer-marketing-services-hero.png?w=1136&h=960&q=80&fm=png" alt="Later vs CreatorIQ" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* 2. Benefits */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>THE BEST CREATORIQ ALTERNATIVE</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Seamless influencer marketing</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 56, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
            Later is the influencer marketing platform that works for you.
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
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[900px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 48 }}>Feature comparison</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#fafafa' }}>
                <th style={{ ...thHead, textAlign: 'left' }}>Features</th>
                <th style={thHead}>Later Influence</th>
                <th style={thHead}>CreatorIQ</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r, i) => (
                <tr key={i}>
                  <td style={tdFeature}>{r.feature}</td>
                  <td style={td}>{r.later === 'Yes' ? <CheckIcon /> : r.later}</td>
                  <td style={td}>{r.creatoriq === 'Yes' ? <CheckIcon /> : r.creatoriq === 'No' ? <XIcon /> : r.creatoriq}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center" style={{ fontSize: 13, color: '#999', marginTop: 16 }}>Last updated May 2024</p>
        </div>
      </section>

      {/* 4. Numbered Features */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center reveal" style={{ marginBottom: 64 }}>
            <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>CREATORIQ VS. LATER</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>4 reasons to choose Later Influence</h2>
            <p style={{ fontSize: 18, color: '#555' }}>Later is easier to set up than CreatorIQ — see for yourself with a free demo.</p>
          </div>
          {features.map((f, i) => (
            <div key={f.num} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
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
      <section className="purple-wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[900px] mx-auto text-center reveal">
          <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 48, textAlign: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png" alt="Clif Bar" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#fff', marginBottom: 24, fontStyle: 'italic' }}>
              "Later makes dealing with the world of influencers as turnkey as it can be. I consider them partners. The influencer landscape is constantly changing and evolving. Later helps us stay on top of trends and reach consumers in an authentic, effective, and efficient way."
            </p>
            <p style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>Drew McGowan</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>Clif Bar &amp; Company, Communications and Influencer Marketing Strategy</p>
          </div>
        </div>
      </section>

      {/* 6. Compare Links */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>What's the best influencer marketing platform for you?</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 40 }}>See how Later Influence compares to the competition.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {compareLinks.map((l, i) => (
              <Link key={i} to={l.href} className="btn-outline" style={{ fontSize: 15 }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section style={{ backgroundColor: '#000', padding: '100px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, lineHeight: 1.1, color: '#FEFCFB', marginBottom: 16 }}>
            Later Influence is the best CreatorIQ alternative
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>We help leading brands create unforgettable campaigns.</p>
          <Link to="/demo" className="btn-dark" style={{ fontSize: 18, background: '#fff', color: '#000' }}>Book a demo <ArrowIcon /></Link>
        </div>
      </section>

    </div>
  )
}
