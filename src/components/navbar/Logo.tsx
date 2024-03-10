'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



import logo from './../../../public/rex.pet.svg';

export default function Logo() {

  const router = useRouter();
  return (
    <a href='/'>
      <Image
      alt='Logo'
      className='md:block cursor-pointer'
      height={46.6}
      width={150}
      src={logo}
    />
    </a>
    

  )

}
