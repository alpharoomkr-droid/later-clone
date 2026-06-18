import { useState } from 'react'

const categories = [
  'All',
  'Social Media Managers',
  'Data & Research',
  'Marketing',
  'From Later',
  'Science of Influence',
  'Small Businesses',
  'Influencer Marketing',
  'Instagram',
  'TikTok',
]

const featuredPost = {
  category: 'Social Media Managers',
  readTime: '13 min read',
  title: 'What is a social media workflow? A step-by-step guide',
  description: 'Your guide to building a social media workflow that runs without chaos.',
  author: 'Talar Mazloumian',
  img: 'https://images.ctfassets.net/az3stxsro5h5/1iwjkFHuL627g6IJRi0KaX/b0bee65e70e2af77171f42e9b22e7ce5/-SEO-_What_is_a_social_media_workflow___and_how_to_build_one_that_actually_sticks_.jpg?w=800&h=800&fl=progressive&q=50&fm=jpg',
  slug: 'social-media-workflow',
}

const posts = [
  {
    category: 'Data & Research',
    readTime: '9 min read',
    title: "The 2026 World Cup creator gap: Why brands are planning big while creators still aren't",
    author: 'Sam Lauron',
    img: 'https://images.ctfassets.net/az3stxsro5h5/6YwPG36m1ieyxTVxf1MCCb/5bd5b06b28124b8745152f7a8bb4864e/World_Cup.png?w=400&h=356&q=50&fm=png',
    slug: 'the-2026-world-cup-creator-gap',
  },
  {
    category: 'Marketing',
    readTime: '10 min read',
    title: 'How to manage multiple social media accounts: a real-world playbook',
    author: 'Talar Mazloumian',
    img: 'https://images.ctfassets.net/az3stxsro5h5/1x1fG0i1tlIMDIdT0my9em/44d1b32cdc3029da9cc704d5fa7686c3/Douglas_J_case_study.png?w=400&h=356&q=50&fm=png',
    slug: 'how-to-manage-multiple-social-media-accounts',
  },
  {
    category: 'From Later',
    readTime: '11 min read',
    title: "A marketer's guide to Cannes Lions 2026",
    author: 'Alana Willis',
    img: 'https://images.ctfassets.net/az3stxsro5h5/37d1BNwze7gBUKuEwZP5E1/61b9597b0a2e964dd9e4d1b2c34a6c77/Cannes_Blog__1_.png?w=400&h=356&q=50&fm=png',
    slug: 'a-marketers-guide-to-cannes-lions',
  },
  {
    category: 'Science of Influence',
    readTime: '13 min read',
    title: 'Top takeaways from the strategists behind Teremana and Alo Yoga',
    author: 'Alana Willis',
    img: 'https://images.ctfassets.net/az3stxsro5h5/Cntzw9MooGb9m2j9KkS3W/c54a41d19dfe4481975859a0960233b9/Made_you_Look_webinar_blog_recap_%C3%A2___episode_2.png?w=400&h=356&q=50&fm=png',
    slug: 'top-takeaways-from-strategists-behind-teremana-alo-yoga',
  },
  {
    category: 'Small Businesses',
    readTime: '12 min read',
    title: 'Why your Instagram strategy stopped working (and what to do instead)',
    author: 'Talar Mazloumian',
    img: 'https://images.ctfassets.net/az3stxsro5h5/5fE8LKbAywdITj5wwuVpM4/443daecf3e5e5693d232f8052d03a100/How_the_Instagram_algorithm_actually_works_in_2026.png?w=400&h=356&q=50&fm=png',
    slug: 'instagram-algorithm-strategy',
  },
  {
    category: 'Science of Influence',
    readTime: '9 min read',
    title: 'Why brands need to treat creators like the true entrepreneurs they are',
    author: 'Alana Willis',
    img: 'https://images.ctfassets.net/az3stxsro5h5/1HmtbwlsL5OGX9X3Zvv0Xh/60793b46f6aad8982ebdb0ab437d3a26/How_brands_should_work_with_creators_as_small_business_owners.png?w=400&h=356&q=50&fm=png',
    slug: 'why-brands-need-to-treat-creators-like-the-true-entrepreneurs-they-are',
  },
  {
    category: 'Influencer Marketing',
    readTime: '3 min read',
    title: 'Your ultimate list of upcoming creator economy events (updated quarterly)',
    author: 'Alana Willis',
    img: 'https://images.ctfassets.net/az3stxsro5h5/5atbn73beJ8w2oWX0WdXJm/d6a4b4b90b294fa40c5da361a9b6317b/Blog-Thumbnail-5__1_.png?w=400&h=356&q=50&fm=png',
    slug: 'creator-economy-events-list',
  },
]

