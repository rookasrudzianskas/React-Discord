import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
