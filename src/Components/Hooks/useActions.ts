import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PaintingActionCreators from '../state/action-creator/paintings'
import * as ApiActionCreators from '../state/action-creator/api'

export const useActionsApi = (): typeof ApiActionCreators => {
    const dispatch = useDispatch()
    return bindActionCreators(ApiActionCreators, dispatch)
}

export const useActionsPaint = (): typeof PaintingActionCreators => {
    const dispatch = useDispatch()
    return bindActionCreators(PaintingActionCreators, dispatch)
}
