import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApiSlice = createApi({
  //!   for multiple API reducers,
  //!   each reducer path needs to different!
  reducerPath: 'demo-slice-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://calm-plum-jaguar-tutu.cyclic.app',
  }),
  endpoints: (builder) => {
    return {
      getTodos: builder.query({
        query: () => {
          return '/todos';
        },
      }),
      getTodosById: builder.query({
        query: (id) => {
          return `/todos/${id}`;
        },
      }),
      createTodo: builder.mutation({
        query: (data) => ({
          url: '/todos',
          method: 'POST',
          body: data,
        }),
      }),
      updateTodo: builder.mutation({
        query: ({ id, ...body }) => ({
          url: `/todos/${id}`,
          method: 'PUT',
          body: body,
        }),
      }),
    };
  },
});

export const {
  useGetTodosQuery,
  useGetTodosByIdQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
} = todosApiSlice;
