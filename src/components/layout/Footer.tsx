import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

export default function Footer() {
  return (
    <footer className='print:hidden'>
      <div className='layout min-h-[3.5rem] md:flex md:items-center md:justify-between lg:min-h-[5rem]'>
        <div className='flex justify-center space-x-6 md:order-2'>
          <UnstyledLink href='/'>
            <span className='sr-only'>Logo</span>
            <div className='w-7 md:w-9'>
              <NextImage
                src='/images/logo.png'
                alt='Logo'
                height='1200'
                width='1200'
                className='h-full w-full'
              />
            </div>
          </UnstyledLink>
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <p className='text-center text-base text-gray-400'>
            &copy; 2022 PPDB Sulawesi Selatan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
