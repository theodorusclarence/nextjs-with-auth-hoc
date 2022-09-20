import * as React from 'react';
import toast from 'react-hot-toast';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

export default withAuth(HomePage, 'optional');
function HomePage() {
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const logout = useAuthStore.useLogout();

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4'>Next.js Authentication HOC Pattern</h1>
            <p className='mt-2 text-sm text-gray-800'>
              Authentication pattern example using Higher Order Component,
              Zustand, and React Query
            </p>
            <div className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/nextjs-with-auth-hoc'>
                See the repository
              </ArrowLink>
            </div>

            <div className='mt-6 rounded border border-slate-200 bg-slate-50 py-3 px-4'>
              <div className='inline-flex items-center gap-2 text-sm font-medium text-gray-700'>
                isAuthenticated:{' '}
                <span className='text-lg'>
                  {isAuthenticated ? (
                    <>
                      <HiOutlineCheckCircle className='text-green-600' />
                      <p className='sr-only'>true</p>
                    </>
                  ) : (
                    <>
                      <HiOutlineXCircle className='text-red-600' />
                      <p className='sr-only'>false</p>
                    </>
                  )}
                </span>
              </div>
              <div className='mt-2'>
                {isAuthenticated ? (
                  <Button variant='light' onClick={logout}>
                    Logout
                  </Button>
                ) : (
                  <ButtonLink href='/login' variant='light'>
                    Login
                  </ButtonLink>
                )}
              </div>
            </div>

            <div className='mt-6 flex flex-wrap gap-2'>
              {isAuthenticated ? (
                <Button
                  variant='light'
                  onClick={() => {
                    toast((t) => (
                      <div>
                        <p>
                          The auth page can only be accessed when the user is{' '}
                          <strong className='text-red-400'>logged out</strong>.
                        </p>
                        <Button
                          className='mt-2 text-sm'
                          variant='light'
                          onClick={() => {
                            toast.dismiss(t.id);
                            logout();
                          }}
                        >
                          Logout
                        </Button>
                      </div>
                    ));
                  }}
                >
                  Auth
                </Button>
              ) : (
                <ButtonLink href='/auth' variant='light'>
                  Auth
                </ButtonLink>
              )}
              <ButtonLink href='/protected' variant='light'>
                Protected
              </ButtonLink>
              <ButtonLink href='/optional' variant='light'>
                Optional
              </ButtonLink>
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=auth-hoc'>
                Theodorus Clarence
              </UnderlineLink>
              {' & '}
              <UnderlineLink href='https://rizqitsani.com?ref=auth-hoc'>
                Rizqi Tsani
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
