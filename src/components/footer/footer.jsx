import { AiOutlineLinkedin } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer className="flex flex-col laptop:flex-row justify-between items-center text-center py-4 px-10 bg-primary text-white mt-4">
      <p className="text-2xl text-white font-black p-2">rex.pet</p>
      <p className="">
        Todos os direitos reservados - {new Date().getFullYear()}{' '}
      </p>
      <div className="flex gap-2 mt-2 laptop:mt-0">
        <a href="#" className="hover:scale-110">
          <GrInstagram className="w-9 h-9 mt-0.5 hover:text-blue-500 trasition duration-300" />
        </a>
        <a href="#" className="hover:scale-110">
          <AiOutlineLinkedin className="w-10 h-10 font-semibold hover:text-blue-500 transition duration-300" />
        </a>
      </div>
    </footer>
  );
}
