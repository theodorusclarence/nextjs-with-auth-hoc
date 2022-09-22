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

export default withAuth(OptionalPage, 'optional');
function OptionalPage() {
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const user = useAuthStore.useUser();
  const logout = useAuthStore.useLogout();

  return (
    <Layout>
      <Seo templateTitle='Protected' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-4'>
            <BackToHome />
            <article className='prose mt-6 prose-pre:bg-[#2E3440]'>
              <h1>Optional Page</h1>

              <StyledCode>
                {`export default withAuth(OptionalPage, 'optional');
function OptionalPage() { /* react component here */ }`}
              </StyledCode>
              <p>
                Use this for pages that doesn't require the user to be
                authenticated but it can access the user object
              </p>

              <h4>Behavior</h4>
              <ul>
                <li>
                  This page is accessible to all users
                  {isAuthenticated ? (
                    <>
                      <p>
                        You're logged in, you should see the user object below
                      </p>
                      <TryAlert className='mt-1'>
                        <Button
                          variant='light'
                          className='mt-2'
                          onClick={logout}
                        >
                          Logout
                        </Button>
                      </TryAlert>
                    </>
                  ) : (
                    <>
                      <p>
                        You're logged out, you should see that the user object
                        is null
                      </p>
                      <TryAlert className='mt-1'>
                        <p className='mt-1'>
                          After you login, you'll be redirected right to this
                          page, then you can see the user object below.
                        </p>
                        <ButtonLink
                          variant='light'
                          className='mt-2'
                          href='/login?redirect=/optional'
                        >
                          Login
                        </ButtonLink>
                      </TryAlert>
                    </>
                  )}
                </li>

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
              </ul>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
