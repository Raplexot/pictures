import './App.scss'
import Paintings from './Components/Body/Paintings'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App(): JSX.Element {
    return (
        <div className="App">
            <Header />
            <Paintings />
            <Footer/>
        </div>
    )
}

export default App