const ourPicks = [
  {
    category: 'Influencer Marketing',
    readTime: '13 min read',
    title: 'You built this with us',
    author: 'Tim Clarke',
    img: 'https://images.ctfassets.net/az3stxsro5h5/10MDZJsh0NC4ce3Bi8zqZp/7686985eb56445a65960aa5111f31540/G2Summer-Blog-Thumbnail.png?w=400&h=356&q=50&fm=png',
    slug: 'later-g2-summer-2026',
  },
  {
    category: 'From Later',
    readTime: '9 min read',
    title: 'AEO is a creator marketing opportunity most brands are missing',
    author: 'Cameron Miskho',
    img: 'https://images.ctfassets.net/az3stxsro5h5/1IqnnCwGfPAS3hEDo1701m/4ccecd8b661cbf1a56b9b1f1c26d856a/CreatorAEO-Blog-Thumbnail.png?w=400&h=356&q=50&fm=png',
    slug: 'creator-aeo-marketing',
  },
  {
    category: 'From Later',
    readTime: '9 min read',
    title: "Later, rebranded: The story behind our boldest move yet",
    author: 'Tim Clarke',
    img: 'https://images.ctfassets.net/az3stxsro5h5/2MiktfFVn9T1vd4dO4McAv/5f027fe22527cce6bcbfb0210d608c11/Later-Rebrand-Blog-Horizontal.png?w=400&h=348&q=50&fm=png',
    slug: 'later-rebrand-reveal',
  },
  {
    category: 'From Later',
    readTime: '6 min read',
    title: 'Introducing Later 360: One View for All Your Influencer Marketing Data',
    author: 'Alana Willis',
    img: 'https://images.ctfassets.net/az3stxsro5h5/2SJsrWGHYGyMXFH86Wv53i/cf6489b46cbbc051e87f7a8cb4f2b6c5/Later-360-Blog-Horizontal.png?w=400&h=348&q=50&fm=png',
    slug: 'later-360',
  },
  {
    category: 'Instagram',
    readTime: '44 min read',
    title: 'The top Instagram trends to try this week',
    author: 'Talar Mazloumian',
    img: 'https://images.ctfassets.net/az3stxsro5h5/FcMf0SwV2rUtI3VXvX83k/7f79c0a412711e74adb957114757f311/Blog-InstagramTrendReport-900x800.png?w=400&h=356&q=50&fm=png',
    slug: 'instagram-reels-trends',
  },
  {
    category: 'TikTok',
    readTime: '19 min read',
    title: 'The top TikTok trends to try this week',
    author: 'Talar Mazloumian',
    img: 'https://images.ctfassets.net/az3stxsro5h5/2M4oCcfyoa0v73ieL2oknc/6459c5e1429bbd8d0afc54ec7c6005f6/Blog-TikTokTrendReport-900x800.png?w=400&h=356&q=50&fm=png',
    slug: 'tiktok-trends',
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function BlogCard({ post, delay = 0 }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className={`reveal${delay ? ` reveal-d${delay}` : ''}`}
      style={{ textDecoration: 'none', color: 'inherit', borderRadius: 16, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ overflow: 'hidden', aspectRatio: '400/356' }}>
        <img
          src={post.img}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
        />
      </div>
      <div style={{ padding: '20px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#FE3F00', textTransform: 'uppercase', letterSpacing: 1 }}>{post.category}</span>
          <span style={{ fontSize: 12, color: '#999' }}>{post.readTime}</span>
        </div>
        <h3 className="ff-heading" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>{post.title}</h3>
        <p style={{ fontSize: 14, color: '#777', marginTop: 'auto' }}>{post.author}</p>
      </div>
    </a>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg reveal" style={{ padding: '80px 40px 64px' }}>
        <div className="max-w-3xl mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
            Blog
          </p>
          <h1 className="ff-heading" style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
            Your guide to smarter influencer & social marketing
          </h1>
          <p className="hero-enter-d1" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 700, margin: '0 auto', color: '#333' }}>
            Explore data-driven insights, expert tips, and resources to take your brand to the next level in the creator economy.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="reveal" style={{ padding: '64px 40px' }}>
        <div className="max-w-7xl mx-auto">
          <a
            href={`/blog/${featuredPost.slug}`}
            className="featured-card"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0,
              borderRadius: 16,
              overflow: 'hidden',
              background: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div style={{ padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#FE3F00', textTransform: 'uppercase', letterSpacing: 1.5 }}>{featuredPost.category}</span>
                <span style={{ fontSize: 12, color: '#999' }}>{featuredPost.readTime}</span>
              </div>
              <h2 className="ff-heading" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
                {featuredPost.title}
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: '#555', marginBottom: 24 }}>
                {featuredPost.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #FE3F00 0%, #FF7A4D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>
                  {featuredPost.author.charAt(0)}
                </div>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{featuredPost.author}</span>
              </div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <img
                src={featuredPost.img}
                alt={featuredPost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
              />
            </div>
          </a>
        </div>
      </section>

      {/* Category Filter */}
      <section className="reveal" style={{ padding: '0 40px 16px' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', borderBottom: '1px solid #e0dcd6', paddingBottom: 20 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  fontSize: 14,
                  fontWeight: activeCategory === cat ? 700 : 400,
                  fontFamily: 'var(--font-body)',
                  background: activeCategory === cat ? '#000' : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#333',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? '#000' : '#ccc',
                  borderRadius: 999,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="reveal" style={{ padding: '32px 40px 80px' }}>
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}>
              {filteredPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} delay={(i % 3) + 1} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <p style={{ fontSize: 18, color: '#777' }}>No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Our Picks */}
      <section className="wood-bg reveal" style={{ padding: '64px 40px 80px' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ marginBottom: 32 }}>
            <h2 className="ff-heading" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>Our Picks</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: '#555', maxWidth: 640 }}>
              A roundup of Later's top social media and influencer marketing tips to fuel your growth
            </p>
          </div>
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}>
            {ourPicks.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="purple-wood-bg reveal" style={{ padding: '64px 40px 80px' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="ff-heading" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.15, color: '#fff', marginBottom: 16 }}>
            Subscribe to Later's newsletter and get the latest news delivered straight to your inbox
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
            Tips, trends, and insights for social media managers and marketers — every week.
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            style={{ display: 'flex', gap: 12, maxWidth: 500, margin: '0 auto' }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, padding: '14px 18px', fontSize: 15, border: 'none', borderRadius: 6, outline: 'none' }}
            />
            <button
              type="submit"
              style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700, background: '#fff', color: '#7A63E8', border: 'none', borderRadius: 6, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="reveal" style={{ padding: '64px 40px 80px', textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="ff-heading" style={{ fontSize: 46, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Ready to grow your brand in the creator economy?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#555', marginBottom: 36, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Start planning, scheduling, and analyzing your social content with Later today.
          </p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>
            Get started
            <ArrowIcon />
          </a>
        </div>
      </section>
      <style>{`
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .featured-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
