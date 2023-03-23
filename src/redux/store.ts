/* eslint-disable import/no-cycle */
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import createRootReducer from "./reducers/rootReducer";
import rootSaga from "./rootSaga";
import { persistConfig } from "./persistConfig";

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, createRootReducer());

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(sagaMiddleware),
    preloadedState: {},
})

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;