import * as React from 'react';
import toast from 'react-hot-toast';
import { UseQueryResult } from 'react-query';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

type OptionType = {
  runCondition?: boolean;
  loading?: string;
  success?: string;
  error?: string;
};

export default function useRQWithToast<T, E>(
  query: UseQueryResult<T, E>,
  { runCondition = true, ...customMessages }: OptionType = {}
) {
  const { data, isError, error, isLoading } = query;

  const toastStatus = React.useRef<string>(data ? 'done' : 'idle');
  const toastMessage = {
    ...DEFAULT_TOAST_MESSAGE,
    ...customMessages,
  };

  React.useEffect(() => {
    if (!runCondition) return;

    // If it is not the first render
    if (toastStatus.current === 'done' && !isLoading) return;

    if (isError) {
      if (typeof toastMessage.error === 'string') {
        toast.error(toastMessage.error, { id: toastStatus.current });
      } else {
        toast.error(toastMessage.error(error), { id: toastStatus.current });
      }
      toastStatus.current = 'done';
    } else if (isLoading) {
      toastStatus.current = toast.loading(toastMessage.loading);
    } else if (data) {
      toast.success(toastMessage.success, { id: toastStatus.current });
      toastStatus.current = 'done';
    }

    return () => {
      toast.dismiss(toastStatus.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    data,
    error,
    isError,
    isLoading,
    runCondition,
    toastMessage.error,
    toastMessage.loading,
    toastMessage.success,
  ]);

  return { ...query };
}
