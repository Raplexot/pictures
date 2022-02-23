import React, { useEffect } from 'react'
import { useActionsPaint, useActionsApi } from '../Hooks/useActions'
import { useTypedSelector } from '../Hooks/useTypedSelector'
import { fetchApi } from '../state/action-creator/api'
import { getPaint } from '../state/action-creator/paintings'

export const BuyButton = (prop: { num: number }): JSX.Element => {
    const paint = useTypedSelector((state) => state.paint)
    const api = useTypedSelector((state) => state.api)
    const { getPaint } = useActionsPaint()
    const { fetchApi } = useActionsApi()

    const handleClick = (e : React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        fetchApi();
        getPaint(prop.num);
    }

    return (
        <button
            className="buyButton"
            id="one"
            onClick={handleClick}
        >
            <div>
                {!paint.paintings.includes(prop.num) ?
                    <div>Купить</div> :
                    (api.loading && paint.modyfied) ?
                        <div id="mask" hidden={true} className="mask">
                            {' '}
                            <div className="loader"></div>
                        </div> :
                        <div>✓ В корзине</div>
                }
            </div>
        </button>
    )

}
// export const BuyButton = (prop: { num: number }): JSX.Element => {
//     const paint = useTypedSelector((state) => state.paint)
//     const api = useTypedSelector((state) => state.api)
//     const { getPaint } = useActionsPaint()
//     const { fetchApi } = useActionsApi()

//     function pursache(e: number): JSX.Element {
//         useEffect(() => {
//             fetchApi()
//             getPaint(e)
//         }, [])

//         if (api.loading) {
//             return (
//                 <div>
//                     <div id="mask" hidden={true} className="mask">
//                         {' '}
//                         <div className="loader"></div>
//                     </div>
//                 </div>
//             )
//         }
//         return <div>✓ В корзине</div>
//     }

//     return (
//         <button className="buyButton" id="one" onClick={() => getPaint(1)}>
//             {paint.paintings.includes(prop.num) ? '✓ В корзине' : 'Купить'}
//         </button>
//     )
// }

// export const pursache = (prop: { num: number }): JSX.Element => {
//     const paint = useTypedSelector((state) => state.paint)
//     const api = useTypedSelector((state) => state.api)
//     const { getPaint } = useActionsPaint()
//     const { fetchApi } = useActionsApi()

//     useEffect(() => {
//         fetchApi()
//         getPaint(prop.num)
//     }, [])

//     if (api.loading) {
//         return (
//             <div>
//                 <div id="mask" hidden={true} className="mask">
//                     {' '}
//                     <div className="loader"></div>
//                 </div>
//             </div>
//         )
//     }
//     return <div>✓ В корзине</div>
// }