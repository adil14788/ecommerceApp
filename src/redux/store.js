import { configureStore, combineReducers } from "@reduxjs/toolkit";


import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import wishListReducer from "./wishListRedux";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: ['cart']
};

// const cartPersist = {
//     key: 'cart',
//     version: 1,
//     storage: storage,
//     whitelist: ['cart'],
// }

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    wishlist: wishListReducer
});

// const rootReducer = combineReducers({
//     cart: persistReducer(cartPersist, cartReducer),
//     user: userReducer,
//     wishlist: wishListReducer
// });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);