const videoUrls = [
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+1.mp4',
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+2.mp4',
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+3.mp4',
]

export default function UgcVideos() {
  return (
    <section
      className="overflow-hidden reveal"
      style={{ height: '100vh', background: '#F8F2EA' }}
    >
      <div className="flex flex-col" style={{ height: '100%' }}>
        {videoUrls.map((url, i) => (
          <div key={i} className="relative" style={{ height: 'calc(100% / 3)' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={url} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </section>
  )
}
