import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/01KamUKM2e5eAggQXPDyce/827312aef7c721f7d7fbc7747c474ed4/icon-binodulars.png?fm=webp',
    value: '16M+',
    desc: 'creators analyzed  across platforms.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1rLL5MrQGfQPh63J3sPxeB/adaaa0adcbbf9b82daee08f30caf1a6a/icon-rocket.png?fm=webp',
    value: '136B',
    desc: 'annual impressions from  scheduled social posts.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/dhAtI5w9PFYADKjNFcoaq/6dd169635013e1b97543e78c6e91fb63/icon-linkinbio.png?fm=webp',
    value: '1B+',
    desc: 'Link in Bio  transactions tracked.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/6pvtyLOmBLAENgCPe6XIvw/c7e1bd7f18de8a2c9df53e041553783c/icon-coins.png?fm=webp',
    value: '$2B+',
    desc: 'in verified influencer-driven purchases.',
  },
]

function useInView(ref) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return visible
}

export default function Stats() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to top, #fe3f00, #cb8aff)',
        padding: '80px 0',
      }}
    >
      <div className="relative z-10 max-w-[1440px] mx-auto w-full" style={{ padding: '0 40px' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 56,
            fontWeight: 900,
            lineHeight: '70px',
            letterSpacing: '0.28px',
            color: '#fff',
            marginBottom: '2rem',
          }}
        >
          The hype is real.
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          style={{ gap: '2rem' }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Angled shadow behind card */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: '#000',
                  clipPath: 'polygon(4% 6%, 100% 0%, 96% 94%, 0% 100%)',
                  transform: 'translate(6px, 6px)',
                }}
              />
              {/* Card */}
              <div
                className="relative flex flex-col items-start"
                style={{
                  backgroundColor: '#FEFCFB',
                  padding: '1.25rem',
                  minHeight: 280,
                  boxShadow: 'rgba(0,0,0,0.2) 10px 10px 30px',
                }}
              >
                <img
                  src={stat.icon}
                  alt=""
                  className="w-12 h-12 mb-4 brightness-0"
                  loading="lazy"
                />
                <h3
                  className="text-charcoal"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 70,
                    fontWeight: 900,
                    lineHeight: '87.5px',
                    letterSpacing: '0.35px',
                  }}
                >
                  {stat.value}
                </h3>
                <p
                  className="text-charcoal/60"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.25,
                    marginTop: 'auto',
                  }}
                >
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
