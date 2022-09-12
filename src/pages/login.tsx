import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import apiMock from '@/lib/axios-mock';
import logger from '@/lib/logger';
import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import BackToHome from '@/components/links/BackToHome';
import UnstyledLink from '@/components/links/UnstyledLink';
import Logo from '@/components/Logo';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiReturn } from '@/types/api';
import { User } from '@/types/auth';

type LoginData = {
  email: string;
  password: string;
};

export default withAuth(LoginPage, 'auth');
function LoginPage() {
  const isLoading = useLoadingToast();

  //#region  //*=========== Store ===========
  const login = useAuthStore.useLogin();
  //#endregion  //*======== Store ===========

  //#region  //*============== Form
  const methods = useForm<LoginData>({
    mode: 'onTouched',
    defaultValues: {
      email: 'me@email.com',
      password: 'password',
    },
  });
  const { handleSubmit } = methods;
  //#endregion  //*============== Form

  //#region //*============== Form Submit
  const onSubmit: SubmitHandler<LoginData> = (data) => {
    logger({ data }, 'signin.tsx line 36');
    let tempToken: string;

    toast.promise(
      apiMock
        .post(`/login`, data)
        .then((res) => {
          const { token } = res.data.data;
          tempToken = token;
          localStorage.setItem('token', token);

          return apiMock.get<ApiReturn<User>>('/me');
        })
        .then((user) => {
          login({
            ...user.data.data,
            token: tempToken,
          });
        }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Successfully logged in',
      }
    );

    return;
  };
  //#endregion //*============== Form Submit

  return (
    <Layout>
      <Seo templateTitle='Login' />

      <main>
        <div className='flex min-h-screen bg-white'>
          <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
            <div className='mx-auto w-full max-w-sm lg:w-96'>
              <div>
                <BackToHome />
                <UnstyledLink href='/'>
                  <Logo className='mt-2' />
                </UnstyledLink>
                <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                  Login
                </h2>
                <p className='mt-2 text-sm text-gray-700'>
                  You can use any email and password you want.
                </p>
              </div>

              <div className='mt-8'>
                <div className='mt-6'>
                  <FormProvider {...methods}>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className='space-y-6'
                    >
                      <Input
                        id='email'
                        label='Email'
                        validation={{ required: 'Email is required' }}
                      />

                      <PasswordInput
                        id='password'
                        label='Password'
                        validation={{ required: 'Password is required' }}
                      />

                      <div>
                        <Button
                          isLoading={isLoading}
                          className='w-full justify-center'
                          type='submit'
                        >
                          Login
                        </Button>
                      </div>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
          <div className='relative hidden w-0 flex-1 lg:block'>
            <NextImage
              className='absolute inset-0 h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              layout='fill'
              objectFit='cover'
              alt='login background image'
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
