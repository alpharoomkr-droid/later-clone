export default function InfluencerPaymentsPage() {
  const steps = [
    { num: '01', title: 'Automatically track invoices', desc: "Keep track of who's been paid and when." },
    { num: '02', title: 'Explore compensation options', desc: 'Choose the best form of incentive for your brand.' },
    { num: '03', title: 'Try influencer gifting', desc: 'Use Tango to send e-gift cards from hundreds of global retailers & brands.' },
    { num: '04', title: 'Use Stripe for easy payments', desc: 'Securely pay cash with Stripe in over 25 currencies.' },
  ]

  const featureSections = [
    {
      eyebrow: 'Payout Management',
      title: 'Automate creator payments',
      desc: 'Manage everything from payout details to incentive tracking and shipment status to ensure you never go over budget.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3CvVWl2oePvUH7j8DMo8o7/dd83887c5b9c1569bb2ade426e283520/influencer-payments-payout-management.png?w=1136&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'Hybrid Compensation',
      title: 'Manage multiple payment options',
      desc: 'Incentivize influencers within the platform with cash, products, gift cards, or exclusive experiences. Use promo codes & referral codes to track online and in-store conversions.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4V4NHZRMssTYEmD11CWMs/246e4057fce6f4a53dab90c5a1f04330/influencer-payments-hybrid-compensation.png?w=1136&h=960&q=70&fm=png',
    },
    {
      eyebrow: 'Global Payout Options',
      title: 'Pay influencers anywhere',
      desc: 'Stripe & TangoCard integrations make it easier than ever to seamlessly and safely pay influencers in multiple currencies, as well as manage bulk payouts.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/5VmXFFE2T1TbxgNBuAmPSu/3478a01ef37c6cbd52b5776d3c168412/influencer-payments-payout-options.png?w=1138&h=960&q=70&fm=png',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <p className="hero-enter text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
              Influencer Payment Platform
            </p>
            <h1
              className="hero-enter-d1"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}
            >
              Effortlessly manage influencer payments with Later
            </h1>
            <p className="hero-enter-d2" style={{ fontSize: 18, lineHeight: 1.6, color: '#555', marginBottom: 32, maxWidth: 520 }}>
              Never miss a payment or product shipment again thanks to Later Influence's seamless, end-to-end influencer marketing platform.
            </p>
            <a href="#" className="btn-primary hero-enter-d3" style={{ fontSize: 16 }}>Book a demo</a>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/4QxOpO24tkDpBwTbxgRgih/f6cd283af31c675bf3203b04146a47d8/influencer-payments-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Influencer Payments with Later"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div className="text-center" style={{ marginBottom: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              The simplest way to manage invoices &amp; payments
            </h2>
            <p style={{ fontSize: 18, color: '#555', maxWidth: 640, margin: '0 auto 56px' }}>
              Spend less time distributing money so you can focus on building relationships and driving impactful campaigns.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/70lothQgZTfgvYiFSgxA7k/3be71b849110c93a913ccb9801b03423/influencer-payments-manage-invoice.png?w=1136&h=960&q=70&fm=png"
              alt="Manage invoices and payments"
              style={{ width: '100%' }}
            />
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

      {/* Feature Sections (alternating) */}
      <section style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto">
          {featureSections.map((f, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 48,
                alignItems: 'center',
                marginBottom: i < featureSections.length - 1 ? 80 : 0,
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              <img
                src={f.img}
                alt={f.title}
                style={{ width: '100%', direction: 'ltr' }}
              />
              <div style={{ direction: 'ltr' }}>
                <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>
                  {f.eyebrow}
                </p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                  {f.desc}
                </p>
                <a href="#" className="btn-outline" style={{ fontSize: 15 }}>Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" style={{ margin: '0 auto 24px' }}>
            <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3" />
          </svg>
          <p style={{ fontSize: 22, lineHeight: 1.6, color: '#333', marginBottom: 32 }}>
            "Later makes dealing with the world of influencers as turnkey as it can be. I consider them partners. The influencer landscape is constantly changing and evolving. Later helps us stay on top of trends and reach consumers in an authentic, effective, and efficient way."
          </p>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png"
            alt="Clif Bar & Company"
            style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px' }}
          />
          <p style={{ fontWeight: 700, fontSize: 16 }}>Drew McGowan</p>
          <p style={{ fontSize: 14, color: '#777' }}>Clif Bar &amp; Company, Communications and Influencer Marketing Strategy</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="purple-wood-bg text-white" style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
            Pay influencers on time, every time
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, marginBottom: 32 }}>
            Later's influencer marketing platform helps you manage payouts efficiently so you can get your time back.
          </p>
          <a href="#" className="btn-primary" style={{ fontSize: 16 }}>Book a demo</a>
        </div>
      </section>
    </div>
  )
}
