import { combineReducers } from 'redux'
import { apiReducer } from './api'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configure } from '@testing-library/react'
import { paintingsReducer } from '../paintings'

export const rootReducer = combineReducers({
    api: apiReducer,
    paint: paintingsReducer,
})
// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const persister = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
