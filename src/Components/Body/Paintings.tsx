import './Paintings.scss'
import Venus from '../../images/Venus.jpg'
import dinner from '../../images/dinner.jpg'
import creation from '../../images/creation.jpeg'
import anatomy from '../../images/Anatomy.jpg'
const Paintings = (): JSX.Element => {
    return (
        <div className="paintingsContainer">
            <div className="paintingsTitle">Картины эпохи возрождения</div>

            <div className="paintings">
                <div className="picture">
                    <img src={Venus} className="paint" />
                    <div className="description">
                        <div className="title">"Рождение Венеры"</div>
                        <div className="author">Сандро Боттичелли</div>
                        <div className="priceButton">
                            <div className="prices">
                                <div className="firsPrice">2 000 000$</div>
                                <div className="newPrice">1 000 000$</div>
                            </div>
                            <button className="buyButton">Купить</button>
                        </div>
                    </div>
                </div>
                <div className="picture">
                    <img src={dinner} className="paint" />
                    <div className="description">
                        <div className="title">"Тайная вечеря"</div>
                        <div className="author">Леонардо да Винчи</div>
                        <div className="priceButton">
                            <div className="prices">
                               
                                <div className="newPrice">3 000 000$</div>
                            </div>
                            <button className="buyButton">Купить</button>
                        </div>
                    </div>
                </div>
                <div className="picture">
                    <img src={creation} className="paint" />
                    <div className="description">
                        <div className="title">"Сотворение Адама"</div>
                        <div className="author">Микеланджело</div>
                        <div className="priceButton">
                            <div className="prices">
                                <div className="firsPrice">6 000 000$</div>
                                <div className="newPrice">5 000 000$</div>
                            </div>
                            <button className="buyButton">Купить</button>
                        </div>
                    </div>
                </div>
                <div className="picture">
                    <img src={anatomy} className="paint" />
                    <div className="description">
                        <div className="title">"Урок анатомии"</div>
                        <div className="author">Рембрандт</div>
                        <div className="priceButton">
                            <div className='sold'>Продана на аукнионе</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paintings
