import Image from "next/image";
import card5 from "../../../public/images/card5.png";
import card6 from "../../../public/images/card6.png";

const Banner = () => {
  return (
    <section className="flex justify-center items-center p-12 gap-10 max-md:flex-col max-sm:w-[350px]">
      <div className="flex flex-col rounded-lg w-96 bg-green-50 gap-10  max-sm:m-auto">
        <div>
          <Image
            className=" max-sm:w-[350px]"
            src={card5}
            alt="card5"
            key={5}
          />
        </div>
        <div className="flex flex-col ml-8 mr-8">
          <p className="text-3xl font-normal text-start">
            <span className="text-auxiliary-green ">
              Roteiros incríveis&nbsp;
            </span>
            para você apreciar com seu pet
          </p>
          <small className="mt-2 font-normal text-start text-base">
            Ad vero illo 33 laborum quis sed magnam ipsa aut illo nisi qui
            possimus odit.
          </small>
        </div>

        <button className="bg-auxiliary-green flex justify-center items-center text-white text-xl font-semibold p-4 ml-8 mr-8 rounded-lg">
          Conhecer roteiros
        </button>
      </div>
      <div className="flex flex-col rounded-lg w-96 bg-pink-50 gap-10 max-sm:m-auto">
        <div>
          <Image className="section-picture" src={card6} alt="card6" key={6} />
        </div>
        <div className="flex flex-col ml-8 mr-8">
          <p className="text-3xl font-normal text-start">
            Melhores opções de&nbsp;
            <span className="text-auxiliary-pink">cuidado para seu pet</span>
          </p>
          <small className="mt-2 font-normal text-start text-base">
            Ad vero illo 33 laborum quis sed magnam ipsa aut illo nisi qui
            possimus odit.
          </small>
        </div>

        <button className="bg-auxiliary-pink flex justify-center items-center text-white text-xl font-semibold p-4 ml-8 mr-8 rounded-lg">
          Cuidados pet
        </button>
      </div>
    </section>
  );
};

export default Banner;
