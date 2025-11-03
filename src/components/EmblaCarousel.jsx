import React, { useCallback } from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

// 🔹 Kategoriya ma’lumotlari (obyektlar)
const categories = [
  { id: 1, name: 'Texnika', image: 'category.png', color: 'bg-amber-200' },
  { id: 2, name: 'Ko‘chmas mulk', image: '1.png', color: 'bg-green-200' },
  { id: 3, name: 'Transport', image: '2.png', color: 'bg-yellow-200' },
  { id: 4, name: 'Ish e’lonlari', image: '3.png', color: 'bg-slate-200' },
  { id: 5, name: 'Xizmatlar', image: '4.png', color: 'bg-blue-200' },
  { id: 6, name: 'Hayvonlar', image: '3.png', color: 'bg-amber-200' },
  { id: 7, name: 'Sport', image: '1.png', color: 'bg-green-200' },
  { id: 7, name: 'Sport', image: '1.png', color: 'bg-green-200' },
  { id: 8, name: 'Boshqalar', image: '2.png', color: 'bg-gray-200' }
]

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      align: 'start',
      slidesToScroll: 1
    },
    [Autoplay({ delay: 4000 })]
  )

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop
    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="max-w-7xl mx-auto px-4 my-10">
      <h2 className="text-center font-bold text-xl md:text-2xl xl:text-3xl mb-6">
        Kategoriyalar
      </h2>

      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex-[0_0_12.5%] min-w-0 pl-4 cursor-pointer"
            >
              <div
                className={`flex flex-col items-center  rounded-full p-2 hover:scale-105 transition-transform duration-200`}
              >
                <div className={`w-[100px] h-[100px] rounded-full overflow-hidden bg- ${cat.color} shadow-md flex items-center justify-center`}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="mt-3 text-center text-sm font-semibold text-gray-800">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls
      <div className="flex justify-center gap-3 mt-6">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div> */}
    </section>
  )
}

export default EmblaCarousel
