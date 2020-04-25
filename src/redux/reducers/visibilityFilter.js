import { SET_FILTER } from '../actions/actionTypes'
import { VISIBILITY_FILTERS } from '../../constants'

const initialState = { filter: VISIBILITY_FILTERS.ALL }

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_FILTER: {
            return { filter: action.payload.filter }
        }
        default:
            return state
    }
}