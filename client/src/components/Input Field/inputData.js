import React,{useState,useContext} from 'react'
import {Input,Button} from'./InputDataCss'
import {UserContext} from '../../container/App'

const InputData = ()=>{
    const{state,dispatch} = useContext(UserContext)
    const[value1,setValue] = useState("")
    const Inputvalue=(value1)=>{
        const data = value1.trim()
        if (data.length>=1){
            const data = {"id":Date.now(),"description":value1}
        dispatch({type:"ADD",payload:data})
        }
    }
    return(
        <div>
            <Input type = "text"
            placeholder="Enter Task to Do"
            value = {value1} 
            onChange = {(e)=>setValue(e.target.value)}
            />
            <Button onClick = {()=>Inputvalue(value1)}>Add</Button>
        </div>
    )

}

export default InputData