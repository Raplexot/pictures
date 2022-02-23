import './Paintings.scss'
import Venus from '../../images/Venus.jpg'
import dinner from '../../images/dinner.jpg'
import creation from '../../images/creation.jpeg'
import anatomy from '../../images/Anatomy.jpg'
import { observer } from 'mobx-react-lite'
import { useActionsApi, useActionsPaint } from '../Hooks/useActions'
import { useTypedSelector } from '../Hooks/useTypedSelector'
import { useEffect } from 'react'

const Paintings = (): JSX.Element => {
    // const toggle = (): void => {
    //     const elem = document.getElementById('mask')!
    //     elem.removeAttribute('hidden')

    //     elem.setAttribute('hidden', 'false')
    // }
    const paint = useTypedSelector((state) => state.paint)
    const api = useTypedSelector((state) => state.api)
    const { getPaint } = useActionsPaint()
    const { fetchApi } = useActionsApi()

    return (
        <div className="paintingsContainer">
            {/* <div>
    <div id="mask"  className='mask'> <div className="loader"></div></div>
    </div> */}
            <div className="paintingsTitle">Картины эпохи Возрождения</div>

            <div className="paintings">
                <div className="picture">
                    <img src={Venus} alt="Masterpiece" className="paint" />
                    <div className="description">
                        <div className="title">"Рождение Венеры"</div>
                        <div className="author">Сандро Боттичелли</div>
                        <div className="priceButton">
                            <div className="prices">
                                <div className="firsPrice">2 000 000$</div>
                                <div className="newPrice">1 000 000$</div>
                            </div>
                            <button
                                className="buyButton"
                                id="one"
                                onClick={() => getPaint(1)}
                            >
                                {paint.paintings.includes(1)
                                    ? '✓ В корзине'
                                    : 'Купить'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="picture">
                    <img src={dinner} alt="Masterpiece" className="paint" />
                    <div className="description">
                        <div className="title">"Тайная вечеря"</div>
                        <div className="author">Леонардо да Винчи</div>
                        <div className="priceButton">
                            <div className="prices">
                                <div className="newPrice">3 000 000$</div>
                            </div>

                            <button
                                className="buyButton"
                                onClick={() => getPaint(2)}
                            >
                                <div>
                                    <div id="mask" className="mask">
                                        {' '}
                                        <div
                                            hidden={true}
                                            className="loader"
                                        ></div>
                                    </div>
                                </div>{' '}
                                {paint.paintings.includes(2)
                                    ? '✓ В корзине'
                                    : 'Купить'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="picture">
                    <img src={creation} alt="Masterpiece" className="paint" />
                    <div className="description">
                        <div className="title">"Сотворение Адама"</div>
                        <div className="author">Микеланджело</div>
                        <div className="priceButton">
                            <div className="prices">
                                <div className="firsPrice">6 000 000$</div>
                                <div className="newPrice">5 000 000$</div>
                            </div>
                            <button id="buy" hidden className="buyButton">
                                ✓ В корзине
                            </button>
                            <button
                                id="bought"
                                className="buyButton"
                                onClick={() => {
                                    getPaint(3)
                                }}
                            >
                                {paint.paintings.includes(3)
                                    ? '✓ В корзине'
                                    : 'Купить'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="picture">
                    <img src={anatomy} alt="Masterpiece" className="paint" />
                    <div className="description">
                        <div className="title">"Урок анатомии"</div>
                        <div className="author">Рембрандт</div>
                        <div className="priceButton">
                            <div className="sold">Продана на аукнионе</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paintings
