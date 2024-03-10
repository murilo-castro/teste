import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useSwiper } from 'swiper/react';

interface ButtonProps {
  direction: number; //0 - Left ; 1 - Right
}

export function ButtonCarousel({ direction }: ButtonProps) {
  const swiper = useSwiper();
  return (
    <>
      {
        (direction == 1) ?
          (<button className="" onClick={() => swiper.slideNext()}><CaretRight size={24} /></button>) :
          (<button className="" onClick={() => swiper.slidePrev()}><CaretLeft size={24} /></button>)
      }

    </>
  )
}
