"use client";

import TopButtonsMenu from "@/components/top-buttons-menu/top-buttons-menu";
import ResponsiveCarousel from "@/components/RespCarousel/RespCarousel";
import CarouselProdutos from "@/components/Carousel/CarouselProdutos";
import Banner from "@/components/main/Banner";
import NewsLetter from "@/components/main/NewsLetter";

import { useMediaQuery } from "@react-hook/media-query";
import { useState, useEffect } from "react";

const bannersDesktop = [
  "/images/card1.svg",
  "/images/card2.png",
  "/images/card4.png",
];
const bannersMobile = ["/images/bannerMobile.png"];

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [banners, setBanners] = useState(bannersDesktop);

  useEffect(() => {
    setBanners(isMobile ? bannersMobile : bannersDesktop);
  }, [isMobile]);

  return (
    <main className="font-[poppins] flex sm:flex-col">
      <section className="flex-1">
        <div className="container mx-auto m-8 p-12  max-sm:w-[350px]">
          <ResponsiveCarousel banners={banners} />
          <TopButtonsMenu />
        </div>

        {/* <CarouselProdutos /> */}

        <Banner />

        <NewsLetter />
      </section>
    </main>
  );
}
