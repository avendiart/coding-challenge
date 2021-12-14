import { Children, PropsWithChildren, useEffect, useState } from 'react'
import Swiper from 'swiper'
import 'swiper/css'

export const Slider = ({
  size,
  children,
}: PropsWithChildren<{
  size: 's' | 'm' | 'l'
}>) => {
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null)
  const [swiper, setSwiper] = useState<Swiper | null>(null)

  useEffect(() => {
    if (!swiper && wrapper) {
      setSwiper(
        new Swiper(wrapper, {
          slidesPerView: 'auto',
          spaceBetween: 16,
        }),
      )
    }
  }, [swiper, wrapper])

  useEffect(() => {
    if (swiper) {
      swiper.update()
    }
  }, [children, swiper])

  return (
    <div ref={setWrapper} className="swiper">
      <div className="swiper-wrapper">
        {Children.map(children, (child) => (
          <div
            className="swiper-slide"
            style={{
              maxWidth: {
                s: '256px',
                m: '320px',
                l: '480px',
              }[size],
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
