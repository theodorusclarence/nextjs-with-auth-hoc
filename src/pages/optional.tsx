import * as React from 'react';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

export default withAuth(OptionalPage, 'optional');
function OptionalPage() {
  const user = useAuthStore.useUser();
  const logout = useAuthStore.useLogout();
  return (
    <Layout>
      <Seo templateTitle='Optional' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <ArrowLink href='/' direction='left'>
              Back to home
            </ArrowLink>
            <pre className='mt-4'>{JSON.stringify(user, null, 2)}</pre>
            <Button className='mt-2' variant='light' onClick={logout}>
              Logout
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
