import { useActionsPaint, useActionsApi } from '../Hooks/useActions'
import { useTypedSelector } from '../Hooks/useTypedSelector'

export const buyButton = (): JSX.Element => {
    const paint = useTypedSelector((state) => state.paint)
    const api = useTypedSelector((state) => state.api)
    const { getPaint } = useActionsPaint()
    const { fetchApi } = useActionsApi()

    return (
        <button className="buyButton" id="one" onClick={() => getPaint(1)}>
            {paint.paintings.includes(1) ? '✓ В корзине' : 'Купить'}
        </button>
    )
}
