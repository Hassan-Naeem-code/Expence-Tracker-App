import React,{createContext,useReducer} from 'react';
import Reducer from './Reducer';

const InitialState = {
    transactions:[
    ]
}

export const GlobalState = createContext(InitialState);


export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,InitialState);

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return(
        <GlobalState.Provider value={{transactions: state.transactions,deleteTransaction,addTransaction}}>{children}</GlobalState.Provider>
    );
}