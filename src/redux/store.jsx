import { createStore } from "redux";

const store = createStore((state,action) =>{
    if(action.type === "add"){
        return [
            ...state,
             action.payload
            
        ]
    }
    else if(action.type === "delete"){
        console.log(state,action.type.id)
        return state.filter((el) => el.id !== action.payload.id)
    }
    else  return state
},[])


export default store