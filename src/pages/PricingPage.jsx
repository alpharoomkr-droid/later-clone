import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 25,
    yearlyPrice: 18.75,
    description: 'For casual scheduling',
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
    description: 'Smart scheduling, streamlined collaboration, and faster approvals that lift outcomes',
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
    description: 'For Enterprise-level analytics — without the enterprise contract',
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
    q: 'What is a Social Set?',
    a: 'A Social Set includes one of each profile we support: Instagram, Facebook, TikTok, Pinterest, LinkedIn, YouTube, Threads and Snapchat. It helps you organize your content by brand or client.',
  },
  {
    q: 'Can I auto publish posts?',
    a: 'Yes! Auto Publish works for Instagram (business + creator accounts), Facebook, TikTok (business account), LinkedIn, Pinterest, YouTube, Threads and Snapchat.',
  },
  {
    q: 'How does post count work?',
    a: 'Your post count is the number of scheduled posts you can create per month per social profile — not per Social Set. Posts count when they\'re scheduled — not when they\'re published.',
  },
  {
    q: 'What kind of analytics do I get with my plan?',
    a: 'All Later plans come with access to powerful analytics tools. The only difference is how far back you can look. Starter: 3 months, Growth: 1 year, Scale: 2 years with custom analytics.',
  },
  {
    q: 'How many users come with a plan?',
    a: 'Each plan comes with a set number of users. You can add additional users to each paid plan for $5 per additional user. Note: Starter plans are limited to 1 user.',
  },
  {
    q: 'How do the annual plans work?',
    a: 'Save 25% when you choose an annual subscription instead of a monthly subscription. Annual plans are billed once per year and renewed automatically.',
  },
  {
    q: 'Do you have any non-profit pricing?',
    a: 'Yes, qualified non-profit organizations can receive 50% off our annual Growth plan.',
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
    <svg className="mx-auto shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10.5l4 4 8-9" stroke="#FE3F00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIconInline() {
  return (
    <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10.5l4 4 8-9" stroke="#FE3F00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="mx-auto shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
      className="shrink-0"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
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
      <section className="reveal py-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center hero-enter mx-auto" style={{ maxWidth: 800 }}>
            <h1
              className="ff-heading"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.5px',
                marginBottom: 20,
              }}
            >
              Manage your entire social media strategy.{' '}
              <span style={{ color: '#FE3F00' }}>Free for 14 days.</span>
            </h1>
          </div>

          {/* Trusted by logos */}
          <div
            className="hero-enter-d2 flex items-center justify-center gap-8 flex-wrap mt-8"
            style={{ opacity: 0.5 }}
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
      <section className="reveal py-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span
              className="cursor-pointer transition-all duration-200"
              style={{
                fontSize: 16,
                fontWeight: isYearly ? 400 : 700,
                color: isYearly ? 'rgba(0,0,0,0.5)' : '#000',
              }}
              onClick={() => setIsYearly(false)}
            >
              Bill Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative shrink-0 border-none cursor-pointer transition-colors duration-300"
              style={{
                width: 56,
                height: 30,
                borderRadius: 15,
                backgroundColor: isYearly ? '#FE3F00' : '#ccc',
              }}
            >
              <span
                className="absolute rounded-full bg-white transition-[left] duration-300"
                style={{
                  top: 3,
                  left: isYearly ? 29 : 3,
                  width: 24,
                  height: 24,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
              />
            </button>
            <span
              className="cursor-pointer transition-all duration-200"
              style={{
                fontSize: 16,
                fontWeight: isYearly ? 700 : 400,
                color: isYearly ? '#000' : 'rgba(0,0,0,0.5)',
              }}
              onClick={() => setIsYearly(true)}
            >
              Bill Yearly
            </span>
            {isYearly && (
              <span
                className="whitespace-nowrap inline-flex items-center gap-1"
                style={{
                  backgroundColor: 'rgba(254,63,0,0.08)',
                  color: '#FE3F00',
                  fontSize: 13,
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: 20,
                }}
              >
                <img src="https://later.com/images/pricing/icon/dollar-sign.png" alt="" style={{ width: 16, height: 16 }} />
                3 months free &middot; 25% off
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="reveal pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto" style={{ maxWidth: 1100 }}>
            {plans.map((plan, i) => {
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
              return (
                <div
                  key={plan.name}
                  className={`reveal reveal-d${i + 1} h-full relative flex flex-col`}
                  style={{
                    border: plan.popular ? '2px solid #FE3F00' : '1px solid rgba(0,0,0,0.12)',
                    borderRadius: 16,
                    padding: '40px 28px',
                    backgroundColor: plan.popular ? '#FFFAF8' : '#fff',
                    ...(plan.popular ? { boxShadow: '0 8px 40px rgba(254,63,0,0.1)' } : {}),
                  }}
                >
                  {plan.popular && (
                    <span
                      className="absolute left-1/2 whitespace-nowrap"
                      style={{
                        top: -14,
                        transform: 'translateX(-50%)',
                        backgroundColor: '#FE3F00',
                        color: '#fff',
                        fontSize: 13,
                        fontWeight: 700,
                        padding: '5px 20px',
                        borderRadius: 20,
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
                      style={{ fontSize: 44, fontWeight: 900, lineHeight: 1 }}
                    >
                      {formatPrice(price)}
                    </span>
                    <span style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)', marginLeft: 2 }}>USD/month*</span>
                    {isYearly && (
                      <div className="flex items-center gap-1 mt-1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>
                        Billed yearly
                        <img src="https://later.com/images/pricing/icon/dollar-sign.png" alt="" style={{ width: 14, height: 14 }} />
                        <span style={{ color: '#FE3F00', fontWeight: 600 }}>3 months free &middot; 25% off</span>
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
                      marginBottom: 28,
                    }}
                  >
                    Start 14-day free trial <ArrowIcon />
                  </a>

                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 20, flex: 1 }}>
                    <ul className="flex flex-col gap-3" style={{ listStyle: 'none' }}>
                      <li className="flex items-center gap-2.5" style={{ fontSize: 15 }}>
                        <CheckIconInline />
                        <span><strong>{plan.socialSets}</strong> social set{plan.socialSets > 1 ? 's' : ''} ({plan.socialSets * 8} profiles total)</span>
                      </li>
                      <li className="flex items-center gap-2.5" style={{ fontSize: 15 }}>
                        <CheckIconInline />
                        <span><strong>{plan.users}</strong> user{plan.users > 1 ? 's' : ''}</span>
                      </li>
                      <li className="flex items-center gap-2.5" style={{ fontSize: 15 }}>
                        <CheckIconInline />
                        <span>{plan.postsPerProfile === 'Unlimited' ? <strong>Unlimited posts</strong> : <><strong>{plan.postsPerProfile.split(' ')[0]}</strong> posts per profile</>}</span>
                      </li>
                      <li className="flex items-center gap-2.5" style={{ fontSize: 15 }}>
                        <CheckIconInline />
                        <span>AI content tools (<strong>{plan.aiCredits}</strong> AI credits/mo)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center mt-4" style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>
            *Prices are billed in USD, applicable taxes are extra
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="reveal wood-bg py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="ff-heading reveal text-center"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Compare our plans and features
          </h2>

          <div
            className="reveal reveal-d1 mx-auto overflow-x-auto"
            style={{ maxWidth: 1000 }}
          >
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.12)' }}>
                  <th className="text-left" style={{ padding: '16px 12px', fontSize: 14, fontWeight: 600, color: 'rgba(0,0,0,0.5)', width: '40%' }}>
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="text-center"
                      style={{
                        padding: '16px 12px',
                        fontSize: 16,
                        fontWeight: 700,
                        width: '20%',
                        color: plan.popular ? '#FE3F00' : '#000',
                      }}
                    >
                      {plan.name}
                      {plan.popular && (
                        <span
                          className="block mx-auto mt-1"
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: '#FE3F00',
                          }}
                        >
                          Most popular
                        </span>
                      )}
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
                    <td className="text-left" style={{ padding: '14px 12px', fontSize: 15 }}>{row.label}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="text-center" style={{ padding: '14px 12px' }}>
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
      <section className="reveal py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="ff-heading reveal text-center"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="mx-auto" style={{ maxWidth: 760 }}>
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
                    className="flex items-center justify-between w-full text-left gap-4 cursor-pointer"
                    style={{
                      padding: '20px 0',
                      background: 'none',
                      border: 'none',
                    }}
                  >
                    <span style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <ChevronDown open={isOpen} />
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 400 : 0,
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
                        paddingBottom: 20,
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
      <section className="reveal purple-wood-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
            <h2
              className="ff-heading"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 900,
                lineHeight: 1.08,
                color: '#fff',
                marginBottom: 16,
              }}
            >
              Find your perfect Later plan today
            </h2>
            <p
              className="mx-auto"
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.75)',
                marginBottom: 32,
                maxWidth: 480,
              }}
            >
              Whether you're a social media pro or just getting started, Later Social has you covered.
            </p>
            <div className="flex justify-center">
              <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
                Start 14-Day Free Trial <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
