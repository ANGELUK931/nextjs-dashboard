
'use client';

import { IframeCards } from '@/app/ui/dashboard/iframe-cards';
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard - Cards
      </h1>

      {/* Bloque 1: PokéAPI */}
      <IframeCards />

      {/* Aquí puedes agregar los demás bloques más adelante */}
      {/* <OtherApiCards /> */}
    </main>
  );
}
