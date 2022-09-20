import { useRouter } from 'next/router';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import StyledCode from '@/components/content/StyledCode';
import TryAlert from '@/components/content/TryAlert';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import BackToHome from '@/components/links/BackToHome';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default withAuth(AuthPage, 'auth');
function AuthPage() {
  const router = useRouter();
  return (
    <Layout>
      <Seo templateTitle='Auth' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-4'>
            <BackToHome />
            <article className='prose mt-6 prose-pre:bg-[#2E3440]'>
              <h1>Auth Page</h1>

              <StyledCode>
                {`export default withAuth(AuthPage, 'auth');
function AuthPage() { /* react component here */ }`}
              </StyledCode>
              <p>
                Use this for authentication pages such as Login and Register or
                any other page that suits with the behavior
              </p>

              <h4>Behavior</h4>
              <ul>
                <li>
                  <strong className='underline'>Unauthenticated users</strong>{' '}
                  can access this page without any loading page
                  <TryAlert className='mt-1'>
                    <Button
                      variant='light'
                      className='mt-2'
                      onClick={() => {
                        router.reload();
                      }}
                    >
                      Reload This Page
                    </Button>
                  </TryAlert>
                </li>
                <li>
                  <strong className='underline'>Authenticated users</strong>{' '}
                  will be redirected to <code>HOME_ROUTE</code> (default:{' '}
                  <code>/</code>).
                  <ul className='text-sm'>
                    <strong>Note:</strong>
                    <li>
                      Authenticated users <b>will see a flash</b> before getting
                      redirected;
                    </li>
                    <li>
                      We omit the loading spinner—that blocks content flash—in
                      this page to prevent unauthenticated users from seeing
                      annoying loading before they're trying to login;
                    </li>
                    <li>
                      You're expected to hide all links to the <code>auth</code>{' '}
                      page when the user is authenticated.
                    </li>
                  </ul>
                  <TryAlert className='mt-1'>
                    <p className='mt-1'>
                      After you login, you'll be redirected right to this page,
                      then you'll see a <strong>content flash</strong> before
                      getting redirected back to the home page.
                    </p>
                    <ButtonLink
                      variant='light'
                      className='mt-2'
                      href='/login?redirect=/auth'
                    >
                      Login
                    </ButtonLink>
                  </TryAlert>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
