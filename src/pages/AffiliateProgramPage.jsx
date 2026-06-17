import { useState } from 'react'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronIcon({ open }) {
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
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const logos = [
  { name: 'Walgreens', src: 'https://images.ctfassets.net/nfpsrlop6sws/3RiF8hkexkeYtQxtYJpkgZ/2b8db1aa2261fdbfbcdf9da6cdd3369c/walgreens-logo.png' },
  { name: 'Method', src: 'https://images.ctfassets.net/nfpsrlop6sws/3svJBltzmbHKzw2u8OxiMn/62c2f94ecf991862a2cb955974b1e253/method-logo.png' },
  { name: 'Crayola', src: 'https://images.ctfassets.net/nfpsrlop6sws/6pKPKec7jh2INrg5k2SxY2/07de39caf18b5fb83b7d4dcfb5b0d7a7/crayola-logo.png' },
  { name: 'GoPro', src: 'https://images.ctfassets.net/nfpsrlop6sws/5OSAQvDkkdcYJCJBtTIoXC/6f0e6c9ed5c47e789fd3d72fb23b68f4/gopro-logo.png' },
  { name: 'Mondelez', src: 'https://images.ctfassets.net/nfpsrlop6sws/3fMJY1tey6gu6ufhaBuUvn/4146e5170da9c3ad6895453d149b5cd5/Mondelez-logo.png' },
  { name: 'Pottery Barn', src: 'https://images.ctfassets.net/nfpsrlop6sws/yVMxREQ1eO19qhkOR6mrL/3c4462ec83799c5d55bd7a2394b691cb/pottery-barn-logo.png' },
]

const benefits = [
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2kHHJrcPmrvN7OHcVUZglc/cd5fe3d0106e925b659a91a852e30892/icon-coins-navy.png',
    title: 'Earn on your terms',
    desc: 'Choose when and how to recommend Later to your network, while earning 30% (or higher!) commission for every sale.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1KjVUi60YHVq8XG5iaoba5/40aa046ec2ee8c1a2aa87d163305205c/icon-team-navy.png',
    title: 'Build your brand',
    desc: 'Team up with the go-to name in social media to provide value to your followers (and gain a competitive edge).',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/5OQ7eo2UR4Q3M4GO9NQUFR/285ea66991787e6de59908ee2a183615/icon-rocket-navy.png',
    title: 'No cost, no limits',
    desc: 'The affiliate program is free to join, with no caps on your earning potential.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Join the program',
    desc: 'Submit an application, receive your unique referral link, and gain access to the affiliate platform.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/3rJeKgoBfVglzGjgM70C9W/79fbee511d0b52df082864345e0cdfc0/affiliate-program-join.png?fm=webp&q=75&w=569&h=481',
  },
  {
    num: '02',
    title: 'Spread the word',
    desc: 'Share your link with your network—you\'ll get access to marketing resources to help you promote Later.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/4EYgOhcoIFWD8t3tXzFSwv/261f8cd4453ee7bda2de1c8c03650e0e/affiliate-program-share.png?fm=webp&q=75&w=1136&h=960',
  },
  {
    num: '03',
    title: 'Start earning',
    desc: 'Get paid for each new user you refer to Later. The more you refer, the more commission you\'ll earn!',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/UQ9KEs2FjycHyMGOcwG0t/f62f66edf6a96a1122067f429f303487/affiliate-program-earn.png?fm=webp&q=75&w=1136&h=960',
  },
]

const faqs = [
  {
    q: 'What is an affiliate program?',
    a: 'An affiliate program lets you earn commissions by promoting a brand\'s products or services. When someone makes a purchase through your unique referral link, you receive a percentage of the sale. It\'s a performance-based partnership where you get rewarded for driving real results.',
  },
  {
    q: 'How do I join the Later affiliate program?',
    a: 'After you complete the affiliate program application, our team will review it and get back to you. Once approved, you\'ll receive your unique referral link and gain access to the affiliate platform where you can track your performance and earnings.',
  },
  {
    q: 'Who is an ideal affiliate partner?',
    a: 'Our ideal affiliate partner is a small business owner, creator, or influencer who is passionate about social media marketing. If you have an engaged audience that could benefit from Later\'s suite of social media tools, you\'re a great fit for our program.',
  },
]

function LogoSet() {
  return (
    <>
      {logos.map((logo, i) => (
        <div key={i} className="flex-shrink-0 mx-8">
          <img
            src={logo.src}
            alt={logo.name}
            className="h-[32px] w-auto object-contain opacity-70"
            loading="lazy"
          />
        </div>
      ))}
    </>
  )
}

