import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 25,
    yearlyPrice: 18.75,
    description: 'For individuals & small teams getting started with social media.',
    socialSets: 1,
    users: 1,
    postsPerProfile: '30 posts/profile',
    aiCredits: 5,
    popular: false,
    features: {
      scheduling: true,
      analytics: true,
      linkinbio: true,
      bestTime: true,
      hashtagSuggestions: true,
      teamCollaboration: false,
      bulkScheduling: false,
      brandedLinkinbio: false,
      advancedAnalytics: false,
      unlimitedPosts: false,
      customRoles: false,
      liveChatSupport: false,
    },
  },
  {
    name: 'Growth',
    monthlyPrice: 50,
    yearlyPrice: 37.5,
    description: 'For growing brands ready to scale their social presence.',
    socialSets: 2,
    users: 2,
    postsPerProfile: '180 posts/profile',
    aiCredits: 50,
    popular: true,
    features: {
      scheduling: true,
      analytics: true,
      linkinbio: true,
      bestTime: true,
      hashtagSuggestions: true,
      teamCollaboration: true,
      bulkScheduling: true,
      brandedLinkinbio: true,
      advancedAnalytics: false,
      unlimitedPosts: false,
      customRoles: false,
      liveChatSupport: false,
    },
  },
  {
    name: 'Scale',
    monthlyPrice: 110,
    yearlyPrice: 82.5,
    description: 'For larger teams & agencies managing multiple brands.',
    socialSets: 6,
    users: 4,
    postsPerProfile: 'Unlimited',
    aiCredits: 100,
    popular: false,
    features: {
      scheduling: true,
      analytics: true,
      linkinbio: true,
      bestTime: true,
      hashtagSuggestions: true,
      teamCollaboration: true,
      bulkScheduling: true,
      brandedLinkinbio: true,
      advancedAnalytics: true,
      unlimitedPosts: true,
      customRoles: true,
      liveChatSupport: true,
    },
  },
]

const featureRows = [
  { key: 'scheduling', label: 'Visual content calendar & scheduling' },
  { key: 'analytics', label: 'Basic analytics & reporting' },
  { key: 'linkinbio', label: 'Link in Bio page' },
  { key: 'bestTime', label: 'Best time to post' },
  { key: 'hashtagSuggestions', label: 'Hashtag suggestions' },
  { key: 'teamCollaboration', label: 'Team collaboration & approval workflows' },
  { key: 'bulkScheduling', label: 'Bulk scheduling' },
  { key: 'brandedLinkinbio', label: 'Branded Link in Bio' },
  { key: 'advancedAnalytics', label: 'Advanced analytics & custom reports' },
  { key: 'unlimitedPosts', label: 'Unlimited posts per profile' },
  { key: 'customRoles', label: 'Custom user roles & permissions' },
  { key: 'liveChatSupport', label: 'Priority live chat support' },
]

const faqs = [
  {
    q: 'Can I try Later for free?',
    a: 'Yes! Later offers a free 14-day trial on all plans. No credit card required to start. You can explore all features and decide which plan works best for you before committing.',
  },
  {
    q: 'What is a Social Set?',
    a: 'A Social Set is a group of social profiles — one per platform (Instagram, Facebook, TikTok, X/Twitter, Pinterest, LinkedIn, YouTube). Each Social Set lets you manage one profile per network.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time. When you upgrade, the new features are available immediately. If you downgrade, the change takes effect at the end of your current billing cycle.',
  },
  {
    q: 'What happens when my trial ends?',
    a: 'When your 14-day trial ends, you\'ll be prompted to choose a plan. If you don\'t select a plan, your account will switch to limited access. Your data is never deleted — you can pick up right where you left off.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, American Express) and debit cards. For annual enterprise plans, we also offer invoicing. All payments are processed securely through Stripe.',
  },
  {
    q: 'Do you offer discounts for nonprofits or education?',
    a: 'Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact our sales team for details on eligibility and discounted rates.',
  },
]

