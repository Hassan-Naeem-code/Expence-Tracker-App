export default(state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':{
            let clone = state.transactions.slice(0);
            if(clone.length > 0){
                clone.splice(action.payload,1);
            }
            return{
                ...state,
                transactions: clone
            }
        }
        case "ADD_TRANSACTION":{
            let cloneTransaction = state.transactions.slice(0);
            cloneTransaction.push(action.payload);
            return{
             ...state,
             transactions: cloneTransaction
            }
        }
        default:
            return state;
    }
}