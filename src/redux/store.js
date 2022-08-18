import { configureStore } from "@reduxjs/toolkit";
import userReducer from './modules/userSlice';
import { combineReducers, applyMiddleware } from 'redux';
import posts from './modules/posts';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const middlewares = [thunk];
const rootReducer = combineReducers({ posts });
const enhancer = applyMiddleware(...middlewares);

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: {
//         user: userReducer,
//     },
// });

// export default store;

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
  });

export {persistedReducer, store};