// THIS IS A FAKE DATA FOR OUR BACKEND, YOU CAN BASE ON THE DATA TO CREATE A DATABASE WITH (PG OR MYSQL) TO HAVE A GOOD STORAGE
export type USER = {
  id: number;
  publickKey: string;
  email: string;
  role: ROLE;
};

export enum ROLE {
  LENDER = 'LENDER',
  BORROWER = 'BORROWER',
}

const DATA_USERS: USER[] = [
  {
    id: 1,
    email: 'minhbeardev@gmail.com',
    publickKey: 'UPDATE THIS TO PUBLICK KEY OF WHO IS LENDER',
    role: ROLE.LENDER,
  },
  {
    id: 2,
    email: 'truongnguyenptn@gmail.com',
    publickKey: 'UPDATE THIS TO PUBLICK KEY OF WHO IS BORROWER',
    role: ROLE.BORROWER,
  },
];

export { DATA_USERS };
