'use client';

import { useContext } from 'react';
import { MapsContext } from '../contexts/MapsContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";

const stars: number[] = [...(new Array(5).keys()) as any]

const List = () => {

  const { places } = useContext(MapsContext);

  // const markers = [
  //   {
  //     name: 'vet',
  //     id: 0,
  //     photo: 'https://www.unisuam.edu.br/wp-content/uploads/2022/05/Design-sem-nome-12.png',
  //     rating: 4,
  //     number: '71 99191-9977'
  //   },
  //   {
  //     name: 'vet',
  //     id: 1,
  //     photo: 'https://www.unisuam.edu.br/wp-content/uploads/2022/05/Design-sem-nome-12.png',
  //     rating: 5,
  //     number: '71 99191-9977'
  //   },
  //   {
  //     name: 'vet',
  //     id: 3,
  //     photo: 'https://www.unisuam.edu.br/wp-content/uploads/2022/05/Design-sem-nome-12.png',
  //     rating: 3,
  //     number: '71 99191-9977'
  //   },
  //   {
  //     name: 'vet',
  //     id: 4,
  //     photo: 'https://www.unisuam.edu.br/wp-content/uploads/2022/05/Design-sem-nome-12.png',
  //     rating: 1,
  //     number: '71 99191-9977'
  //   },
  //   {
  //     name: 'vet',
  //     id: 5,
  //     photo: 'https://www.unisuam.edu.br/wp-content/uploads/2022/05/Design-sem-nome-12.png',
  //     rating: 1,
  //     number: '71 99191-9977'
  //   },
  //   {
  //     name: 'vet',
  //     id: 6,
  //     photo: 'https://www.unisuam.edu.br/wp-content/uploads/2022/05/Design-sem-nome-12.png',
  //     rating: 1,
  //     number: '71 99191-9977'
  //   },
  //   {
  //     name: 'vet',
  //     id: 7,
  //     photo: 'https://www.unisuam.edu.br/wp-content/uploads/2022/05/Design-sem-nome-12.png',
  //     rating: 1,
  //     number: '71 99191-9977'
  //   }
  // ]

  // const { markers } = useContext(MapsContext);
  return (
    <div className='flex m-2 m-3'>
      <ul className="w-full max-h-[612px] md:max-w-[448px]  overflow-auto">
        {places.map(({ name, id, photo, rating, number }) => (
          <li key={id}>
            <div className="grid grid-cols-3">
              <div className="col-span-2 grid grid-cols-3 my-4">
                <div>
                  <img src={photo} alt={name} />
                </div>
                <div className="col-span-2 ">
                  <span className="flex ml-5">{name}</span>
                </div>
              </div>
              <div className="flex ml-auto mr-2 my-4">
                <div className="flex mr-2">
                  {stars.map(index => (
                    <FaStar key={index} className={rating >= index + 1 ? "text-yellow-400" : 'text-gray-300 ' }/>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <span>Distância 40km</span>
              <span>Abertos das 8h às 18h</span>
            </div>
            <div className="flex gap-8">
              <Link
                href={'tel:' + number}
                className="flex text-rexpet text-xl hover:text-blue-500"
                aria-current="page"
              >
                {number}
              </Link>
              <Link
                href={'https://web.whatsapp.com/send?phone=' + number}
                className="flex text-rexpet text-xl hover:text-blue-500"
                aria-current="page"
              >
                {number}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
