const decorations = [
  { src: 'https://later.com/static/rocket-4700e7ffc60bcce24d6771fbb8d60cbb.svg', className: 'top-[15%] left-[5%] w-20 lg:w-28' },
  { src: 'https://later.com/static/wavy-arrow-7f173506cedee67091f372dd2876095d.svg', className: 'top-[10%] right-[8%] w-16 lg:w-24' },
  { src: 'https://later.com/static/coins-242b3d3c3379852e871bdb7a923b37ff.svg', className: 'top-[25%] left-[2%] w-14 lg:w-20' },
  { src: 'https://later.com/static/bubble-aab4eef275da2e0d252367116e06befa.svg', className: 'bottom-[30%] right-[3%] w-16 lg:w-24' },
  { src: 'https://later.com/static/stars-43179c2d7840619c60cf2c44d9c6f4c0.svg', className: 'top-[40%] right-[12%] w-14 lg:w-20' },
  { src: 'https://later.com/static/crown-01a5f63420b4591ddfd3e750207862ed.svg', className: 'bottom-[20%] left-[8%] w-14 lg:w-20' },
  { src: 'https://later.com/static/heart-4854893b6fad97b81e9f68d6f15cab3b.svg', className: 'bottom-[15%] right-[15%] w-12 lg:w-16' },
  { src: 'https://later.com/static/chain-62f449d6e2f1e474e2d9ae439e905703.svg', className: 'bottom-[35%] left-[15%] w-12 lg:w-16' },
  { src: 'https://later.com/static/click-arrow-c9bb779659b83b27515bbcf6145bbb84.svg', className: 'top-[55%] left-[3%] w-14 lg:w-18' },
]

export default function AnimatedText() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden min-h-screen"
      style={{
        backgroundColor: '#F8F2EA',
        backgroundImage: 'url(https://later.com/static/screenmap-no-bg-82fc23e6d0e5c9920baa6b69c483d76b.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {decorations.map((d, i) => (
        <img
          key={i}
          src={d.src}
          className={`absolute ${d.className} opacity-70`}
          alt=""
          loading="lazy"
        />
      ))}
      <h2
        className="text-center relative z-10 text-charcoal max-w-[1200px]"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 96,
          fontWeight: 800,
          lineHeight: '110.4px',
          letterSpacing: '0.48px',
          padding: '0 40px',
        }}
      >
        The only influencer marketing platform powered by real{' '}
        <span className="inline-flex overflow-hidden align-bottom" style={{ height: '1.15em' }}>
          <span className="flex flex-col word-rotate">
            <span className="text-secondary">campaign</span>
            <span className="text-gridglow">creator</span>
            <span className="text-secondary">social</span>
          </span>
        </span>{' '}
        intelligence.
      </h2>
    </section>
  )
}
