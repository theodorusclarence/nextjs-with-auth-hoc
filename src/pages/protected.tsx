import { useRouter } from 'next/router';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import StyledCode from '@/components/content/StyledCode';
import StyledJSON from '@/components/content/StyledJSON';
import TryAlert from '@/components/content/TryAlert';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import BackToHome from '@/components/links/BackToHome';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

export default withAuth(ProtectedPage, 'all');
function ProtectedPage() {
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const user = useAuthStore.useUser();
  const logout = useAuthStore.useLogout();

  const router = useRouter();

  return (
    <Layout>
      <Seo templateTitle='Protected' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-4'>
            <BackToHome />
            <article className='prose mt-6 prose-pre:bg-[#2E3440]'>
              <h1>Protected Page</h1>

              <StyledCode>
                {`export default withAuth(ProtectedPage, 'all');
function ProtectedPage() { /* react component here */ }`}
              </StyledCode>

              <h4>Behavior</h4>
              <ul>
                <li>
                  <strong className='underline'>Unauthenticated users</strong>{' '}
                  will be redirected to <code>LOGIN_ROUTE</code> (default:{' '}
                  <code>/login</code>), without any content flashing
                </li>
                <li>
                  <strong className='underline'>Authenticated users</strong>{' '}
                  will see this page in this following scenario:
                  <TryAlert className='mt-1'>
                    <Button variant='light' className='mt-2' onClick={logout}>
                      Logout
                    </Button>
                  </TryAlert>
                </li>
                <ol>
                  <li>
                    <strong>Direct visit using link</strong> → user will see a
                    loading page while the <code>withAuth</code> component
                    checks the token, then this page will be shown
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
                    <strong>Visit from other page</strong> (
                    <code>router.push</code>) → user will see this page
                    immediately
                    <TryAlert className='mt-1'>
                      <p>Go to home, then come back here</p>
                      <ButtonLink className='mt-2' variant='light' href='/'>
                        Home
                      </ButtonLink>
                    </TryAlert>
                  </li>
                </ol>
              </ul>

              <h3>User Object</h3>
              <StyledCode className='language-javascript'>
                const user = useAuthStore.useUser();
              </StyledCode>
              <StyledJSON data={user} />

              <h3>isAuthenticated</h3>
              <StyledCode className='language-javascript'>
                const isAuthenticated = useAuthStore.useIsAuthenticated();
              </StyledCode>
              <StyledJSON data={{ isAuthenticated }} />
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
