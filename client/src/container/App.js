import React,{createContext,useReducer}from 'react';
import List from '../components/List/List'
import InputData from '../components/Input Field/inputData'
import {Appdiv,AppH1} from './AppCss'
import {initialState, reducer } from '../Reducer/Reducer';

export const UserContext = createContext()

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state:state,dispatch:dispatch}}>
    <Appdiv>
      <AppH1>This is react app</AppH1>
      <InputData/>
      <List
      data = {state}
      />
    </Appdiv>
    </UserContext.Provider>
  );
}

export default App;
