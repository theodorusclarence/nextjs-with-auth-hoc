import * as React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Seo from '@/components/Seo';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard' />

      <section>
        <h1>Hello!</h1>
      </section>
    </DashboardLayout>
  );
}
