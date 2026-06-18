import { useState } from 'react'

const trustedLogos = [
  { name: 'Walgreens', src: 'https://images.ctfassets.net/nfpsrlop6sws/3RiF8hkexkeYtQxtYJpkgZ/2b8db1aa2261fdbfbcdf9da6cdd3369c/walgreens-logo.png' },
  { name: 'Method', src: 'https://images.ctfassets.net/nfpsrlop6sws/3svJBltzmbHKzw2u8OxiMn/62c2f94ecf991862a2cb955974b1e253/method-logo.png' },
  { name: 'Crayola', src: 'https://images.ctfassets.net/nfpsrlop6sws/6pKPKec7jh2INrg5k2SxY2/07de39caf18b5fb83b7d4dcfb5b0d7a7/crayola-logo.png' },
  { name: 'GoPro', src: 'https://images.ctfassets.net/nfpsrlop6sws/5OSAQvDkkdcYJCJBtTIoXC/6f0e6c9ed5c47e789fd3d72fb23b68f4/gopro-logo.png' },
  { name: 'Mondelez', src: 'https://images.ctfassets.net/nfpsrlop6sws/3fMJY1tey6gu6ufhaBuUvn/4146e5170da9c3ad6895453d149b5cd5/Mondelez-logo.png' },
  { name: 'Pottery Barn', src: 'https://images.ctfassets.net/nfpsrlop6sws/yVMxREQ1eO19qhkOR6mrL/3c4462ec83799c5d55bd7a2394b691cb/pottery-barn-logo.png' },
]

const partnerCategories = [
  {
    title: 'Social Media Platforms',
    desc: 'Expand reach and engagement through direct platform integrations and co-marketing opportunities.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/77pTku5tcxGIbKpyARAhxI/2dfd2c36b123fdac9c9f51c4efe44329/icon-star-blue.png?w=80&h=80&q=80&fm=png',
  },
  {
    title: 'Referral & Reseller',
    desc: 'Earn commissions by referring clients to Later or reselling our solutions under your brand.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/22rUYGgpOtdisF8BinDAhd/8e9a74d325bc4075bba187388c423014/icon-megaphone-blue.png?w=80&h=80&q=80&fm=png',
  },
  {
    title: 'Technology Integration Partners',
    desc: 'Build integrations that connect your technology with Later to deliver more value to shared customers.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/4hGxpXmkiAfaPKIAAXP4KF/245e4b2dfca7a170d26455d173959e7c/icon-pencil-blue.png?w=80&h=80&q=80&fm=png',
  },
  {
    title: 'Agency Holding Companies',
    desc: 'Leverage Later across your portfolio of agencies to streamline influencer and social programs at scale.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/4biG0qn6WRvNYFiAZOY09Y/9e84d0713d8bbf1fa003af05ec2482cd/Later_Icon_SocialMediaMgmt.png?w=155&h=155&q=80&fm=png',
  },
  {
    title: 'Creators, Influencers, & Affiliates',
    desc: 'Join the Later creator network to access brand deals, grow your audience, and monetize your content.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2M6LWhTXwb2E566drAP4R3/07479382c537aa10d5b90eab4d42b5cd/icon-lightbulb-blue.png?w=80&h=80&q=80&fm=png',
  },
  {
    title: 'Non-Profit Program',
    desc: 'Qualifying non-profits receive special pricing and support to amplify their mission through social media.',
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/vzviWwmvxikY8nIWgyKGC/9341d7929ce4da29fbf0f089e5f26c50/icon-plant.png?w=160&h=160&q=80&fm=png',
  },
]

const integrationTabs = ['All', 'Later Influence', 'Link in Bio']

const socialPlatforms = [
  { name: 'Snap', src: 'https://later.com/images/partners/2024/snap-logo.png' },
  { name: 'Pinterest', src: 'https://later.com/images/partners/2024/pinterest-logo.png' },
  { name: 'TikTok', src: 'https://later.com/images/partners/2024/tiktok-logo.png' },
  { name: 'Instagram', src: 'https://later.com/images/partners/2024/instagram-logo.png' },
  { name: 'Facebook', src: 'https://later.com/images/partners/2024/facebook-logo.png' },
  { name: 'YouTube', src: 'https://later.com/images/partners/2024/youtube-logo.png' },
  { name: 'LinkedIn', src: 'https://later.com/images/partners/2024/linkedin-logo.png' },
  { name: 'X', src: 'https://later.com/images/partners/2024/x-logo.png' },
]

const productPartners = [
  { name: 'Google', src: 'https://later.com/images/partners/2024/google-logo.png' },
  { name: 'Dropbox', src: 'https://later.com/images/partners/2024/dropbox-logo.png' },
  { name: 'Adobe', src: 'https://later.com/images/partners/2024/adobe-logo.png' },
  { name: 'Mailchimp', src: 'https://later.com/images/partners/2024/mailchimp-logo.png' },
  { name: 'Canva', src: 'https://later.com/images/partners/2024/canva-logo.png' },
  { name: 'Bazaar Voice', src: 'https://later.com/images/partners/2024/bazaarvoice-logo.png' },
  { name: 'Yotpo', src: 'https://later.com/images/partners/2024/yotpo-logo.png' },
  { name: 'Power Reviews', src: 'https://later.com/images/partners/2024/powerreviews-logo.png' },
  { name: 'Everflow', src: 'https://later.com/images/partners/2024/everflow-logo.png' },
]

