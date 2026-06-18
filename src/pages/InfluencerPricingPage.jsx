import { useState } from 'react'

const pricingCards = [
  {
    name: 'Platform',
    emphasized: false,
    description:
      'Power your in-house influencer program with end-to-end campaign management tools',
    features: [
      'Unlimited users, campaigns, and creator partnerships',
      'Built-in automation and performance tracking',
      'Complete control over your creator marketing strategy',
    ],
    benefits: [
      'Discover and vet creators',
      'Automate campaign workflow',
      'Track performance',
      'View recommended incentives',
      'Drive sales through social commerce',
      'Source authentic ratings and reviews at scale',
      'Monitor brand health and sentiment with social listening',
    ],
  },
  {
    name: 'Platform + Services',
    emphasized: true,
    description:
      'Move faster with expert guidance and creative strategy paired with our comprehensive platform',
    features: [
      'Unlimited users, campaigns, and creator partnerships',
      'Built-in automation and performance tracking',
      'Complete control over your creator marketing strategy',
    ],
    benefits: [
      'Launch campaigns 2x faster',
      'Access to best practices forged over a decade',
      'Run 63% more campaigns with our streamlined process',
      'Save up to 30% on creator fees and we’ll handle creator negotiations',
      'Reduce brand safety risk with a second set of eyes',
    ],
  },
  {
    name: 'Services',
    emphasized: false,
    description:
      'Everything from creative, strategy, and execution from our award-winning team',
    features: [
      'Unlimited users, campaigns, and creator partnerships',
      'Built-in automation and performance tracking',
      'Complete control over your creator marketing strategy',
    ],
    benefits: [
      'Drive efficiency with turnkey campaign management',
      'Achieve tailored KPIs through creative excellence',
      'Access enterprise-grade expertise without hiring costs',
      'Ensure brand safety with comprehensive creator vetting',
      'Get leadership-ready analytics and reporting',
    ],
  },
]

const trustedLogos = [
  {
    name: 'Walgreens',
    url: 'https://images.ctfassets.net/nfpsrlop6sws/6w6oARUoioAPSxU1lxVEQI/132913dbaac91df24bc155a0accb3081/walgreens-logo-dark.png',
  },
  {
    name: 'Crayola',
    url: 'https://images.ctfassets.net/nfpsrlop6sws/uKyuRPfHvyPQdrnw6fRM1/1775f6d25e8c8a3e075a444c4ebd88e6/crayola-logo-dark.png',
  },
  {
    name: 'Method',
    url: 'https://images.ctfassets.net/nfpsrlop6sws/3KK71Gv901o0gHPhRfW52d/8efbfb42857cc517f544c5c163c013a4/method-logo-dark.png',
  },
  {
    name: 'GoPro',
    url: 'https://images.ctfassets.net/nfpsrlop6sws/1QwzxwF6SJuKYV6l1CzOuh/b2b40a78f299158d7d595f81cebc7f53/gopro-logo-dark.png',
  },
  {
    name: 'Mondelez',
    url: 'https://images.ctfassets.net/nfpsrlop6sws/5QDLP6GWgdDS0yj2wzLkPE/76d99af5337ba2dea8352982f117ffe4/Mondelez-logo-dark.png',
  },
  {
    name: 'Pottery Barn',
    url: 'https://images.ctfassets.net/nfpsrlop6sws/4u2xmIUWiMkD40zXL8cSg1/0901b663bf6b1a7d33299f526ae1ca2d/pottery-barn-logo-dark.png',
  },
]

