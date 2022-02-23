export interface ApiState {
    data: []
    loading: boolean
    error: null | string
}

export enum ApiActionTypes {
    FETCH_API = 'FETCH_API',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
}

export interface PaintingState {
    paintings: Array<number>
    modyfied: boolean
}

export enum PaintingActionTypes {
    FETCH_PAINTINGS = 'FETCH_PAINTINGS',
}

export interface PaintingAction {
    type: PaintingActionTypes.FETCH_PAINTINGS
    payload: number
}

interface FetchApiAction {
    type: ApiActionTypes.FETCH_API
}
interface FetchApiSuccessAction {
    type: ApiActionTypes.FETCH_API_SUCCESS
    payload: []
}
interface FetchApiErrorAction {
    type: ApiActionTypes.FETCH_API_ERROR
    payload: string
}

export type ApiAction =
    | FetchApiAction
    | FetchApiErrorAction
    | FetchApiSuccessAction
