import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store, { persistor } from './Components/state'
import { PersistGate } from 'redux-persist/integration/react'
// import { persister } from './Components/state/reducers/index'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,

    document.getElementById('root')
)
