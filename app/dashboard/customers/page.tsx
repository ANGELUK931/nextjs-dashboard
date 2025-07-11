import { Lusitana } from 'next/font/google';
import { IframeCards } from '@/app/ui/dashboard/iframe-cards';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default async function Page() {
  return (
    <main>
  <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
    Dashboard
  </h1>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    <Suspense fallback={<CardsSkeleton />}>
    </Suspense>
  </div>
  <IframeCards />
  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
    <Suspense fallback={<RevenueChartSkeleton />}>
    </Suspense>
    <Suspense fallback={<LatestInvoicesSkeleton />}>
    </Suspense>
  </div>
</main>

  );
}