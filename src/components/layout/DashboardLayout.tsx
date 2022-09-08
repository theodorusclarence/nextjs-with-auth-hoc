import * as React from 'react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
  hideSidePanel?: boolean;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className='md:pl-64'>
        <div className='layout flex flex-col'>
          {/* <div className='mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0'> */}
          <Header setSidebarOpen={setSidebarOpen} />

          <main className='flex-1'>
            <div className='py-6'>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
