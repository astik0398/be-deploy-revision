import axios from "axios"
import { POST_CONTACT_FAILURE, POST_CONTACT_REQ, POST_CONTACT_SUCCESS } from "./actionType"

export const postContact = (obj)=> (dispatch)=> {

    dispatch({type: POST_CONTACT_REQ})
    axios.post('https://shy-overcoat-elk.cyclic.app/user/contacts', obj)
    .then(function(res){
      console.log(res);
      dispatch({type: POST_CONTACT_SUCCESS, payload: res.data})
    })
    .catch(function(){
        dispatch({type: POST_CONTACT_FAILURE})
    })
}

// export const deleteContact = (id)=> (dispatch)=>{
//   dispatch({type: POST_CONTACT_REQ})

//   axios.delete(`https://shy-overcoat-elk.cyclic.app/user/${id}`)

// }