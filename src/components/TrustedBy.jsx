const logos = [
  { name: 'Nike', src: 'https://images.ctfassets.net/nfpsrlop6sws/48ua7r8cCQCdo6IamRvUJV/cbc17ab7df6f3dcf3df1608405744fcc/logo-nike-dark.png?fm=webp' },
  { name: 'Wayfair', src: 'https://images.ctfassets.net/nfpsrlop6sws/EfDPSpu4N4chATsVvbDxc/00c7f1d205ced6b282cb0e5aa0e79f08/logo-wayfair-dark.png?fm=webp' },
  { name: 'Southwest', src: 'https://images.ctfassets.net/nfpsrlop6sws/4poHpqAuKtldh4FMEbCvfx/a9c291f95c7c67b9d4e7bde52b4de071/logo-southwest-dark.png?fm=webp' },
  { name: 'Unilever', src: 'https://images.ctfassets.net/nfpsrlop6sws/3jvYWSEwdKhHJR7TCNO6vb/df049a260378e26caa438bc8c701210e/logo-unilever-dark.png?fm=webp' },
  { name: 'Crumbl', src: 'https://images.ctfassets.net/nfpsrlop6sws/7xer7c56OxjqLQIwx41TEC/148f82b39ccb70b3e683c9e4908464dc/logo-crumbl-dark.png?fm=webp' },
  { name: 'KiwiCo', src: 'https://images.ctfassets.net/nfpsrlop6sws/2BCGRktXAkS22QtuDwZqFN/22c5a7b9c357f8fc630e0d4856755ce6/logo-kiwico-dark.png?fm=webp' },
  { name: 'El Pollo Loco', src: 'https://images.ctfassets.net/nfpsrlop6sws/2CPs5GTNgpGERFvPArHyNu/2b3bab5d9271459f17066003ab6cfb51/logo-elpolloloco-dark.png?fm=webp' },
  { name: 'Chewy', src: 'https://images.ctfassets.net/nfpsrlop6sws/1qrKD7cVkjTf09KRswFdVl/32ab5c7b53ba65fd640d1b7da177764d/logo-chewy-dark.png?fm=webp' },
  { name: 'Habit Burger', src: 'https://images.ctfassets.net/nfpsrlop6sws/4LoM5hEugQ76U0WETgCaNF/9291b0027f2fc13d78b65b6a0dd193f0/logo-habitburger-dark.png?fm=webp' },
  { name: 'Make A Wish', src: 'https://images.ctfassets.net/nfpsrlop6sws/7GRFbvVF3WiXKPbxneLpB1/48059473dff21df2e5edfcec663b6597/logo-makeawish-dark.png?fm=webp' },
  { name: 'At Home', src: 'https://images.ctfassets.net/nfpsrlop6sws/10Y7rQq1MtQfSdwU18i5vH/ca1db8df28231e46f69a7025874c4717/logo-athome-dark.png?fm=webp' },
  { name: 'MacKenzie-Childs', src: 'https://images.ctfassets.net/nfpsrlop6sws/6bBnO065jx8uXKuHkFWbL9/037906a6d1ae5efc5d50db8aa6802a00/logo-mackenzie-dark.png?fm=webp' },
  { name: 'Tapatio', src: 'https://images.ctfassets.net/nfpsrlop6sws/4foPBpOn7ow7Aw0RIbCSoX/9cd245a3779b554b40fd73a9ecc52b7a/logo-tapatio-dark.png?fm=webp' },
]

export default function TrustedBy() {
  return (
    <section style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center reveal" style={{ padding: '0 40px' }}>
        <h2 className="text-center mb-12 text-charcoal" style={{ fontSize: 18, fontWeight: 700, lineHeight: '27px', letterSpacing: '0.09px' }}>
          Trusted by industry leaders
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-[1000px]">
          {logos.map((logo, i) => (
            <div key={i} className="hover:opacity-100 transition-opacity" style={{ opacity: 0.8 }}>
              <img
                src={logo.src}
                alt={logo.name}
                height="38"
                className="h-[38px] w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
