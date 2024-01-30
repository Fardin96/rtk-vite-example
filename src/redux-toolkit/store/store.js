import { configureStore } from '@reduxjs/toolkit';

// all the reducers
import counterReducer from '../feature/counter/counter-slice';
import { employeesApiSlice } from '../feature/employees-api/employees-api-slice';
import { todosApiSlice } from '../feature/demo-api/demo-api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [employeesApiSlice.reducerPath]: employeesApiSlice.reducer,
    [todosApiSlice.reducerPath]: todosApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    employeesApiSlice.middleware,
    todosApiSlice.middleware,
  ],
});
