function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const features = [
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2IClzc3f452JTB6lGVDAph/574f132843545552dcde63e89991a2a9/fire.png',
    title: 'Work with top brands',
    desc: 'Partner with brands and create content that you (and your followers) love.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/5FBkTU1DLiq8H0RrBakPG6/066c843786054b29f7a47e544d9e8b69/affiliate.png',
    title: 'Link & monetize posts',
    desc: "Increase your content's earning potential with affiliate links.",
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2EKoX5LaF73Msz7i5MEm1l/d1d9f298f2e60c58b08a8881f4eda837/tools.png',
    title: 'Unlock creator tools',
    desc: 'Grow your following with social media marketing tools that save you time.',
  },
]

const brandLogos = [
  { name: 'Kraft', src: 'https://later.com/images/temp/logos/kraft.png' },
  { name: 'Reebok', src: 'https://later.com/images/temp/logos/reebok.png' },
  { name: 'Crumbl', src: 'https://later.com/images/temp/logos/crumbl.png' },
  { name: 'Zumiez', src: 'https://later.com/images/temp/logos/zumiez.png' },
  { name: 'American Girl', src: 'https://later.com/images/temp/logos/american-girl.png' },
  { name: 'Pollo Loco', src: 'https://later.com/images/temp/logos/pollo-loco.png' },
  { name: 'American Greetings', src: 'https://later.com/images/temp/logos/american-greetings.png' },
  { name: 'Chobani', src: 'https://later.com/images/temp/logos/chobani.png' },
  { name: 'Mackenzie Childs', src: 'https://later.com/images/temp/logos/mackenzie-childs.png' },
]

const steps = [
  {
    num: '01',
    title: 'Create a Later Social account',
    desc: 'Sign up for free and get all the best social tools included, like scheduling and Link in Bio.',
  },
  {
    num: '02',
    title: 'Join our creator marketplace',
    desc: "We'll auto-populate your creator profile, then customize it however you like.",
  },
  {
    num: '03',
    title: 'Start working with top brands',
    desc: 'Get discovered and collaborate with brands or search for and apply directly to campaigns.',
  },
]

const careerFeatures = [
  {
    title: 'Manage your campaigns',
    desc: 'Check your application status, key deliverables, and deadlines across multiple campaigns and social channels.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1Tvn7BbgutoTepkXQ4tgUI/a78854b05f2b6307fb8c02a91b98468c/manage-multiple-campaigns-at-once.png?w=1136&h=960&q=70&fm=png',
    cta: { label: 'Join today', href: '#' },
  },
  {
    title: 'Join Mavely',
    desc: "Mavely's intuitive platform lets you create affiliate links to share products your audience loves. When they shop, you earn.",
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1NdOC1hoJXZ6MQbB0iw9Mw/a58e68b2eb0256064c040dd7452d9184/manage-your-brand-campaigns.png?w=1136&h=960&q=70&fm=png',
    cta: { label: 'Earn with Mavely', href: 'https://www.joinmavely.com/' },
  },
  {
    title: 'Get more clicks',
    desc: 'Use Link in Bio to drive traffic from Instagram & TikTok to anywhere you want, like your online shop, or YouTube.',
    img: 'https://later.com/images/temp/get-more-clicks-with-later.jpg',
    cta: null,
  },
]

const signUpFeatures = [
  { label: 'Creator marketplace listing', icon: 'https://later.com/images/icons/icon-database.png' },
  { label: 'Custom affiliate links', icon: 'https://later.com/images/icons/icon-affiliate-links.png' },
  { label: 'Link in Bio page', icon: 'https://later.com/images/icons/icon-linkinbio.png' },
  { label: 'Personalized media kit', icon: 'https://later.com/images/icons/icon-media-kit.png' },
  { label: 'Social Media Scheduling', icon: 'https://later.com/images/icons/icon-auto-publish.png' },
  { label: 'Hashtag suggestions', icon: 'https://later.com/images/icons/icon-hashtag.png' },
]

