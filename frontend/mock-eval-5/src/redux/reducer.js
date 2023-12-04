import { POST_CONTACT_FAILURE, POST_CONTACT_REQ, POST_CONTACT_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    contacts: []
}

export const reducer = (state = initialState, action)=> {

    switch(action.type){
        case POST_CONTACT_REQ:
             return {...state, isLoading: true}

        case POST_CONTACT_SUCCESS:
            return {...state, isLoading: false, contacts: [...state.contacts, action.payload]}    
            
        case POST_CONTACT_FAILURE:
            return {...state, isLoading:false, isError: true}
            
        default:
            return state    
    }
}