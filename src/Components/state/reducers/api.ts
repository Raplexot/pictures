import { ApiAction, ApiActionTypes, ApiState } from '../types'

const initialState: ApiState = {
    data: [],
    loading: false,
    error: null,
}

export const apiReducer = (
    state = initialState,
    action: ApiAction
): ApiState => {
    switch (action.type) {
        case ApiActionTypes.FETCH_API:
            return { loading: true, error: null, data: [] }

        case ApiActionTypes.FETCH_API_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload,
            }

        case ApiActionTypes.FETCH_API_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: [],
            }

        default:
            return state
    }
}
