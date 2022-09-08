import { Menu, Transition } from '@headlessui/react';
import * as React from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { ImUser } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white'>
      <button
        type='button'
        className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <HiMenuAlt2 className='h-6 w-6' aria-hidden='true' />
      </button>
      <div className='flex flex-1  px-4 md:px-0'>
        <div className='ml-auto flex items-center justify-self-end '>
          <div className='rounded-full bg-blue-100 py-[5.5px] px-4 text-sm font-semibold text-blue-800'>
            Admin
          </div>

          {/* Profile dropdown */}
          <Menu as='div' className='relative ml-3'>
            <div>
              <Menu.Button className='flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                <span className='sr-only'>Open user menu</span>
                <ImUser className='h-8 w-8 rounded-full border-2 p-0.5 text-gray-500' />
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={clsxm(
                          active ? 'bg-gray-100' : '',
                          'block py-2 px-4 text-sm text-gray-700'
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
