import { PaintingAction, PaintingActionTypes, PaintingState } from './types'

const initialState: PaintingState = {
    paintings: [],
}

export const paintingsReducer = (
    state = initialState,
    action: PaintingAction
): PaintingState => {
    switch (action.type) {
        case PaintingActionTypes.FETCH_PAINTINGS:
            return { paintings:!state.paintings.includes(action.payload)?
                [...state.paintings, action.payload]:state.paintings }

        default:
            return state
    }
}
