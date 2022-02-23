import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './state/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export default store
export { persistor }
// store.subscribe(() => console.log(store.getState()));
