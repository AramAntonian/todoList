import { useDispatch, useSelector } from "react-redux"

function ToDos(){
    const todo = useSelector(state => state)
    const dispatch = useDispatch()

    function handleDelete(event){
        dispatch(
            {
                type:"delete",
                payload:{
                    id:event.target.id
                },
            }
        )
    }

    return(
        <ul>
        {
            todo.map((e)=>(
                <li key = {e.id} ><pre>{e.text}       <button id = {e.id} onClick = {(event)=>handleDelete(event)}>x</button></pre></li>
            ))
        }
    </ul>
    )
}

export default ToDos