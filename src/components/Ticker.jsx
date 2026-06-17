const items = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/3LQWEaltVOsIF1UopihBI6/dc565201add57143f63621ecb525f545/icon-heart.png?fm=webp', text: 'Internet-Approved' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/66i7AxJ0QfJgY8M9Myk61x/89488c1bbad1184403ad7a82bbe797a2/icon-fire.png?fm=webp', text: 'Main Feed Energy' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7j1v2yvOs0ur6c2TObCuWJ/72684773d4797d449e0877e161fc473e/icon-link-in-bio.png?fm=webp', text: 'Link In Bio' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/58qKPgNhwv6zDpjevLcfCs/0e98cd7a5b6b5d67bc141a0e50ba9ec1/icon-lightning.png?fm=webp', text: 'IYKYK' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/3Gg6oAuJ8M7Tm566oQmBxN/5337083ad624232918412c56f5e6da72/icon-campaign-rocket.png?fm=webp', text: 'Campaign Loading' },
]

function TickerSet() {
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-4 flex-shrink-0 mx-6">
          <img src={item.icon} alt="" className="w-7 h-7" />
          <span className="text-gridglow text-2xl lg:text-3xl font-extrabold uppercase whitespace-nowrap leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {item.text}
          </span>
        </div>
      ))}
    </>
  )
}

export default function Ticker() {
  return (
    <section className="bg-inverse py-6 overflow-hidden">
      <div className="flex items-center whitespace-nowrap ticker-animate">
        <TickerSet />
        <TickerSet />
        <TickerSet />
        <TickerSet />
      </div>
    </section>
  )
}
