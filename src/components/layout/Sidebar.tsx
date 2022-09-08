import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import * as React from 'react';
import { IconType } from 'react-icons';
import { HiHome, HiX } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import Vercel from '~/svg/Vercel.svg';

type Navigation = {
  name: string;
  href: string;
  icon: IconType;
  exactMatch?: boolean;
};

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navigation: Navigation[] = [
  { name: 'Dashboard', href: '/dashboard', icon: HiHome },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const router = useRouter();

  return (
    <>
      <Transition.Root show={sidebarOpen} as={React.Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-40 flex md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <HiX className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex flex-shrink-0 justify-center'>
                <Vercel className='h-8 w-auto' />
              </div>
              <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                <nav className='space-y-1 px-2'>
                  {navigation.map((item) => {
                    const isSelected = item.exactMatch
                      ? router.pathname === item.href
                      : router.pathname.startsWith(item.href);

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsxm(
                          isSelected
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center rounded-md py-2 px-2 text-base font-medium'
                        )}
                      >
                        <item.icon
                          className={clsxm(
                            isSelected
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 h-6 w-6 flex-shrink-0'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='w-14 flex-shrink-0'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white py-8'>
          <div className='flex flex-shrink-0 justify-center'>
            <Vercel className='h-8 w-auto' />
          </div>
          <div className='mt-8 flex flex-grow flex-col'>
            <nav className='flex-1 space-y-1 px-2 pb-4'>
              {navigation.map((item) => {
                const isSelected = item.exactMatch
                  ? router.pathname === item.href
                  : router.pathname.startsWith(item.href);

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={clsxm(
                      isSelected
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center rounded-md py-2 px-2 text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={clsxm(
                        isSelected
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 h-6 w-6 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
