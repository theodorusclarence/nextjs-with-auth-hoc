import * as React from 'react';
import toast from 'react-hot-toast';

import apiMock from '@/lib/axios-mock';
import { getFromLocalStorage } from '@/lib/helper';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

export default function AuthPage() {
  const [, triggerRerender] = React.useState(false);
  const [data, setData] = React.useState();

  const getData = () => {
    toast.promise(
      apiMock.get('/me').then((res) => setData(res.data)),
      {
        ...DEFAULT_TOAST_MESSAGE,
      }
    );
  };

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
                  triggerRerender((prev) => !prev);
                }}
              >
                Set Token
              </Button>
              <Button
                variant='light'
                onClick={() => {
                  localStorage.removeItem('token');
                  triggerRerender((prev) => !prev);
                }}
              >
                Remove Token
              </Button>
              <Button variant='light' onClick={getData}>
                Fetch Data
              </Button>
            </div>
            <p className='mt-2 text-sm font-medium'>
              token: {getFromLocalStorage('token') ?? '-'}
            </p>
            <pre className='mt-4 overflow-auto text-sm'>
              {JSON.stringify(data ?? {}, null, 2)}
            </pre>
          </div>
        </section>
      </main>
    </Layout>
  );
}
