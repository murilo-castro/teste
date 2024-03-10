import Link from "next/link";
import Image from "next/image";
const Secao04 = () => {
  return (
    <section>
      <p className="text-center font-bold text-[32px] text-black-services mt-[60px] mb-[40px]">Serviços buscados com frequencia</p>
      <div className="flex flex-col items-center laptop:flex-row gap-5 laptop:justify-around mb-[30px] p-5">
      <Link href="#">
        <Image
          src="/images/img01.png"
          width={321}
          height={239}
          alt="Pet Walker"
        />
      </Link>
      <Link href="#">
        <Image
          src="/images/img02.png"
          width={321}
          height={239}
          alt="Veterinário"
        />
      </Link>
      <Link href="#">
        <Image
          src="/images/img03.png"
          width={321}
          height={239}
          alt="Pet Sister"
        />
      </Link>
      <Link href="#">
        <Image
          src="/images/img04.png"
          width={321}
          height={239}
          alt="Adestrador"
        />
      </Link>
      </div>
    </section>
  );
};

export default Secao04;