const creators = [
  { handle: '@luda_', name: 'Ludovick Love', img: 'https://later.com/images/temp/profiles/luda.png', platform1: 'Instagram', count1: '162.5K', platform2: 'Pinterest', count2: '17.3K' },
  { handle: '@shadelleg', name: 'Shadelle Goodson', img: 'https://later.com/images/temp/profiles/shadelleg.png', platform1: 'Instagram', count1: '13.7K', platform2: 'YouTube', count2: '26.9K' },
  { handle: '@ayokwam', name: 'Kwame Appiah', img: 'https://later.com/images/temp/profiles/ayokwam.jpg', platform1: 'Instagram', count1: '461K', platform2: 'TikTok', count2: '24.6K' },
  { handle: '@jenickalopez', name: 'Jenicka Lopez', img: 'https://later.com/images/temp/profiles/jenickalopez.jpg', platform1: 'Instagram', count1: '1.3M', platform2: 'TikTok', count2: '1.7M' },
  { handle: '@martinebeerman', name: 'Martine Beerman', img: 'https://later.com/images/temp/profiles/martinebeerman.png', platform1: 'Instagram', count1: '129K', platform2: 'X', count2: '649' },
  { handle: '@ayelow', name: 'David Contreras', img: 'https://later.com/images/temp/profiles/ayelow.jpg', platform1: 'Instagram', count1: '16.6K', platform2: 'TikTok', count2: '5.3K' },
]

const faqs = [
  {
    q: 'What is a creator?',
    a: 'A creator is anyone who creates and shares digital content on social media. Creators typically work towards building an online community, monetizing their skillset, or a mix of both.',
  },
  {
    q: 'How do I become a creator?',
    a: 'If you\'re interested in learning how to become a full-time content creator, Later has your back. We have a ton of great resources in our Later Blog to help you get started. Then simply sign up for Later and add your profile to our creator marketplace so you can get discovered and win more brand deals.',
  },
  {
    q: 'How do I partner with brands?',
    a: 'Later makes it easy for you to find campaigns that match your values and expectations. Take a look through available campaigns and apply to ones that you\'re interested in with your Later media kit that clearly outlines your experience, reach, and payment expectations.',
  },
  {
    q: 'How do brands choose influencers to work with?',
    a: 'Brands typically choose influencers by looking at their audience demographics, engagement rates, and content quality. Brands can search Later\'s marketplace for creators that match their target audience and marketing goals.',
  },
  {
    q: 'What is Later Link in Bio?',
    a: 'Later Link in Bio is a fully customizable mini web page built into your Instagram and TikTok profiles — making your content clickable and shoppable. Create a custom Link in Bio page, drop the link in your bio, and help followers discover more about you, your products, and your brand.',
  },
]

const blogPosts = [
  {
    title: "An Influencer's Guide to Working with Brands",
    img: 'https://images.ctfassets.net/nfpsrlop6sws/6XbyPEsCf6as9KnbHviHOv/a7ed84fe9a67cdd5f3836445262b6648/Dec15-An_Influencers_Guide_to_Working_with_Brands-Horizontal.png?w=920&h=800&q=80&fm=png',
    href: 'https://later.com/blog/work-with-brands/',
  },
  {
    title: 'How to Successfully Pitch to Brands',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/5gUUGFszsT8kmabLMexbWi/8cf79ba9aa4e65f172129c9836d0d431/Nov1-How_to_Successfully_Pitch_to_Brands-Horizontal.png?w=920&h=800&q=80&fm=png',
    href: 'https://later.com/blog/pitch-to-brands/',
  },
  {
    title: 'How 350+ Influencers & Creators Make Money',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/4oE0Ru63G82XIz0Zu1aPR1/6ad7bb91f3a6b94fc0043edc240e77d2/March26-Influencers___Creators_Share_How_They_Make_Money_in_2024-Horizontal.png?w=920&h=800&q=80&fm=png',
    href: 'https://later.com/blog/how-do-influencers-make-money/',
  },
]

const resources = [
  {
    title: 'Apply to Later Campaigns',
    desc: 'Search & find answers to your Later questions.',
    href: 'https://help-influence.later.com/hc/en-us/articles/20462323829783-Applying-to-Later-Influence-formerly-Mavrck-Campaigns-with-Later-Social',
  },
  {
    title: 'Creator Compensation Report',
    desc: 'Learn all about creator compensation and industry trends.',
    href: 'https://later.com/resources/report/creator-compensation/',
  },
  {
    title: 'How to Make Money as a Content Creator on Instagram',
    desc: 'Here are 3 easy ways to start making money as a content creator on Instagram and cash in on your content.',
    href: 'https://later.com/resources/videos/make-money-as-an-instagram-content-creator/',
  },
  {
    title: 'Guide to the Creator & Passion Economies',
    desc: 'Learn how content creators are evolving within the growing passion economy.',
    href: 'https://later.com/resources/guide/passion-economy-creators/',
  },
]

export default function InfluencerCreatorProgramPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter" style={{ padding: '0 40px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest mb-4" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}>LATER FOR CREATORS</p>
          <h1 className="mx-auto mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800 }}>
            Turn your influence into income with Later
          </h1>
          <p className="hero-enter-d1 mx-auto mb-8" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 700, color: '#333' }}>
            Connect with brands, manage campaigns, and earn more doing what you love. Monetize your content with Mavely or join our creator network and watch your creator career grow.
          </p>
          <div className="hero-enter-d2 flex gap-4 justify-center flex-wrap mb-8">
            <a href="https://www.joinmavely.com/" className="btn-primary" target="_blank" rel="noopener noreferrer">Earn with Mavely <ArrowIcon /></a>
            <a href="#creator-network" className="btn-outline">Join creator network <ArrowIcon /></a>
          </div>
          <div className="hero-enter-d3 mx-auto" style={{ maxWidth: 900 }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/63iVbE514TCTTKuBvbgpiB/55d1a3d5a4150a16ddb3cad12f6a0ef3/hero-graphic.png?w=1608&h=964&q=80&fm=png"
              alt="Later for Creators"
              className="w-full block"
            />
          </div>
        </div>
      </section>

      {/* Find & land brand collaborations */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <h2 className="mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
            Find &amp; land brand collaborations with Later
          </h2>
          <p className="mb-10" style={{ fontSize: 18, color: '#555' }}>Later makes it easy to stand out and earn more.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} text-center`}>
                <img src={f.icon} alt="" className="mx-auto mb-4" style={{ width: 48, height: 48 }} />
                <h3 className="mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get discovered */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center" style={{ padding: '0 40px' }}>
          <img
            src="https://later.com/images/temp/get-discovered-by-your-favorite-brands-with-later.jpg"
            alt="Get discovered by your favorite brands"
            className="w-full rounded-lg"
          />
          <div>
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
              Get discovered by your favorite brands
            </h2>
            <p className="mb-8" style={{ fontSize: 18, color: '#555' }}>Join Later's community for free.</p>
            <div className="flex flex-wrap gap-5 items-center">
              {brandLogos.map((logo) => (
                <img key={logo.name} src={logo.src} alt={logo.name} style={{ height: 28, objectFit: 'contain', opacity: 0.7 }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} text-center`}>
                <span className="block mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, color: '#FE3F00' }}>{s.num}</span>
                <h3 className="mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700 }}>{s.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take your creator career to new heights */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="text-center mb-12 reveal">
            <p className="text-charcoal/60 uppercase tracking-widest mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2 }}>CREATE, SHARE, EARN</p>
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
              Take your creator career to new heights
            </h2>
            <p className="mx-auto" style={{ fontSize: 18, color: '#555', maxWidth: 700 }}>
              Join Later for free to access the creator marketplace, brand collaborations, affiliate links, scheduling, and Link in Bio.
            </p>
          </div>
          {careerFeatures.map((f, i) => (
            <div
              key={i}
              className={`reveal grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i < careerFeatures.length - 1 ? 'mb-16' : ''}`}
              style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}
            >
              <img src={f.img} alt={f.title} className="w-full rounded-lg" style={{ direction: 'ltr' }} />
              <div style={{ direction: 'ltr' }}>
                <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15 }}>{f.title}</h3>
                <p className="mb-6" style={{ fontSize: 17, color: '#555', lineHeight: 1.6 }}>{f.desc}</p>
                {f.cta && (
                  <a href={f.cta.href} className="btn-primary" target={f.cta.href.startsWith('http') ? '_blank' : undefined} rel={f.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {f.cta.label} <ArrowIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sign up section */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2 className="text-center mb-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
            Sign up for Later for free
          </h2>
          <p className="text-center mb-4" style={{ fontSize: 18, color: '#555' }}>Connect with brands, manage collabs, and earn more with Later.</p>
          <p className="text-center mb-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700 }}>Included features</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {signUpFeatures.map((feat) => (
              <div key={feat.label} className="flex flex-col items-center text-center gap-3">
                <img src={feat.icon} alt="" style={{ width: 36, height: 36 }} />
                <span style={{ fontSize: 15, color: '#333' }}>{feat.label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div className="bg-offline rounded-xl p-10 text-center">
              <p className="mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 900 }}>Join the creator marketplace</p>
              <p className="mb-6" style={{ fontSize: 16, color: '#555' }}>Sign up for Later and join for free!</p>
              <ul className="text-left inline-block mb-6" style={{ fontSize: 15 }}>
                <li className="flex items-center gap-2 mb-2">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#FE3F00" opacity="0.12" /><path d="M6 10l3 3 5-5" stroke="#FE3F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Access to creator marketplace
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#FE3F00" opacity="0.12" /><path d="M6 10l3 3 5-5" stroke="#FE3F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Custom affiliate links
                </li>
                <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#FE3F00" opacity="0.12" /><path d="M6 10l3 3 5-5" stroke="#FE3F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Link in Bio page
                </li>
              </ul>
              <div>
                <a href="/pricing" className="btn-primary">Join now <ArrowIcon /></a>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://later.com/images/temp/phone-outline.png"
                alt="Later Link in Bio"
                className="mx-auto"
                style={{ maxWidth: 280, width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creator community */}
      <section id="creator-network" className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2 className="text-center mb-10 reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
            Join the creator community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((c, i) => (
              <div key={i} className={`reveal reveal-d${(i % 3) + 1} bg-white rounded-xl overflow-hidden`}>
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-bold mb-0.5" style={{ fontSize: 15 }}>{c.handle}</p>
                  <p className="mb-2" style={{ fontSize: 14, color: '#333' }}>{c.name}</p>
                  <div className="flex items-center gap-4" style={{ fontSize: 13, color: '#777' }}>
                    <span>{c.platform1} {c.count1}</span>
                    <span>{c.platform2} {c.count2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-center mb-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="reveal group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer list-none flex justify-between items-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700 }}>
                  {faq.q}
                  <svg className="ml-4 shrink-0 transition-transform group-open:rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="mt-3" style={{ fontSize: 16, color: '#555', lineHeight: 1.6 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mx-auto mb-6">
            <path d="M0 32V18.3C0 6.1 7.4 0 18 0v8.6C12.2 9.6 9.4 13 9 18h9v14H0zm22 0V18.3C22 6.1 29.4 0 40 0v8.6c-5.8 1-8.6 4.4-9 8.4h9v14H22z" fill="#FE3F00" opacity="0.15" />
          </svg>
          <p className="mx-auto mb-8" style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, lineHeight: 1.4, maxWidth: 640 }}>
            "I got my first paid brand using Later! It was easy to see what opportunities were available and to apply to any campaign. I continue to use Later and hope to snag more brand deals!"
          </p>
          <img
            src="https://later.com/images/temp/thenoellanaomi-profile.png"
            alt="Noella"
            className="mx-auto mb-3 rounded-full object-cover"
            style={{ width: 56, height: 56 }}
          />
          <p className="font-bold" style={{ fontSize: 15 }}>@thenoellanaomi</p>
          <p style={{ fontSize: 14, color: '#333' }}>Noella</p>
          <p className="mt-1" style={{ fontSize: 13, color: '#777' }}>13.4K Instagram &middot; 1.6K Pinterest</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span style={{ fontSize: 13, color: '#555' }}>Brand partnerships:</span>
            <img src="https://later.com/images/temp/talleyvineyards.svg" alt="Talley Vineyards" style={{ height: 24 }} />
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2 className="text-center mb-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
            Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <a key={i} href={post.href} target="_blank" rel="noopener noreferrer" className={`reveal reveal-d${i + 1} block rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, lineHeight: 1.3 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: '#777' }}>Blog Post</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2 className="text-center mb-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((r, i) => (
              <div key={i} className={`reveal reveal-d${(i % 2) + 1} bg-white rounded-xl p-6`}>
                <h3 className="mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700 }}>{r.title}</h3>
                <p className="mb-4" style={{ fontSize: 15, color: '#555', lineHeight: 1.5 }}>{r.desc}</p>
                <a href={r.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: '#FE3F00', fontWeight: 600, textDecoration: 'none' }}>
                  Read More <ArrowIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="reveal text-center" style={{ padding: '70px 0' }}>
        <div className="max-w-[800px] mx-auto">
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15 }}>
            Earn more with Later for creators
          </h2>
          <p className="mb-8" style={{ fontSize: 18, color: '#555' }}>Get discovered by brands and earn more doing what you love.</p>
          <a href="/pricing" className="btn-primary">Join today <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
