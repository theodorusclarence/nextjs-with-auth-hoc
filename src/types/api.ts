export type ApiReturn<T> = {
  code: string;
  data: T;
};

export type User = {
  id: number;
  name: string;
  token: string;
};
