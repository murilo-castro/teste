'use client'
import { BreadCrumbs } from "@/components/BreadCrumbs"
import Image from "next/image";
import { Chart } from "react-google-charts";
import prod01 from '../../../../public/images/image13.jpg';
import { Poppins } from "next/font/google";
import { TabNutricional } from "@/components/Tables/TabNutricional";
import { useContext, useEffect, useState } from "react";
import { apiNext } from "@/app/services/axiosAPi";
import { MapsContext } from "@/contexts/MapsContext";
import Link from "next/link";


const poppins = Poppins({
  subsets: ['latin'],
  weight: "100"
})

const  nutritional_table = {
  nutritional_information: {
    recommendation: 'Cachorros',
    size: 'Grande, Médio',
    age: 'Adulto',
    type_of_feed: 'Premium especial',
    flavor: 'Carne, frango',
    dye: 'Sem corante',
    transgenic: 'Com transgenico',
    grain_size: 'Grão médio',
    composition: 'Texto descrevendo a composição',
  },

  warranty_levels: {
    unit: {
      grams_per_kilos: 100,
      percenfit: 10,
    },
    crude_protein: {
      grams_per_kilos: 230,
      percenfit: 10,
    },
    ether_extract: {
      grams_per_kilos: 100,
      percenfit: 10,
    },
    mineral_material: {
      grams_per_kilos: 90,
      percenfit: 10,
    },
    fibrous_matter: {
      grams_per_kilos: 30,
      percenfit: 10,
    },
    calcium: {
      grams_per_kilos: 20,
      percenfit: 10,
    },
    calcium: {
      grams_per_kilos: 15,
      percenfit: 10,
    },
    phosphor: {
      grams_per_kilos: 8,
      percenfit: 10,
    },
    potassium: {
      grams_per_kilos: 5,
      percenfit: 10,
    },
    sodium: {
      grams_per_kilos: 2,
      percenfit: 10,
    },
    methiomine: {
      grams_per_kilos: 4,
      percenfit: 10,
    },
    omega_six: {
      grams_per_kilos: 15,
      percenfit: 10,
    },
    Omega_three: {
      grams_per_kilos: 4,
      percenfit: 10,
    },
    dha: {
      grams_per_kilos: 100,
      percenfit: 10,
    },
    methanolizable_energy: {
      grams_per_kilos: 100,
      percenfit: 10,
    },
  },
  enrichment_per_kilo: {
    vitamin_a: 12.0,
    vitamin_d3: 800,
    vitamin_e: 80,
    vitamin_k3: 1,
    vitamin_b1: 4,
    vitamin_b2: 7,
    vitamin_b6: 2.4,
    vitamin_b12: 40,
    vitamin_c: 32,
    niacin: 30,
    pantothenic_acid: 14.4,
    folic_acid: 0.32,
    biotin: 0.05,
    copper: 11,
    iron: 90,
    iodine: 1.5,
    manganese: 6,
    selenium: 0.4,
    zinc: 100,
  },

  recommended_amount: [
    {
      weigth: '2-4',
      grams_per_day: '45-74 g/dia',
    },
    {
      weigth: '5-9',
      grams_per_day: '85-140 g/dia',
    },
    {
      weigth: '10-15',
      grams_per_day: '150-200 g/dia',
    },
    {
      weigth: '16-20',
      grams_per_day: '220-260 g/dia',
    },
    {
      weigth: '21-30',
      grams_per_day: '270-350 g/dia',
    },
    {
      weigth: '31-40',
      grams_per_day: '360-430 g/dia',
    },
    {
      weigth: '41-50',
      grams_per_day: '440-510 g/dia',
    },
    {
      weigth: 'Acima de 50',
      grams_per_day: '510 ou mais g/dia',
    },
  ],
}

// interface  ProductProps{
//   params:{
//     slug: string
//   }
// }

