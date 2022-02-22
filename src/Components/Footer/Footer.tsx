import React from 'react';
import logo from '../../images/logo1.png'
import phone from '../../images/phone.png'
import jps from '../../images/jps.png'

import './Footer.scss'
const Footer = ():JSX.Element => {
    return (
        <div className="footerContainer">
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
            <div className="contacts">
                <img className="phone" src={phone}/>
                <div className="phoneNumber">+380(99)999-99-99</div>
                <img className='jps' src={jps}/>
                <div className='adress'>г.Харьков,ул.Академика Павлова,24</div>
            </div>
        </div>
    )
}

export default Footer;