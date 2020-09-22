import {TodoData} from '../Data/data'
export const initialState = TodoData

export const reducer = (state,action)=>{
    if (action.type =="ADD"){
        const values = [...state]
        values.push(action.payload)
        return values
    }
    if (action.type == "DELETE"){
        let i = 0
        const values = [...state]
        for(i=0;i<values.length;i++){
            if (values[i].id == action.payload.id){
                break
            }
        }
        values.splice(i,1)
        return values
    }
    return state
}