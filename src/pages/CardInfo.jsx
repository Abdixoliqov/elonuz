import { useState, useRef, useEffect } from 'react'
import {
  AiOutlineHeart,
  AiFillEye,
  AiFillStar,
  AiOutlineStar,
  AiOutlineClose,
} from 'react-icons/ai'
import { FaTelegramPlane, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function CardInfo({
  images = [],
  title,
  price,
  currency,
  description,
  location,
  condition,
  isPremium,
  views,
  contacts,
  created,
  rating = 4,
}) {
  const [mainImage, setMainImage] = useState(images[0])
  const [fullscreen, setFullscreen] = useState(false)
  const [activeImage, setActiveImage] = useState(mainImage)
  const shareUrl = window.location.href

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const handleShare = (platform) => {
    const text = `Siz bilan "${title}" elonini ulashmoqchiman: ${shareUrl}`
    if (platform === 'telegram')
      window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${text}`)
    else if (platform === 'facebook')
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)
    else if (platform === 'twitter')
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${text}`)
  }

  const handleImageClick = (img) => {
    setActiveImage(img)
    setFullscreen(true)
  }

  useEffect(() => {
    // DOM tugmalar joylashganini kutish uchun kichik delay
    const timer = setTimeout(() => {}, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container my-8 px-3">
      <div className="bg-base-100 mx-auto max-w-5xl rounded-xl border border-gray-200 p-5 sm:p-8">
        {/* Image Gallery Section */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Thumbnail Swiper with buttons */}
          {images.length > 1 && (
            <div className="md:w-1/4 flex md:flex-col gap-3 relative items-center">
              {images.length > 3 ? (
                <Swiper
                  direction="vertical"
                  slidesPerView={3}
                  spaceBetween={10}
                  onInit={(swiper) => {
                    // Tugmalarni init paytida ulash
                    swiper.params.navigation.prevEl = prevRef.current
                    swiper.params.navigation.nextEl = nextRef.current
                    swiper.navigation.init()
                    swiper.navigation.update()
                  }}
                  modules={[Navigation]}
                  className="h-80"
                >
                  {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        onClick={() => setMainImage(img)}
                        className={`h-24 w-24 cursor-pointer rounded-md border object-cover transition hover:opacity-80 ${
                          mainImage === img ? 'border-[#06b18f]' : 'border-gray-200'
                        }`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="flex md:flex-col gap-3">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      onClick={() => setMainImage(img)}
                      className={`h-24 w-24 cursor-pointer rounded-md border object-cover transition hover:opacity-80 ${
                        mainImage === img ? 'border-[#06b18f]' : 'border-gray-200'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Navigation buttons */}
              {images.length > 3 && (
                <>
                  <button
                    ref={prevRef}
                    className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white p-1 border border-[#06b18f] text-[#06b18f] hover:bg-[#06b18f] hover:text-white transition"
                  >
                    ↑
                  </button>
                  <button
                    ref={nextRef}
                    className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white p-1 border border-[#06b18f] text-[#06b18f] hover:bg-[#06b18f] hover:text-white transition"
                  >
                    ↓
                  </button>
                </>
              )}
            </div>
          )}

          {/* Main Image */}
          <div className="relative flex-1">
            <img
              src={
                mainImage ||
                images[0] ||
                'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
              }
              alt={title}
              onClick={() => handleImageClick(mainImage)}
              className="h-80 w-full rounded-lg object-cover sm:h-96 cursor-pointer"
            />
            {isPremium && (
              <div className="absolute top-3 left-3 rounded-md bg-yellow-400/90 px-3 py-1 text-xs font-semibold text-gray-900">
                Premium
              </div>
            )}
            <button className="absolute top-3 right-3 rounded-full bg-white/80 p-2 hover:bg-white">
              <AiOutlineHeart className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-5">
          {/* Title & Price */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
            <span className="text-xl font-bold text-[#06b18f]">
              {price ? `${price.toLocaleString()} ${currency}` : 'Narx kelishiladi'}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{condition}</span>
            <span>•</span>
            <span>{location}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <AiFillEye className="h-4 w-4" />
              {views} marta ko‘rilgan
            </div>
            {created && (
              <>
                <span>•</span>
                <span>
                  Joylashtirilgan:{' '}
                  {new Date(created).toLocaleDateString('uz-UZ', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </>
            )}
          </div>

          {/* Reyting */}
          <div className="flex items-center gap-1 text-[#06b18f]">
            {[1, 2, 3, 4, 5].map((star) =>
              star <= rating ? (
                <AiFillStar key={star} className="h-5 w-5" />
              ) : (
                <AiOutlineStar key={star} className="h-5 w-5" />
              ),
            )}
            <span className="ml-2 text-sm text-gray-500">{rating}/5</span>
          </div>

          {/* Description */}
          <div>
            <h2 className="mb-2 text-lg font-semibold">Tavsif</h2>
            <p className="leading-relaxed text-gray-700">{description}</p>
          </div>

          {/* Contacts */}
          {contacts && (
            <div className="border-t pt-4">
              <h3 className="mb-1 text-lg font-semibold">Aloqa uchun</h3>
              <a href={`tel:${contacts}`} className="font-medium text-[#06b18f] hover:underline">
                📞 {contacts}
              </a>
            </div>
          )}

          {/* Share Buttons */}
          <div className="border-t pt-5">
            <h3 className="mb-3 text-lg font-semibold">Ulashish</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleShare('telegram')}
                className="rounded-md bg-[#06b18f] px-4 py-2 text-white hover:opacity-90"
              >
                <FaTelegramPlane className="inline mr-2" />
                Telegram
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="rounded-md bg-[#06b18f] px-4 py-2 text-white hover:opacity-90"
              >
                <FaFacebookF className="inline mr-2" />
                Facebook
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="rounded-md bg-[#06b18f] px-4 py-2 text-white hover:opacity-90"
              >
                <FaTwitter className="inline mr-2" />
                Twitter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setFullscreen(false)}
          >
            <AiOutlineClose />
          </button>

          <Swiper
            initialSlide={images.indexOf(activeImage)}
            navigation
            keyboard
            modules={[Navigation, Keyboard]}
            className="max-w-[90vw] max-h-[90vh]"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Image ${idx + 1}`}
                  className="max-h-[90vh] w-full object-contain rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  )
}

export default CardInfo
