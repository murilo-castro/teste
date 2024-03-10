import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Stars from "../stars/stars";
import { useEffect, useState } from "react";
import axios from "axios";
import SwiperCore, { Navigation, Pagination } from "swiper";
import noImg from "./../../../public/noimg.jpeg";

SwiperCore.use([Navigation, Pagination]);

export default function Shelf() {
  const [dataList, setDataList] = useState([]);
  const [onerror, setOnError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jzuwoup2ch.execute-api.us-east-2.amazonaws.com/development/get-all-pet-products"
        );
        const { data } = response.data;
        setDataList(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <Swiper
        navigation
        pagination
        spaceBetween={20}
        // Configurações responsivas para diferentes tamanhos de tela
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <div>
          {dataList?.map((item) => (
            <SwiperSlide key={item["product"]["id"]}>
              <div className="flex flex-col space-between max-w-72 bg-white border-gray-200 border">
                <div className="flex flex-col flex-1 w-full pl-6 pt-4 pr-6">
                  <span
                    className="w-12 h-6 bg-brand-secundary rounded-sm text-white mt-2 text-sm"
                    style={{
                      background: "var(--brand-secondary-400, #03547C)",
                    }}
                  >
                    Cães
                  </span>

                  <Image
                    className="w-[240px] h-[300px] mt-2"
                    loader={() => item["product"]["image"]}
                    src={onerror ? noImg : item["product"]["image"]}
                    alt={item["product"]["id"]}
                    width={240}
                    height={100}
                    onError={() => setOnError(true)}
                  />

                  <Stars number={4} score={68} />
                  <p className="font-bold mt-1 line-clamp-2 h-12">
                    {item["product"]["name"]}
                  </p>
                  <p className="text-start italic text-gray-500 text-base  mt-2 line-clamp-2 font-[inter] font-medium">
                    Menor preço na {item["product"]["seller"]}
                  </p>
                  <span className="antialiased font-mono text-2xl font-bold text-red-500">
                    R$ {item["price"]["sub_price"]}
                  </span>
                </div>
                <a href={item["product"]["url"]}>
                  <div className="h-12 w-full bg-[#FFE197] justify-center items-center rounded-b-lg flex">
                    <span className="text-center text-brand-tertiary font-bold button-shelf-yellow">
                      Comprar com melhor preço
                    </span>
                    <span className="font-extrabold text-primary-700 p-2 text-xl">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
