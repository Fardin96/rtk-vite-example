import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeesApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummy.restapiexample.com/api/v1',
  }),
  endpoints: (builder) => {
    return {
      getEmp: builder.query({
        query: () => {
          return '/employees';
        },
      }),
      getOneEmp: builder.query({
        query: (id) => {
          return `/employee/${id}`;
        },
      }),
      createEmp: builder.mutation({
        query: (data) => {
          return {
            url: '/create',
            method: 'POST',
            body: data,
          };
        },
      }),
    };
  },
});

export const { useGetEmpQuery, useGetOneEmpQuery, useCreateEmpMutation } =
  employeesApiSlice;
