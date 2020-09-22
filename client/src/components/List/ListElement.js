import React from'react'
import {Div,Button} from'./ListElementCss'
const ListElement = (props)=>{
    return(
        // Returning the indivisual list
        <Div>
            <p>{props.description}</p>
            <Button onClick={()=>props.Click(props)}>Delete</Button>
        </Div>
    )
}

export default ListElement