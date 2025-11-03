import { useState, useRef } from 'react'
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

const CardInfo = ({
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
}) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const shareUrl = window.location.href

  const handleShare = (platform) => {
    const text = `Siz bilan "${title}" elonini ulashmoqchiman: ${shareUrl}`
    const encodedUrl = encodeURIComponent(shareUrl)
    const links = {
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`,
    }
    window.open(links[platform], '_blank')
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* LEFT & CENTER SIDE */}
        <div className="space-y-6 lg:col-span-2">
          {/* IMAGE CARD */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-col gap-2 md:flex-row">
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="relative flex gap-2 md:w-1/4 md:flex-col md:items-center">
                  <Swiper
                    direction="vertical"
                    slidesPerView={3}
                    spaceBetween={10}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current
                      swiper.params.navigation.nextEl = nextRef.current
                      swiper.navigation.init()
                      swiper.navigation.update()
                    }}
                    modules={[Navigation]}
                    className="h-72"
                  >
                    {images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          onClick={() => setActiveImage(img)}
                          className={`h-24 w-24 cursor-pointer rounded-lg border object-cover transition ${
                            activeImage === img
                              ? 'border-[#06b18f] ring-2 ring-[#06b18f]'
                              : 'border-gray-200 hover:opacity-80'
                          }`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {images.length > 3 && (
                    <>
                      <button
                        ref={prevRef}
                        className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-[#06b18f] bg-white p-1 text-[#06b18f] transition hover:bg-[#06b18f] hover:text-white"
                      >
                        ↑
                      </button>
                      <button
                        ref={nextRef}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#06b18f] bg-white p-1 text-[#06b18f] transition hover:bg-[#06b18f] hover:text-white"
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
                  src={activeImage || images[0]}
                  alt={title}
                  onClick={() => setIsFullscreen(true)}
                  className="h-80 w-full cursor-zoom-in rounded-lg object-cover shadow-sm sm:h-96"
                />
                {isPremium && (
                  <span className="absolute top-3 left-3 rounded-md bg-yellow-400/90 px-3 py-1 text-xs font-semibold text-gray-900">
                    Premium
                  </span>
                )}
                <button className="absolute top-3 right-3 rounded-full bg-white/80 p-2 shadow hover:bg-white">
                  <AiOutlineHeart className="h-6 w-6 text-gray-600 transition hover:text-red-500" />
                </button>
              </div>
            </div>
          </div>

          {/* DESCRIPTION CARD */}
          <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Title & Price */}
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{title}</h1>
              <span className="text-xl font-bold whitespace-nowrap text-[#06b18f]">
                {price ? `${price.toLocaleString()} ${currency}` : 'Narx kelishiladi'}
              </span>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-2 border-b pb-3 text-sm text-gray-500">
              <span className="capitalize">{condition}</span>
              <span>•</span>
              <span>{location}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <AiFillEye className="h-4 w-4" /> {views} marta ko‘rilgan
              </div>
              {created && (
                <>
                  <span>•</span>
                  <span>
                    {new Date(created).toLocaleDateString('uz-UZ', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-[#06b18f]">
              {[1, 2, 3, 4, 5].map((star) =>
                star <= rating ? (
                  <AiFillStar key={star} className="h-5 w-5" />
                ) : (
                  <AiOutlineStar key={star} className="h-5 w-5" />
                )
              )}
              <span className="ml-2 text-sm text-gray-500">{rating}/5</span>
            </div>

            {/* Description */}
            <div className="border-t pt-4">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">Tavsif</h2>
              <p className="leading-relaxed text-gray-700">{description}</p>
            </div>

            {/* Contact info */}
            {contacts && (
              <div className="border-t pt-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Aloqa uchun</h3>
                <a
                  href={`tel:${contacts}`}
                  className="inline-flex items-center gap-2 text-base font-medium text-[#06b18f] hover:underline"
                >
                  📞 {contacts}
                </a>
              </div>
            )}

            {/* Share section */}
            <div className="border-t pt-5">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Ulashish</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: FaTelegramPlane, name: 'Telegram', key: 'telegram' },
                  { icon: FaFacebookF, name: 'Facebook', key: 'facebook' },
                  { icon: FaTwitter, name: 'Twitter', key: 'twitter' },
                ].map(({ icon: Icon, name, key }) => (
                  <button
                    key={key}
                    onClick={() => handleShare(key)}
                    className="flex items-center gap-2 rounded-md bg-[#06b18f] px-4 py-2 font-medium text-white transition hover:opacity-90"
                  >
                    <Icon className="h-4 w-4" /> {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE PANEL */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">E’lon ma’lumotlari</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <b>Holati:</b> {condition}
              </li>
              <li>
                <b>Hudud:</b> {location}
              </li>
              <li>
                <b>Ko‘rishlar:</b> {views}
              </li>
              <li>
                <b>Joylashtirilgan:</b> {new Date(created).toLocaleDateString('uz-UZ')}
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">O‘xshash e’lonlar</h3>
            <p className="text-sm text-gray-500">Bu joyda o‘xshash e’lonlar joylashtiriladi.</p>
          </div>
        </aside>
      </div>

      {/* FULLSCREEN IMAGE VIEW */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            className="absolute top-5 right-5 text-3xl text-white hover:text-gray-300"
            onClick={() => setIsFullscreen(false)}
          >
            <AiOutlineClose />
          </button>

          <Swiper
            initialSlide={images.indexOf(activeImage)}
            navigation
            keyboard
            modules={[Navigation, Keyboard]}
            className="max-h-[90vh] max-w-[90vw]"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="max-h-[90vh] w-full rounded-lg object-contain"
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