const Page = ({ params }: { params: { id: number }}) => {
  const { list } = useContext(MapsContext);
  const [ product, setProdct] = useState({})
  const [ price, setPrice ] = useState({})

  useEffect(() => {
    list.map((item: { product: {}, price: {} }) => {
      if (item.product.id === Number(params.id)) {
        setProdct(item.product)
        setPrice(item.price)
        console.log(product);
        console.log(price);
      }
    })
  }, [])

  return (
  <div className="p-20 bg=[#F7F9FA]">
    <BreadCrumbs />
    <div className="flex h-[621px] w-full mt-8">
      <div className=" w-[70%] h-full bg-white rounded-lg border">
        <div className="w-full p-8 h-[322px] flex flex-row">
        <div className="w-[300px] h-[300px] justify-center items-center">
        <img className="md:rounded-none rounded-full mx-auto" src={product.image} alt="" width="384" height="512" />
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
          <div className={poppins.className}><strong className="font-extrabold text-2xl p-2 text-black">{product.name}</strong></div>
            <div><p className="text-base p-2 font-normal">{product.description}</p></div>
              <div className="flex flex-row justify-start ml-2">
                <div className="flex flex-col justify-center item-center">
                  <p className="text-base font-semibold">Menor preco por <span className="text-emerald-500 font-bold">{product.seller}</span></p>
                  <h1 className="font-extrabold text-[#000305] text-4xl">R$ {price.sub_price}</h1>
                </div>
                <div className="ml-4">
                  <Link href={`${product.url}`}>
                    <button className="w-[235px] h-16 bg-[#1271A1] text-white font-bold rounded-lg">Comprar nessa loja</button>
                  </Link>
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
              data={
                [
                  [
                    "Days",
                    product.seller,
                    "PetShop",
                    "petShop"
                  ],
                  [-40, price.price, price.price + 40, price.price + 15],
                  [-20, price.price + 20 , price.price, price.price - 5],
                  [0, price.sub_price, price.price + 10, price.price + 8],

                ]}
              width="100%"
              legendToggle
            />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2  items-center">
            <div >
              <p className="w-32">Menor preço nos ultimos <span>40 dias: </span>R$ {price.price}</p>
            </div>
            <div>
              <p className="w-32">Menor preço <span> hoje: </span>R$ {price.sub_price}</p>
          </div>
        </div>
        </div>
        </div>
      </div>
        <div className="flex flex-col itens-center mx-auto min-w-[30%] ml-4">
          <h3 className="flex justify-center">Comprar em outras lojas</h3>
          <div className="flex flex-col mx-auto">
            <div className="flex flex-col w-72 h-28 bg-white mt-10">
              <span className="flex text-blue-500 justify-center font-medium mt-2">Pet Shop</span>
              <span className="flex text-gray-400 justify-center font-bold text-xl">R$ 40,00</span>
              <Link href={'#'} className="mx-auto">
                <button className="bg-amber-300 text-white py-1 px-3 rounded-lg mt-1">Comprar nessa loja</button>
              </Link>
            </div>
            <div className="flex flex-col w-72 h-28 bg-white mt-10">
              <span className="flex text-blue-500 justify-center font-medium mt-2">Pet Shop</span>
              <span className="flex text-gray-400 justify-center font-bold text-xl">R$ 40,00</span>
              <Link href={'#'} className="mx-auto">
                <button className="bg-amber-300 text-white py-1 px-3 rounded-lg mt-1">Comprar nessa loja</button>
              </Link>
            </div>
            <div className="flex flex-col w-72 h-28 bg-white mt-10">
              <span className="flex text-blue-500 justify-center font-medium mt-2">Pet Shop</span>
              <span className="flex text-gray-400 justify-center font-bold text-xl">R$ 40,00</span>
              <Link href={'#'} className="mx-auto">
                <button className="bg-amber-300 text-white py-1 px-3 rounded-lg mt-1">Comprar nessa loja</button>
              </Link>
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

        <TabNutricional product={nutritional_table}/>

      </details>
      </div>
    </div>
  </div>
)}

export default Page;
