import {REGISTER_USER} from '../actions/types';

const initialState = {
    registerResponse:""
}

export default function(state = initialState , action){
    switch(action.type){
        case REGISTER_USER:
            return{
                ...state,
                registerResponse:action.payload
            }
        default:
            return state

    } 
}