const brandLogos = [
  { name: 'Fashion Nova', url: 'https://images.ctfassets.net/nfpsrlop6sws/2TmFdmGdCKDi3v2SjGkvcS/4cda42e3ff1f7b36b4c5a56ee5b62f7d/fashion_nova.svg' },
  { name: 'YouTube', url: 'https://images.ctfassets.net/nfpsrlop6sws/3o8FVeB5QpYrIWlLaRWfZC/a3dfe99e299e8c3e17f9d8feda6c31f6/youtube.svg' },
  { name: 'Kylie Cosmetics', url: 'https://images.ctfassets.net/nfpsrlop6sws/7vWuB6xgT2UwqGRyKJvGhO/3e18ec9faa0a7d74fba20ee71e62ab36/kylie_cosmetics.svg' },
  { name: 'ESPN', url: 'https://images.ctfassets.net/nfpsrlop6sws/69UOJ5t1qs4kLCuNsLVpjq/68febe6f1ffaf44aa29aa0e2b4b98c8f/espn.svg' },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10.5l4 4 8-9" stroke="#FE3F00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6 6l8 8M14 6l-8 8" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ChevronDown({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        flexShrink: 0,
      }}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function formatPrice(price) {
  return price % 1 === 0 ? `$${price}` : `$${price.toFixed(2)}`
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="text-center hero-enter" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1
              className="ff-heading"
              style={{
                fontSize: 64,
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.5px',
                marginBottom: 20,
              }}
            >
              Manage your entire social media strategy.{' '}
              <span style={{ color: '#FE3F00' }}>Free for 14 days.</span>
            </h1>
            <p
              className="hero-enter-d1"
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(0,0,0,0.6)',
                maxWidth: 560,
                margin: '0 auto 40px',
              }}
            >
              Plan, schedule, and analyze your social posts across every major platform. Start free, upgrade anytime.
            </p>
          </div>

          {/* Trusted by logos */}
          <div
            className="hero-enter-d2"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 32,
              marginTop: 32,
              flexWrap: 'wrap',
              opacity: 0.5,
            }}
          >
            {brandLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                style={{ height: 24, objectFit: 'contain', filter: 'grayscale(1)' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section style={{ padding: '40px 0 16px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <span
              style={{
                fontSize: 16,
                fontWeight: isYearly ? 400 : 700,
                color: isYearly ? 'rgba(0,0,0,0.5)' : '#000',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              style={{
                position: 'relative',
                width: 56,
                height: 30,
                borderRadius: 15,
                border: 'none',
                backgroundColor: isYearly ? '#FE3F00' : '#ccc',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 3,
                  left: isYearly ? 29 : 3,
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  transition: 'left 0.3s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
              />
            </button>
            <span
              style={{
                fontSize: 16,
                fontWeight: isYearly ? 700 : 400,
                color: isYearly ? '#000' : 'rgba(0,0,0,0.5)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </span>
            {isYearly && (
              <span
                style={{
                  backgroundColor: '#FE3F00',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: 20,
                  whiteSpace: 'nowrap',
                }}
              >
                3 months free &middot; 25% off
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '32px 0 80px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
              maxWidth: 1100,
              margin: '0 auto',
            }}
          >
            {plans.map((plan, i) => {
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
              return (
                <div
                  key={plan.name}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    position: 'relative',
                    border: plan.popular ? '2px solid #FE3F00' : '1px solid rgba(0,0,0,0.12)',
                    borderRadius: 16,
                    padding: '40px 32px',
                    backgroundColor: plan.popular ? '#FFFAF8' : '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    ...(plan.popular ? { boxShadow: '0 8px 40px rgba(254,63,0,0.1)' } : {}),
                  }}
                >
                  {plan.popular && (
                    <span
                      style={{
                        position: 'absolute',
                        top: -14,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#FE3F00',
                        color: '#fff',
                        fontSize: 13,
                        fontWeight: 700,
                        padding: '5px 20px',
                        borderRadius: 20,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Most popular
                    </span>
                  )}

                  <h3
                    className="ff-heading"
                    style={{
                      fontSize: 28,
                      fontWeight: 900,
                      marginBottom: 8,
                    }}
                  >
                    {plan.name}
                  </h3>

                  <p style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(0,0,0,0.55)', marginBottom: 24, minHeight: 42 }}>
                    {plan.description}
                  </p>

                  <div style={{ marginBottom: 24 }}>
                    <span
                      className="ff-heading"
                      style={{ fontSize: 48, fontWeight: 900, lineHeight: 1 }}
                    >
                      {formatPrice(price)}
                    </span>
                    <span style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)', marginLeft: 4 }}>/mo</span>
                    {isYearly && (
                      <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', marginTop: 4 }}>
                        billed annually ({formatPrice(plan.monthlyPrice)}/mo if monthly)
                      </div>
                    )}
                  </div>

                  <a
                    href="#"
                    className={plan.popular ? 'btn-primary' : 'btn-outline'}
                    style={{
                      fontSize: 16,
                      justifyContent: 'center',
                      width: '100%',
                      marginBottom: 32,
                    }}
                  >
                    Start free trial <ArrowIcon />
                  </a>

                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 24, flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(0,0,0,0.4)', marginBottom: 16 }}>
                      Includes
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                        <CheckIcon />
                        <span><strong>{plan.socialSets}</strong> Social Set{plan.socialSets > 1 ? 's' : ''}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                        <CheckIcon />
                        <span><strong>{plan.users}</strong> User{plan.users > 1 ? 's' : ''}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                        <CheckIcon />
                        <span><strong>{plan.postsPerProfile}</strong></span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                        <CheckIcon />
                        <span><strong>{plan.aiCredits}</strong> AI Credits/mo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading reveal text-center"
            style={{
              fontSize: 48,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Compare plan features
          </h2>

          <div
            className="reveal reveal-d1"
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              overflowX: 'auto',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.12)' }}>
                  <th style={{ textAlign: 'left', padding: '16px 12px', fontSize: 14, fontWeight: 600, color: 'rgba(0,0,0,0.5)', width: '40%' }}>
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      style={{
                        textAlign: 'center',
                        padding: '16px 12px',
                        fontSize: 16,
                        fontWeight: 700,
                        width: '20%',
                        color: plan.popular ? '#FE3F00' : '#000',
                      }}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, idx) => (
                  <tr
                    key={row.key}
                    style={{
                      borderBottom: '1px solid rgba(0,0,0,0.06)',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.02)',
                    }}
                  >
                    <td style={{ padding: '14px 12px', fontSize: 15 }}>{row.label}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} style={{ textAlign: 'center', padding: '14px 12px' }}>
                        {plan.features[row.key] ? <CheckIcon /> : <XIcon />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading reveal text-center"
            style={{
              fontSize: 48,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className={`reveal reveal-d${Math.min(idx + 1, 3)}`}
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '24px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: 16,
                    }}
                  >
                    <span style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <ChevronDown open={isOpen} />
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, opacity 0.3s ease',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: 'rgba(0,0,0,0.6)',
                        paddingBottom: 24,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="purple-wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="reveal text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            <h2
              className="ff-heading"
              style={{
                fontSize: 56,
                fontWeight: 900,
                lineHeight: 1.08,
                color: '#fff',
                marginBottom: 24,
              }}
            >
              Find your perfect Later plan today
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.75)',
                marginBottom: 24,
                maxWidth: 480,
                margin: '0 auto 40px',
              }}
            >
              Start your 14-day free trial. No credit card required.
            </p>
            <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
              Get started free <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
