import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
// import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
// import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootReducer";
import {
    configureStore,
    getDefaultMiddleware,
  } from '@reduxjs/toolkit';
const PersistConfig = {
  key: "root",
  storage,
};
const persistedConfig = persistReducer(PersistConfig, rootReducer);

// const store =createStore(rootReducer,composeWithDevTools( applyMiddleware(logger)))
const store = configureStore(
    {
        reducer:persistedConfig,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: getDefaultMiddleware({
            serializableCheck: false, 
            // {
            //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
          }),
    }
);
const persistor = persistStore(store);

export default store;
export { persistor };