const faqs = [
  {
    q: 'How many influencers are in your database?',
    a: 'Our database includes millions of vetted creators across all major social platforms. We continuously index new creators so you always have access to fresh talent aligned with your niche and audience demographics.',
  },
  {
    q: 'Our brand already partners with creators, can I use Later to work with them?',
    a: 'Absolutely. You can invite your existing creator partners into the platform and manage all relationships in one place. This lets you keep your established partnerships while gaining the benefits of Later’s workflow tools and analytics.',
  },
  {
    q: 'How many campaigns can we run ourselves?',
    a: 'There are no limits on the number of campaigns you can run. Every plan includes unlimited campaigns so you can scale your influencer program without worrying about hitting a cap.',
  },
  {
    q: 'What kind of campaigns can I run on Later Influence?',
    a: 'You can run sponsored content, gifting, affiliate, ambassador, and UGC campaigns across Instagram, TikTok, YouTube, Pinterest, and more. The platform supports both one-off activations and always-on programs.',
  },
  {
    q: 'How many hours would it take for the Later Services team to run a campaign for our brand?',
    a: 'Campaign timelines vary based on scope and complexity. Our services team typically handles everything from strategy to reporting, freeing your team to focus on other priorities. We’ll scope the engagement during onboarding.',
  },
  {
    q: 'What data is available in reports?',
    a: 'Reports include impressions, reach, engagement rate, clicks, conversions, EMV, CPE, and audience demographics. You can export data at the campaign, creator, or post level for internal stakeholders.',
  },
  {
    q: 'Can I review the content influencers create before it’s live?',
    a: 'Yes. The platform includes a content approval workflow that lets you review, comment on, and approve every piece of content before it goes live. This ensures brand consistency and compliance.',
  },
  {
    q: 'How can we prove the ROI of our program and the platform?',
    a: 'Later provides attribution tracking, conversion pixels, and custom UTM support so you can tie influencer activity directly to revenue. Our reporting dashboards make it easy to present ROI to leadership.',
  },
  {
    q: 'Do you have a free trial?',
    a: 'We don’t offer a self-serve free trial for the influencer marketing platform. However, our team will provide a personalized demo so you can see exactly how Later Influence fits your needs before committing.',
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon({ color = '#FE3F00' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path
        d="M4 10.5l4 4 8-9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path
        d="M9 1l2.47 5.01L17 6.76l-4 3.9.94 5.51L9 13.77l-4.94 2.4.94-5.51-4-3.9 5.53-.75L9 1z"
        fill="#7A63E8"
      />
    </svg>
  )
}

export default function InfluencerPricingPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="reveal" style={{ padding: '80px 0 40px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="text-center hero-enter" style={{ maxWidth: 820, margin: '0 auto' }}>
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
              Find the right influencer marketing plan{' '}
              <span style={{ color: '#FE3F00' }}>for your business.</span>
            </h1>
            <p
              className="hero-enter-d1"
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(0,0,0,0.6)',
                maxWidth: 520,
                margin: '0 auto',
              }}
            >
              Everything you need to increase your return on social
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="reveal" style={{ padding: '20px 0 60px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div
            style={{ maxWidth: 1140, margin: '0 auto' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pricingCards.map((card, i) => (
              <div
                key={card.name}
                className={`reveal reveal-d${i + 1}${card.emphasized ? ' md:col-span-2 lg:col-span-1' : ''}`}
                style={{
                  position: 'relative',
                  border: card.emphasized
                    ? '2px solid #7A63E8'
                    : '1px solid rgba(0,0,0,0.12)',
                  borderRadius: 16,
                  padding: card.emphasized ? '48px 28px 36px' : '36px 28px',
                  backgroundColor: card.emphasized ? '#F9F7FF' : '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  ...(card.emphasized
                    ? { boxShadow: '0 8px 40px rgba(122,99,232,0.12)' }
                    : {}),
                }}
              >
                {card.emphasized && (
                  <span
                    style={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#7A63E8',
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: 700,
                      padding: '5px 20px',
                      borderRadius: 20,
                      whiteSpace: 'nowrap',
                      zIndex: 1,
                    }}
                  >
                    Most popular
                  </span>
                )}

                <h3
                  className="ff-heading"
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    marginBottom: 12,
                  }}
                >
                  {card.name}
                </h3>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: 'rgba(0,0,0,0.55)',
                    marginBottom: 24,
                    minHeight: 48,
                  }}
                >
                  {card.description}
                </p>

                {/* Plan Details Link */}
                <a
                  href="#"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: card.emphasized ? '#7A63E8' : '#FE3F00',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    marginBottom: 16,
                    display: 'inline-block',
                  }}
                >
                  {card.name} Plan Details
                </a>

                <a
                  href="#"
                  className={card.emphasized ? 'btn-primary' : 'btn-outline'}
                  style={{
                    fontSize: 16,
                    justifyContent: 'center',
                    width: '100%',
                    marginBottom: 28,
                  }}
                >
                  Request Pricing <ArrowIcon />
                </a>

                {/* Base Features */}
                <div
                  style={{
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                    paddingTop: 20,
                    marginBottom: 24,
                  }}
                >
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {card.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                          fontSize: 14,
                          lineHeight: 1.5,
                          textAlign: 'left',
                        }}
                      >
                        <CheckIcon color={card.emphasized ? '#7A63E8' : '#FE3F00'} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      color: card.emphasized ? '#7A63E8' : '#FE3F00',
                      marginBottom: 14,
                    }}
                  >
                    Key Benefits:
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {card.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                          fontSize: 14,
                          lineHeight: 1.5,
                          textAlign: 'left',
                        }}
                      >
                        <StarIcon />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="reveal wood-bg" style={{ padding: '48px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <p
            className="text-center"
            style={{
              fontSize: 14,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'rgba(0,0,0,0.4)',
              marginBottom: 32,
            }}
          >
            Trusted by
          </p>
          <div
            className="reveal reveal-d1"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 48,
              flexWrap: 'wrap',
            }}
          >
            {trustedLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={`${logo.name} logo`}
                style={{
                  height: 28,
                  objectFit: 'contain',
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reveal" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading text-center"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 40,
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
                      padding: '20px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: 16,
                    }}
                  >
                    <span
                      className="ff-heading"
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown open={isOpen} />
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 400 : 0,
                      overflow: 'hidden',
                      transition:
                        'max-height 0.4s ease, opacity 0.3s ease',
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
      <section className="reveal purple-wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div
            className="text-center"
            style={{ maxWidth: 700, margin: '0 auto' }}
          >
            <h2
              className="ff-heading"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                fontWeight: 900,
                lineHeight: 1.08,
                color: '#fff',
                marginBottom: 20,
              }}
            >
              Power up your influencer marketing
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.75)',
                maxWidth: 480,
                margin: '0 auto 36px',
              }}
            >
              Find out what Later Influence can do for you and your business.
            </p>
            <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
              Book a demo <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
