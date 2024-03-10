import React from "react";
import dog from "/public/dogErro.png";
import Image from "next/image";
import Link from "next/link";

const PgErro = () => {
  return (
    <main className=" min-h-full min-w-full  w-full bg-[url(/fundoErro.png)]  bg-no-repeat bg-cover md:bg-center bg-fixed ">
      <div className="mx-auto p-20 flex flex-col justify-center items-center ">
        <div className="">
          <Image
            src={dog}
            alt="dog"
            width={462}
            height={462}
            className="mx-auto md:w-[462px] md:h-[462px]  max-sm:w-[284.5px] max-sm:h-[284.5px] flex-grow"
          />
        </div>
        <h3 className="text-4xl text-wrap text-center flex-grow  text-primary  font-bold mt-20 mb-10">
          Opps, não temos nada por aqui!
        </h3>
        <p className="text-2xl text-wrap flex-grow   text-primary xl:w-[650px] sm:w-[340px] text-center mb-10">
          Desculpe, parece que você chegou em uma página que não existe mais ou
          nunca existiu.
        </p>
        <Link
          href="/"
          className="bg-primary text-white text-center  px-4 py-2 rounded-lg hover:bg-rexpet
          hover:scale-110 transition duration-300 max-sm:w-[343px]"
        >
          Voltar para página home
        </Link>
      </div>
    </main>
  );
};

export default PgErro;
