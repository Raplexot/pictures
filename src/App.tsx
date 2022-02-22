import './App.scss'
import Paintings from './Components/Body/Paintings'
import Header from './Components/Header/Header'

function App(): JSX.Element {
    return (
        <div className="App">
            <Header />
            <Paintings />
        </div>
    )
}

export default App
