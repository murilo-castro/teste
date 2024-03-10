import Link from "next/link";
import { ImSearch } from "react-icons/im";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

const Secao03 = () => {
  return (
    <section className="mt-[56px]">
      <ul className="flex flex-col items-center laptop:flex-row gap-16 laptop:justify-center text-auxiliaryPink font-bold ">
        <li className="px-2">
          <Link href="#" className="flex text-auxiliary-pink">
            <ImSearch className="mr-2 mt-1"/>
            Encontre especialistas
          </Link>
        </li>
        <li>
          <Link href="#" className="flex text-auxiliary-pink">
            <AiOutlineStar className="mr-2 mt-1"/>
            Os melhores proficionais
          </Link>
        </li>
        <li>
          <Link href="#" className="flex text-auxiliary-pink">
            <AiOutlineHeart className="mr-2 mt-1"/>
            Avalie o serviço
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Secao03;
