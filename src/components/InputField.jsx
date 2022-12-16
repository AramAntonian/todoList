import { useRef } from "react"
import { useDispatch } from "react-redux"
import {v4 as uuid} from "uuid"
import ToDos from "./ToDos"

function InputField(){
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function HandleAdd(){
        dispatch({
            type:"add",
            payload:{
                id:uuid(),
                text:inputRef.current.value,
            }
        })
        inputRef.current.value = ""
    } 


    return(
        <>
            <input  type = "text" ref = {inputRef} />
            <button onClick={HandleAdd}>Add</button>
            <ToDos />
        </>
    )
}


export default InputField