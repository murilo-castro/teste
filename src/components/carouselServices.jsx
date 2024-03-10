import Link from 'next/link';
import { PiDogBold } from 'react-icons/pi';
import MapIntineraries from './mapIntineraries';

const servicesPet = [
  'Pet Sitter',
  'Adestrador',
  'Clinicas',
  'Pet Walker',
  'Creches',
];

const CarouselServices = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className="flex overflow-x-auto w-[96%] md:w-[462px] lg:w-[672px] xl:w-[792px] 2xl:w-[891px] mx-4">
        <ul className="flex gap-[24px] items-center font-bold text-primary text-[11px]">
          {servicesPet.map((service) => (
            <li
              key={service}
              className="w-[170px] h-[59px] gap-[8px] p-4 bg-auxiliary-blue rounded-full hover:border-solid flex text-base justify-center items-center hover:border-2 hover:border-stone-950 hover:transition hover:duration-700 hover:scale-110"
            >
              <PiDogBold className="mr-2 mt-1" />
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 mb-2 grow">
        <MapIntineraries />
      </div>
    </div>
  );
};

export default CarouselServices;
