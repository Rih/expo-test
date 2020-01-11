import { AUTHER, SAVE_SOMETHING } from '../actions/auth'

const initialState = {
    payload = []
}


export default (state = initialState, action) => {
    switch(action.type){
        case AUTHER:
            return {
                ...state,
                payload: action.payload
            }
        case SAVE_SOMETHING:
            return {
                ...state,
                payload: []
            }
        
        default:
            return {
                ...state,
            }
    }
}