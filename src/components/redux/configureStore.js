import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import greetingReducer from './greeting';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
