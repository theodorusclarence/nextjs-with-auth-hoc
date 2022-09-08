import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

export default function HomePage() {
  return (
    <Layout>
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
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/nextjs-auth-hoc'>
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink className='mt-6' href='/' variant='light'>
              Sign In
            </ButtonLink>

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
    </Layout>
  );
}
