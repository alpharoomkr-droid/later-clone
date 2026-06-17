const videoUrls = [
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+1.mp4',
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+2.mp4',
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+3.mp4',
]

export default function UgcVideos() {
  return (
    <section className="overflow-hidden" style={{ padding: '70px 0' }}>
      <div className="max-w-[1440px] mx-auto mb-6 reveal" style={{ padding: '0 40px' }}>
        <p className="text-charcoal/60" style={{ fontSize: 16, lineHeight: '24px' }}>
          A showcase of creator-produced content from real influencer marketing campaigns powered by Later, featuring authentic creator stories.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {videoUrls.map((url, i) => (
          <div key={i} className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[200px] lg:h-[300px] object-cover"
            >
              <source src={url} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </section>
  )
}
