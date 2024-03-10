import Image from "next/image";

const Secao01 = () => {

  return (
    <section className="relative p-0 pl-5">
      {/* Imagem para dispositivos móveis */}
      <div className="md:hidden ">
        <Image
          src="/images/frameMobile01.png"
          width={500}
          height={500}
          alt="frame"
          className={` pr-5`}
        />
      </div>

      {/* Imagem para desktop */}
      <div className="hidden md:block ">
        <Image
          src="/images/frameMobile02.png"
          width={894}
          height={276}
          alt="frame"
          className={`min-h-[276px] md:w-[894px] 2xl:w-full pr-5`}
        />
      </div>
    </section>
  );
};

export default Secao01;
