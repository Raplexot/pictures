import { Dispatch } from 'react'
import { PaintingAction, PaintingActionTypes } from '../types'

export const getPaint = (paint: number) => {
    return async (dispatch: Dispatch<PaintingAction>) => {
        dispatch({ type: PaintingActionTypes.FETCH_PAINTINGS, payload: paint })
    }
}
