import React,{useContext} from 'react'
import ListElement from './ListElement'
import {UserContext} from '../../container/App'
const List = (props)=>{
    const {state,dispatch}= useContext(UserContext)
    const deleteItem = (item)=>{
        const data = {"id":item.id,"description":item.description}
        dispatch({type:"DELETE",payload:data})
    }
    return(
        <div>
            <div>
                {/* Returning the whole list */}
            {props.data.map(item=>{
                return(
                    <ListElement
                    key = {item.id}
                    id = {item.id}
                    description = {item.description}
                    Click = {(item)=>deleteItem(item)} 
                    />
                )
            })}
            </div>
        </div>
        
    )
}

export default List