'use client'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
// core Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto md:px-20">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='h-96 w-50 bg-slate-400'>Slide 111</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-96 w-50 bg-blue'>Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-96 w-50 bg-orange'>Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-96 w-50 bg-green'>Slide 4</div>
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  )
}
