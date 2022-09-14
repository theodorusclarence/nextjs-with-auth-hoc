import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as React from 'react';

import { mockQuery } from '@/lib/axios-mock';
import useRQWithToast from '@/hooks/toast/useRQWithToast';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { ApiReturn } from '@/types/api';
import { User } from '@/types/auth';

export default function AuthPage() {
  const router = useRouter();
  const { data: data } = useRQWithToast(
    useQuery<ApiReturn<User>, Error>(['/me'], mockQuery)
  );

  return (
    <Layout>
      <Seo templateTitle='Auth' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <div className='space-x-2'>
              <Button
                variant='light'
                onClick={() => {
                  localStorage.setItem('token', 'dummy-token');
                  router.reload();
                }}
              >
                Set Token
              </Button>
              <Button
                variant='light'
                onClick={() => {
                  localStorage.removeItem('token');
                  router.reload();
                }}
              >
                Remove Token
              </Button>
            </div>
            <p className='mt-2 text-sm font-medium'></p>
            <pre className='mt-4 overflow-auto text-sm'>
              {JSON.stringify(data ?? {}, null, 2)}
            </pre>
          </div>
        </section>
      </main>
    </Layout>
  );
}
