import {SEARCH_USERS,
    GET_USERS,
    GET_REPOS,
    CLEAR_USERS,
    SET_LOADING} from '../types'

export default (state,action)=>{
    switch(action.type){
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading:false
            }
        case CLEAR_USERS:
            return {
                ...state,
                loading:false,
                users:[],
                user:{},

            }
        case GET_USERS:
            return {
                    ...state,
                    user: action.payload,
                    loading:false
                }
        
        case SET_LOADING:

            return {
                ...state,
                loading:true
            }
        case SEARCH_USERS:
            
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        default:
            return state
    }

}
