'use client';

import { Apis } from '@/app/ui/dashboard/apis';
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        cards de apis
      </h1>
      {/*Apis*/}
      <Apis />
    </main>
  );
}
