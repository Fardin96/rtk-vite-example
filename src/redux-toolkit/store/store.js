import { configureStore } from '@reduxjs/toolkit';

// all the reducers
import counterReducer from '../feature/counter/counter-slice';
import { employeesApiSlice } from '../feature/employees-api/employees-api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [employeesApiSlice.reducerPath]: employeesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    employeesApiSlice.middleware,
  ],
});
