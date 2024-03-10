import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
//import 'swiper/swiper-bundle.min.css';
import "swiper/css";
import Banner from "./Banner";
import { ButtonCarousel } from "./ButtonCarousel";
import "./carousel.css";



SwiperCore.use([Navigation, Pagination]);
type CarouselProps = {
  banners: { src: string; alt: string }[];
};

export default function Carousel({ banners }: CarouselProps) {
  
  return (

    <div className=" w-full " style={{ maxHeight: 400 }}>
      <div>
        <Swiper
          centeredSlides={true}
          pagination
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {banners.map((banner) => (
            <div className="w-full" key={banner.src}>
              <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 rounded-r-lg bg-white lg:h-20 sm:h-10  z-50 ">
                <span className="flex justify-center items-center h-full">
                  {" "}
                  <ButtonCarousel direction={0} />{" "}
                </span>
              </div>
              <SwiperSlide>
                <Banner src={banner.src} alt={banner.alt} />
              </SwiperSlide>
              <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 rounded-l-lg bg-white lg:h-20 sm:h-10 z-50">
                <span className="flex justify-center items-center h-full">
                  {" "}
                  <ButtonCarousel direction={1} />{" "}
                </span>
              </div>
            </div>
          ))}

          <div className="w-full justify-between ">
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 rounded-r-lg bg-white lg:h-20 sm:h-10  z-50 ">
              <span className="flex justify-center items-center h-full">
                {" "}
                <ButtonCarousel direction={0} />{" "}
              </span>
            </div>

            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 rounded-l-lg bg-white lg:h-20 sm:h-10 z-50">
              <span className="flex justify-center items-center h-full">
                {" "}
                <ButtonCarousel direction={1} />{" "}
              </span>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
