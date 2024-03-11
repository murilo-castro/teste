'use client'

import { useEffect, useState } from 'react';
import CarouselServices from '../../components/carouselServices';
import Form from '../../components/form';
import List from '../../components/list';

export default function Teste() {

  return (
    <section>
      <div className="hidden md:block md:flex gap-6 mt-20 justify-between grow bg-main w-full max-w-full mx-auto dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
        <div className='2xl:w-[448px] 2xl:h-full gap-[40px]'>
          <div className='flex flex-col p-[16px]'>
            <Form />
          </div>
          <div  className='flex grow' >
            <List />
          </div>
        </div>
        <div className='hidden md:block mr-3 flex grow'>
          <CarouselServices />
        </div>
      </div>
      <div className="grid grid-cols-1 md:hidden bg-main w-full mx-auto dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
        <div>
          <Form />
        </div>
        <div className='flex' >
          <CarouselServices />
        </div>
        <div>
          <List />
        </div>
      </div>
    </section>
  )
}
