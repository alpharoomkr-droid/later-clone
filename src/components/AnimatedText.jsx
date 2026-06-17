const decorations = [
  { src: 'https://later.com/static/rocket-4700e7ffc60bcce24d6771fbb8d60cbb.svg', className: 'top-10 left-10 w-16' },
  { src: 'https://later.com/static/stars-43179c2d7840619c60cf2c44d9c6f4c0.svg', className: 'top-20 right-20 w-12' },
  { src: 'https://later.com/static/crown-01a5f63420b4591ddfd3e750207862ed.svg', className: 'bottom-20 left-20 w-14' },
  { src: 'https://later.com/static/heart-4854893b6fad97b81e9f68d6f15cab3b.svg', className: 'bottom-10 right-10 w-10' },
  { src: 'https://later.com/static/coins-242b3d3c3379852e871bdb7a923b37ff.svg', className: 'top-1/3 left-5 w-12' },
  { src: 'https://later.com/static/chain-62f449d6e2f1e474e2d9ae439e905703.svg', className: 'top-1/3 right-5 w-12' },
]

export default function AnimatedText() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 lg:py-40 px-6">
      {decorations.map((d, i) => (
        <img
          key={i}
          src={d.src}
          className={`absolute ${d.className} opacity-60`}
          alt=""
          loading="lazy"
        />
      ))}
      <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center leading-tight max-w-[1100px] relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
        The only influencer marketing platform powered by real{' '}
        <span className="inline-flex overflow-hidden h-[1.15em] align-bottom">
          <span className="flex flex-col word-rotate">
            <span className="text-gridglow">campaign</span>
            <span className="text-secondary">creator</span>
            <span className="text-gridglow">social</span>
          </span>
        </span>{' '}
        intelligence.
      </h2>
    </section>
  )
}
