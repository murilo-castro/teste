'use client'
import { BreadCrumbs } from "@/components/BreadCrumbs"
import Image from "next/image";
import { Chart } from "react-google-charts";
import { product } from "../../product_db/product_id"


const poppins = Poppins({
  subsets: ['latin'],
  weight: "100"
})

import prod01 from '../../../public/images/image13.jpg';
import { Poppins } from "next/font/google";
import { TabNutricional } from "@/components/Tables/TabNutricional";
interface  ProductProps{
  params:{
    slug: string
  }
}

export default function Page({ params }: ProductProps) {
  console.log(product);

  return (
  <div className="p-20 bg=[#F7F9FA]">
    <BreadCrumbs />
    {/* {params.slug} */}
    <div className="h-[621px] border w-full mt-8">
      <div className=" w-[956px] h-full bg-white rounded-lg">

        <div className="w-full p-8 h-[322px] flex flex-row">
        <div className="w-[300px] h-[300px] justify-center items-center">
        <Image className="md:rounded-none rounded-full mx-auto" src={prod01} alt="" width="384" height="512" />
        </div>
        <div className="flex-1 p-4">
        <div className="flex gap-2">
            <div className="flex gap-0.5 text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <small>124</small>
        </div>
          <div className={poppins.className}><strong className="font-extrabold text-2xl p-2 text-black">Ração Golden Special para Cães Adultos Sabor Frango e Carne</strong></div>
          <div><p className="text-base p-2 font-normal">Nutrilus Pro Cães Adultos é uma ração premium especial, desenvolvida por médicos veterinários com ingredientes selecionados, sem corantes e sem aromatizantes artificiais, garantindo uma alimentação balanceada e um sabor irresistível, com o melhor custo-benefício.</p></div>
          <div className="flex flex-row justify-start ml-2">
            <div className="flex flex-col justify-center item-center">
              <p className="text-base font-semibold">Menor preco por <span className="text-emerald-500 font-bold">Petz</span></p>
              <h1 className="font-extrabold text-[#000305] text-4xl">R$ 32,00</h1>
            </div>
            <div className="ml-4">
              <button className="w-[235px] h-16 bg-[#1271A1] text-white font-bold rounded-lg">Comprar nessa loja</button>
            </div>
          </div>
        </div>
        </div>
        <div className=" h-full w-full justify-center items-center p-4 gap-4">
          <strong className="font-extrabold text-black">Histórico de preço</strong>
          <div className="flex flex-row border">
            <div className="w-96 h-full">
            <Chart
              chartType="LineChart"
              data={[["Cobasi", "Petz","SuperPet"], [4, 5.5,3], [8, 12,6],[9, 5,16]]}
              width="100%"
              legendToggle
            />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2  items-center">
            <div >
              <p className="w-32">Menor preço nos ultimos <span>40 dias: </span> R$ 40.00 </p>
            </div>
            <div>
              <p className="w-32">Menor preço <span> hoje: </span> R$ 40.00 </p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="space-y-4 mt-8">
      <details className="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
        >
          <h2 className="font-medium">
           Avaliação dos clientes
          </h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

    </div>
    <div className="space-y-4 mt-8 ">
      <div>
      <details className="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
        >
          <h2 className="font-medium">
          Informações nutricionais
          </h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <TabNutricional />

      </details>
      </div>
    </div>
  </div>
)}
