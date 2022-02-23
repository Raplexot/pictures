import { PaintingAction, PaintingActionTypes, PaintingState } from './types'

const initialState: PaintingState = {
    paintings: [],
    modyfied: false,
}

export const paintingsReducer = (
    state = initialState,
    action: PaintingAction
): PaintingState => {
    switch (action.type) {
        case PaintingActionTypes.FETCH_PAINTINGS:
            return !state.paintings.includes(action.payload) ? {
                paintings: [...state.paintings, action.payload],
                modyfied: true
            }
                : {
                    paintings: [...state.paintings],
                    modyfied: false
                }

        default:
            return state
    }
}
