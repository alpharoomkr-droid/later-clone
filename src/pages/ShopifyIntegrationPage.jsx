const steps = [
  {
    num: '01',
    title: 'Automate daily tasks',
    desc: 'Automate product selection, shipments, & creator communication.',
  },
  {
    num: '02',
    title: 'Empower authentic creator content',
    desc: 'Let creators pick products that will resonate with their followers.',
  },
  {
    num: '03',
    title: 'Broaden your creator pool',
    desc: 'Work with more creators, including gifting campaigns & ambassadors.',
  },
  {
    num: '04',
    title: 'Manage & measure sent products',
    desc: 'See products sent for gifting, PR, or paid collaborations in one place.',
  },
]

const features = [
  {
    eyebrow: 'ADD YOUR STORE',
    title: 'Connect your Shopify store to Later',
    desc: "No more sending to PO boxes or tracking down addresses. With Later's Shopify integration, you connect your Shopify store directly to your Later Influence campaign for convenient influencer gifting.",
    img: 'https://images.ctfassets.net/nfpsrlop6sws/2nH4FCaA3cUETNWYJSmhWu/9ad284c4ce1a1a652849817066d79ca2/shopify-integration-store.png?w=1138&h=960&q=70&fm=png',
    imgAlt: 'Connect Shopify store to Later',
  },
  {
    eyebrow: 'CUSTOMIZE YOUR CODES',
    title: 'Create and customize Shopify codes',
    desc: 'Customize codes for every campaign, and select your start and end dates (so your codes expire when your campaigns do). Codes are unique to each influencer and are single-use, so you never have to worry about leaks.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/5sNcGAmg9SsOPfhyx2P4dA/40e407a6d11b5016fa6402de8f175654/shopify-integration-codes.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Customize Shopify codes',
  },
  {
    eyebrow: 'SET YOUR CRITERIA',
    title: 'Give creators free products & shipping',
    desc: "Send Shopify codes to creators to redeem for specified products or collections, and provide free shipping. It's that simple.",
    img: 'https://images.ctfassets.net/nfpsrlop6sws/22AXdZC81r9ie1SMb6rjrP/502ec0f74ab870547589e1010c9e5357/shopify-integration-criteria.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Set criteria for free products',
  },
]

export default function ShopifyIntegrationPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center">
          <p
            className="text-charcoal/60 uppercase tracking-widest hero-enter"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            LATER INFLUENCE
          </p>
          <h1
            className="text-charcoal hero-enter-d1"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 800,
              margin: '0 auto 24px',
            }}
          >
            Simplify product gifting with Later and Shopify
          </h1>
          <p
            className="hero-enter-d2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 680,
              margin: '0 auto 32px',
              color: '#333',
            }}
          >
            Create &amp; share Shopify codes with influencers in seconds.
          </p>
          <a
            href="#"
            className="btn-primary hero-enter-d3"
            style={{ fontSize: 16, marginBottom: 28, display: 'inline-block' }}
          >
            Book a demo
          </a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7w71Y1cruRNiOLHKvvicD8/30e4728cd74aafaa9df292f5a1297fea/shopify-integration-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Shopify integration hero"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p
                className="text-charcoal/60 uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
              >
                LATER SHOPIFY INTEGRATION
              </p>
              <h2
                className="text-charcoal"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 44,
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                Put creators in charge of their cart
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: '#444',
                  marginBottom: 24,
                }}
              >
                Let creators choose their preferred products from your store with Shopify codes.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {steps.map((s) => (
                  <div key={s.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span
                      className="text-gridglow"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 20,
                        fontWeight: 900,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <h4
                        className="text-charcoal"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 20,
                          fontWeight: 900,
                          lineHeight: 1.3,
                          marginBottom: 4,
                        }}
                      >
                        {s.title}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: '#555' }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-d1">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/2N23SX5zvHE1F6Dph8MfFw/96da5011addbffb630c2a8bca7de4ed6/shopify-integration-incentives.png?w=1136&h=1000&q=70&fm=png"
                alt="Put creators in charge of their cart"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((f, i) => {
        const reversed = i % 2 === 1
        return (
          <section
            key={i}
            style={{ backgroundColor: i % 2 === 0 ? '#FEFCFB' : '#F8F2EA', padding: '60px 0' }}
          >
            <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  reversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={`reveal ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <p
                    className="text-gridglow uppercase tracking-widest"
                    style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}
                  >
                    {f.eyebrow}
                  </p>
                  <h2
                    className="text-charcoal"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 40,
                      fontWeight: 900,
                      lineHeight: 1.15,
                      marginBottom: 20,
                    }}
                  >
                    {f.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 18,
                      lineHeight: 1.6,
                      color: '#444',
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
                <div className={`reveal reveal-d1 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <img src={f.img} alt={f.imgAlt} style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Testimonial */}
      <section style={{ backgroundColor: '#000', padding: '60px 0' }}>
        <div className="max-w-[900px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 22,
              lineHeight: 1.7,
              color: 'rgba(248,242,234,0.9)',
              fontStyle: 'italic',
              marginBottom: 24,
            }}
          >
            &ldquo;There is so much depth and diversity in Later&rsquo;s influencer network. No matter how many campaigns we run, there are always new, on-brand influencers to engage with&mdash;and the creative performs long after the campaign is over.&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1eCCedygHqYqwD09vpxPYH/2fb86b51d93ee8c7981fbc18f70b3892/kym-recco.png?w=640&h=640&q=50&fm=png"
              alt="Kym Recco"
              style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }}
            />
            <div style={{ textAlign: 'left' }}>
              <p
                className="text-offline"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}
              >
                Kym Recco
              </p>
              <p style={{ fontSize: 14, color: 'rgba(248,242,234,0.6)', lineHeight: 1.4 }}>
                Tom&rsquo;s of Maine, Digital Marketing Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="purple-wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2
            className="text-white"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 50,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Send products to creators with Shopify codes
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 640,
              margin: '0 auto 36px',
            }}
          >
            Free products. Free shipping. It&rsquo;s easy with Later.
          </p>
          <a href="#" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