export default function AffiliateProgramPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>

      {/* ── Hero ── */}
      <section className="wood-bg" style={{ padding: '100px 0 80px' }}>
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ padding: '0 40px' }}
        >
          <div>
            <p
              className="hero-enter"
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#FE3F00',
                marginBottom: 20,
              }}
            >
              REFER NOW, START EARNING
            </p>
            <h1
              className="text-charcoal hero-enter-d1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 76,
                fontWeight: 900,
                lineHeight: '80px',
                letterSpacing: '0.38px',
                marginBottom: 28,
              }}
            >
              Earn more as a Later affiliate
            </h1>
            <p
              className="text-charcoal hero-enter-d2"
              style={{
                fontSize: 20,
                fontWeight: 400,
                lineHeight: '30px',
                maxWidth: 540,
                marginBottom: 36,
              }}
            >
              Help others discover Later and enjoy exclusive perks as an affiliate. Earn commission, build your brand, and access resources to help you grow.
            </p>
            <div className="hero-enter-d3">
              <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
                Apply now <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-enter-d3">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/2iWjaSivU3LEHGlhRRn1bJ/8ba4a0bf228a9caee9b06a4f108c72de/affiliate-program-hero.png?w=1137&h=960&q=80&fm=png"
                alt="Later affiliate program hero"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted By Logo Ticker ── */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '40px 0' }} className="overflow-hidden">
        <div className="flex items-center whitespace-nowrap ticker-animate">
          <LogoSet />
          <LogoSet />
          <LogoSet />
          <LogoSet />
        </div>
      </section>

      {/* ── How It Works Intro ── */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '100px 0 80px' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <p
            className="reveal"
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#FE3F00',
              marginBottom: 20,
            }}
          >
            HOW IT WORKS
          </p>
          <h2
            className="text-charcoal reveal reveal-d1"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 60,
              fontWeight: 900,
              lineHeight: '66px',
              letterSpacing: '0.3px',
              maxWidth: 800,
              margin: '0 auto 24px',
            }}
          >
            Partner with Later, grow together
          </h2>
          <p
            className="text-charcoal/70 reveal reveal-d2"
            style={{
              fontSize: 20,
              lineHeight: '30px',
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            Share Later with your audience and get rewarded. You'll help your network access tools to simplify their social media strategy — and you'll build your reputation as an industry leader (win-win).
          </p>
        </div>
      </section>

      {/* ── Benefits Cards ── */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '0 0 100px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1}`}
                style={{
                  padding: '40px 32px',
                  backgroundColor: '#F8F2EA',
                  borderRadius: 12,
                }}
              >
                <img
                  src={b.icon}
                  alt=""
                  style={{ width: 48, height: 48, marginBottom: 24 }}
                  loading="lazy"
                />
                <h3
                  className="text-charcoal"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 28,
                    fontWeight: 900,
                    lineHeight: '34px',
                    marginBottom: 16,
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-charcoal/70"
                  style={{ fontSize: 18, lineHeight: '28px' }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works Steps ── */}
      <section className="wood-bg" style={{ padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          {steps.map((step, i) => {
            const isReversed = i % 2 === 1
            return (
              <div
                key={i}
                className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                style={{ marginBottom: i < steps.length - 1 ? 80 : 0 }}
              >
                <div
                  className={isReversed ? 'lg:order-2' : 'lg:order-1'}
                >
                  <span
                    className="text-gridglow"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 16,
                      fontWeight: 900,
                      letterSpacing: '1px',
                      display: 'block',
                      marginBottom: 16,
                    }}
                  >
                    Step {step.num}
                  </span>
                  <h3
                    className="text-charcoal"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 44,
                      fontWeight: 900,
                      lineHeight: '50px',
                      letterSpacing: '0.2px',
                      marginBottom: 20,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-charcoal/70"
                    style={{
                      fontSize: 20,
                      lineHeight: '30px',
                      maxWidth: 480,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
                <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="w-full rounded-lg overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '100px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="text-charcoal text-center reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 60,
              fontWeight: 900,
              lineHeight: '66px',
              letterSpacing: '0.3px',
              marginBottom: 56,
            }}
          >
            Frequently asked questions
          </h2>
          <div
            className="reveal reveal-d1"
            style={{ maxWidth: 800, margin: '0 auto' }}
          >
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,0.12)',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '28px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      className="text-charcoal"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 24,
                        fontWeight: 900,
                        lineHeight: '30px',
                        paddingRight: 24,
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, opacity 0.3s ease',
                    }}
                  >
                    <p
                      className="text-charcoal/70"
                      style={{
                        fontSize: 18,
                        lineHeight: '28px',
                        paddingBottom: 28,
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

      {/* ── Bottom CTA ── */}
      <section className="purple-wood-bg" style={{ padding: '100px 0' }}>
        <div
          className="max-w-[1440px] mx-auto text-center reveal"
          style={{ padding: '0 40px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 60,
              fontWeight: 900,
              lineHeight: '66px',
              letterSpacing: '0.3px',
              color: '#fff',
              marginBottom: 20,
            }}
          >
            Start earning today
          </h2>
          <p
            className="reveal reveal-d1"
            style={{
              fontSize: 20,
              lineHeight: '30px',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 560,
              margin: '0 auto 40px',
            }}
          >
            Join the Later affiliate program and grow your revenue with every referral.
          </p>
          <div className="reveal reveal-d2">
            <a
              href="#"
              className="btn-primary"
              style={{ fontSize: 18 }}
            >
              Apply now <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
