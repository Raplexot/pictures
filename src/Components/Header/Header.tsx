import logo from '../../images/logo1.png'
import './Header.scss'

const Header = (): JSX.Element => {
    return (
        <div className="headerContainer">
            <div className="logoLinks">
                <span className="logo1">
                    <img className="logo" src={logo} />
                </span>

                <nav className="links">
                    <a className="nav" href="#">
                        Каталог
                    </a>
                    <a className="nav" href="#">
                        Доставка
                    </a>
                    <a className="nav" href="#">
                        Оплата
                    </a>
                    <a className="nav" href="#">
                        Контакты
                    </a>
                    <a className="nav" href="#">
                        О галерее
                    </a>
                </nav>
            </div>
            <div className="finder">
                <input
                    className="findInput"
                    type={'text'}
                    placeholder={'Поиск по названию картины'}
                />
                <button className="findButton">Найти</button>
            </div>
        </div>
    )
}

export default Header
