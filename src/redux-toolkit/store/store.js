import { configureStore } from '@reduxjs/toolkit';

// all the reducers
import counterReducer from '../feature/counter/counter-slice';
import { todosApiSlice } from '../feature/demo-api/demo-api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todosApiSlice.reducerPath]: todosApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    todosApiSlice.middleware,
  ],
});
