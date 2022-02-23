import axios from 'axios'
import { Dispatch } from 'react'
import { ApiAction, ApiActionTypes } from '../types'

export const fetchApi = () => {
    return async (dispatch: Dispatch<ApiAction>) => {
        try {
            dispatch({ type: ApiActionTypes.FETCH_API })
            const response = await axios.get(
                ' https://reqres.in/api/users?delay=3'
            )
                
            dispatch({
                type: ApiActionTypes.FETCH_API_SUCCESS,
                payload: response.data,
            })
        } catch (e) {
            dispatch({
                type: ApiActionTypes.FETCH_API_ERROR,
                payload: 'Error of download',
            })
        }
    }
}
