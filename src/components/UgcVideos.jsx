const videoUrls = [
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+1.mp4',
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+2.mp4',
  'https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+UGC+Row+3.mp4',
]

export default function UgcVideos() {
  return (
    <section className="bg-gridglow overflow-hidden py-12 lg:py-20">
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
            <div className="absolute inset-0 bg-gridglow/20" />
          </div>
        ))}
      </div>
    </section>
  )
}