const faqItems = [
  {
    q: 'Who is the ideal Later partner?',
    a: 'The ideal Later partner is a brand, agency, creator, or platform that is passionate about social media and influencer marketing. We work best with partners who are looking to grow their business alongside Later and provide value to their customers or audiences.',
  },
  {
    q: 'What does being a Later partner entail?',
    a: 'As a Later partner, you get access to dedicated partner support, co-marketing opportunities, product training, and exclusive resources. The specific benefits depend on the partnership tier and type you qualify for.',
  },
  {
    q: 'How much does it cost to become a Later partner?',
    a: 'There is no cost to apply or join the Later partner program. Partnership is based on mutual fit and the value we can create together. Specific commercial terms vary by partnership type.',
  },
  {
    q: 'Do you have an affiliate program?',
    a: 'Yes! Later offers an affiliate program where you can earn commissions by referring new customers to Later. Apply through our partner portal to get started with tracking links and marketing materials.',
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        flexShrink: 0,
      }}
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PartnersPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeTab, setActiveTab] = useState('All')
  const [formData, setFormData] = useState({ name: '', email: '', partnerType: '' })

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  const getFilteredIntegrations = () => {
    if (activeTab === 'All') return [...socialPlatforms, ...productPartners]
    if (activeTab === 'Later Influence') return [...socialPlatforms, ...productPartners.slice(0, 5)]
    return socialPlatforms
  }

  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg reveal" style={{ padding: '100px 0 80px' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ padding: '0 20px' }}>
          <div>
            <p
              className="text-gridglow hero-enter"
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Later Partner Portal
            </p>
            <h1
              className="ff-heading text-charcoal hero-enter-d1"
              style={{
                fontSize: 72,
                fontWeight: 900,
                lineHeight: '76px',
                letterSpacing: '0.36px',
                marginBottom: 24,
              }}
            >
              Join the Later partner program
            </h1>
            <p
              className="text-charcoal/70 hero-enter-d2"
              style={{ fontSize: 20, fontWeight: 400, lineHeight: '30px', maxWidth: 520, marginBottom: 36 }}
            >
              We're building the future of social. Choose the partner program that works best for you and enjoy the benefits of working with Later.
            </p>
            <div className="hero-enter-d3">
              <a href="#contact" className="btn-primary" style={{ fontSize: 18 }}>
                Apply now
              </a>
            </div>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1yUXYiH5wtKMWeuo2PpPrw/9ba786071a44d3d95b20fb314ddde7ef/partners-hero__1_.png?w=1150&h=976&q=80&fm=png"
              alt="Later partner program hero"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '48px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <p
            className="text-center text-charcoal/40 reveal"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 32 }}
          >
            Trusted by the world's top brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 reveal reveal-d1">
            {trustedLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-[28px] w-auto object-contain opacity-60 hover:opacity-100"
                style={{ transition: 'opacity 0.3s ease' }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="max-w-[720px] mx-auto text-center">
            <p
              className="text-gridglow reveal"
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              How It Works
            </p>
            <h2
              className="ff-heading text-charcoal reveal reveal-d1"
              style={{
                fontSize: 52,
                fontWeight: 900,
                lineHeight: '58px',
                letterSpacing: '0.26px',
                marginBottom: 20,
              }}
            >
              What is the Later strategic partner program?
            </h2>
            <p
              className="text-charcoal/70 reveal reveal-d2"
              style={{ fontSize: 20, lineHeight: '30px' }}
            >
              We offer multiple partnership opportunities and structures for brands, agencies, creators, and platforms to grow alongside Later.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="wood-bg reveal" style={{ padding: '60px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {partnerCategories.map((cat, i) => (
              <div
                key={cat.title}
                className={`reveal reveal-d${(i % 3) + 1}`}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 16,
                  padding: '40px 32px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <img
                  src={cat.icon}
                  alt=""
                  style={{ width: 56, height: 56, objectFit: 'contain', marginBottom: 24 }}
                  loading="lazy"
                />
                <h3
                  className="ff-heading text-charcoal"
                  style={{
                    fontSize: 24,
                    fontWeight: 900,
                    lineHeight: '30px',
                    marginBottom: 12,
                  }}
                >
                  {cat.title}
                </h3>
                <p className="text-charcoal/60" style={{ fontSize: 16, lineHeight: '26px' }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <h2
            className="ff-heading text-charcoal text-center reveal"
            style={{
              fontSize: 52,
              fontWeight: 900,
              lineHeight: '58px',
              marginBottom: 28,
            }}
          >
            Integrations
          </h2>
          <div className="flex items-center justify-center gap-3 reveal reveal-d1" style={{ marginBottom: 28 }}>
            {integrationTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 600,
                  border: '2px solid',
                  borderColor: activeTab === tab ? '#000' : 'rgba(0,0,0,0.15)',
                  backgroundColor: activeTab === tab ? '#000' : 'transparent',
                  color: activeTab === tab ? '#fff' : '#000',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 reveal reveal-d2" style={{ maxWidth: 900, margin: '0 auto' }}>
            {getFilteredIntegrations().map((item) => (
              <div
                key={item.name}
                style={{
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 12,
                }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="wood-bg reveal" style={{ padding: '60px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center reveal">
            <div>
              <svg width="48" height="36" viewBox="0 0 48 36" fill="none" style={{ marginBottom: 28 }}>
                <path d="M0 36V20.4C0 14.4 1.4 9.6 4.2 6C7 2.4 11.4 0.2 17.4 0L19.8 7.2C16.2 7.8 13.6 9.2 12 11.4C10.4 13.6 9.6 16 9.6 18.6H18V36H0ZM28.2 36V20.4C28.2 14.4 29.6 9.6 32.4 6C35.2 2.4 39.6 0.2 45.6 0L48 7.2C44.4 7.8 41.8 9.2 40.2 11.4C38.6 13.6 37.8 16 37.8 18.6H46.2V36H28.2Z" fill="#FE3F00" fillOpacity="0.15" />
              </svg>
              <blockquote
                className="ff-heading text-charcoal"
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  lineHeight: '40px',
                  marginBottom: 28,
                  maxWidth: 640,
                }}
              >
                Later makes dealing with the world of influencers as turnkey as it can be. The platform is intuitive, the team is responsive, and the results speak for themselves.
              </blockquote>
              <p className="text-charcoal" style={{ fontSize: 16, fontWeight: 700 }}>
                Drew McGowan
              </p>
              <p className="text-charcoal/60" style={{ fontSize: 15 }}>
                Clif Bar & Company
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png"
                alt="Clif Bar & Company"
                style={{ width: 200, height: 200, objectFit: 'contain', borderRadius: 16, backgroundColor: '#fff', padding: 32 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="max-w-[800px] mx-auto">
            <h2
              className="ff-heading text-charcoal text-center reveal"
              style={{
                fontSize: 52,
                fontWeight: 900,
                lineHeight: '58px',
                marginBottom: 32,
              }}
            >
              Frequently asked questions
            </h2>
            <div className="reveal reveal-d1">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      padding: '24px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      className="ff-heading text-charcoal"
                      style={{ fontSize: 20, fontWeight: 700, lineHeight: '28px' }}
                    >
                      {item.q}
                    </span>
                    <ChevronIcon open={openFaq === i} />
                  </button>
                  <div
                    style={{
                      maxHeight: openFaq === i ? 200 : 0,
                      opacity: openFaq === i ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, opacity 0.3s ease',
                    }}
                  >
                    <p
                      className="text-charcoal/70"
                      style={{ fontSize: 17, lineHeight: '28px', paddingBottom: 24 }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="wood-bg reveal" style={{ padding: '60px 0' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="max-w-[600px] mx-auto">
            <h2
              className="ff-heading text-charcoal text-center reveal"
              style={{
                fontSize: 44,
                fontWeight: 900,
                lineHeight: '50px',
                marginBottom: 24,
              }}
            >
              Interested in becoming a Later partner?
            </h2>
            <form
              className="reveal reveal-d1"
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <div>
                <label
                  className="text-charcoal"
                  style={{ fontSize: 14, fontWeight: 600, display: 'block', marginBottom: 6 }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 16,
                    border: '2px solid rgba(0,0,0,0.12)',
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#FE3F00' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)' }}
                />
              </div>
              <div>
                <label
                  className="text-charcoal"
                  style={{ fontSize: 14, fontWeight: 600, display: 'block', marginBottom: 6 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 16,
                    border: '2px solid rgba(0,0,0,0.12)',
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#FE3F00' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)' }}
                />
              </div>
              <div>
                <label
                  className="text-charcoal"
                  style={{ fontSize: 14, fontWeight: 600, display: 'block', marginBottom: 6 }}
                >
                  Partner Type
                </label>
                <select
                  value={formData.partnerType}
                  onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 16,
                    border: '2px solid rgba(0,0,0,0.12)',
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#FE3F00' }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.12)' }}
                >
                  <option value="">Select partner type</option>
                  <option value="social-platform">Social Media Platform</option>
                  <option value="referral-reseller">Referral & Reseller</option>
                  <option value="technology">Technology Integration</option>
                  <option value="agency">Agency Holding Company</option>
                  <option value="creator">Creator, Influencer, or Affiliate</option>
                  <option value="nonprofit">Non-Profit</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ fontSize: 18, marginTop: 8, width: '100%', justifyContent: 'center' }}
              >
                Apply now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
