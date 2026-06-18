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
        padding: '70px 0',
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full" style={{ padding: '0 20px' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 56,
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '0.28px',
            color: '#fff',
            marginBottom: '3rem',
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
              className={`flex flex-col items-start transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={stat.icon}
                alt=""
                style={{ width: 48, height: 48, filter: 'brightness(0) invert(1)' }}
                loading="lazy"
              />
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 70,
                  fontWeight: 900,
                  lineHeight: 1.25,
                  letterSpacing: '0.35px',
                  color: '#fff',
                  marginTop: '0.5rem',
                }}
              >
                {stat.value}
              </h3>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.4,
                  color: 'rgba(255,255,255,0.7)',
                  marginTop: '0.5rem',
                }}
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
