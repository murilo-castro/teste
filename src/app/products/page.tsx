"use client";

import Image from "next/image";
import card1 from "../../../public/images/banner1.jpg";
import card3 from "../../../public/images/banner2.png";
import card2 from "../../../public/images/magnifying-glass.svg";
import Filter from "@/components/Filter/Filter";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Stars from "@/components/stars/stars";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { MapsContext } from "@/contexts/MapsContext";

export default function Page() {
  const { list, setList } = useContext(MapsContext);
  let imageLoader;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jzuwoup2ch.execute-api.us-east-2.amazonaws.com/development/get-all-pet-products"
        );
        const { data } = response.data;
        console.log(data);
        setList(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
    fetchData();
  }, []);

  const [buscaNome, setBuscaNome] = useState("");

  return (
    <div className="w-full min-w-full">
      <div className="flex items-center w-full bg-[#F7F9FA] mx-2">
        <div className="flex w-full p-0.5 border rounded-lg">
          <input
            type="text"
            className="block w-full bg-white px-1 py-2 border-none"
            placeholder="O que você procura?"
            value={buscaNome}
            onChange={(event) => setBuscaNome(event.target.value)}
          />
          <button className="flex items-center border rounded-r-lg px-2 bg-[#062A3C]">
            <Image src={card2} alt="card2"></Image>
          </button>
        </div>
      </div>
      <div className="flex mt-4 w-full min-w-full">
        <div className="md:hidden flex grow w-full">
          <Image
            className="section-picture w-full min-w-48"
            src={card3}
            alt="card3"
            key={1}
          />
        </div>
        <div className="hidden md:block w-full">
          <Image
            className="section-picture w-full h-full"
            src={card1}
            alt="card1"
            key={1}
          />
        </div>
        {/* <div className='hidden md:block items-center w-full h-48'>
          <div className="absolute left-0 2xl:static w-full">
            <Image
              className="section-picture w-full h-full"
              src={card1}
              alt="card1"
              key={1}
            />
          </div>
        </div> */}
      </div>
      <div className="md:grid md:grid-cols-4 gap-10 w-full justify-center mx-2 py-6 md:px-10">
        <Filter />
        <div className="md:col-span-3">
          <div className="flex flex-col">
            <h1
              style={{
                color: "var(--gray-900, #000305)",
                fontFamily: "Poppins",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Rações
            </h1>
            <small
              style={{
                color: "var(--gray-600, #5F686D)",
                fontFamily: "Inter",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
              }}
            >
              Veja produtos que escolhemos nas melhores lojas
            </small>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-4 justify-center">
              {list.length > 0 ? (
                list?.map((item) => (
                  <div
                    key={item["product"]["id"]}
                    className="flex flex-col space-between max-w-72 bg-white border-gray-200 border"
                  >
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
                        className="w-[240px] mt-2"
                        loader={
                          (imageLoader = () => {
                            return item["product"]["image"];
                          })
                        }
                        src={item["product"]["image"]}
                        alt={item["product"]["id"]}
                        width={240}
                        height={100}
                      />
                      <Stars number={4} score={68} />
                      <p className="font-semibold text-start mt-6">
                        {item["product"]["name"]}
                      </p>
                      <p
                        className="text-start text-gray-500 "
                        style={{
                          marginTop: "25px",
                          color: "var(--gray-500, #858F94)",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "150%",
                        }}
                      >
                        Menor preço na {item["product"]["seller"]}
                      </p>
                      <span
                        className="text-start text-2xl font-bold text-gray-800"
                        style={{
                          color: "var(--gray-800, #242729)",
                          fontFamily: "Poppins",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: "150%",
                        }}
                      >
                        R$ {item["price"]["sub_price"]}
                      </span>
                    </div>
                    <Link
                    // href={item["product"]["url"]}
                    href={`product/${item["product"]["id"]}`}
                    >
                      <div className="mt-9 h-14 w-full bg-[#FFE197] justify-center items-center rounded-b-lg flex">
                        <span className="text-center text-brand-tertiary font-bold button-shelf-yellow">
                          Comprar com melhor preço
                        </span>
                        <span> + </span>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className=" w-full mx-20 my-20 flex">
                  <IoMdCloseCircleOutline className="text-6xl mr-4 text-gray-500" />
                  <p className="text-start text-gray-500 font-bold  text-xl flex  ">
                    Desculpe, não encontramos este produto.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
