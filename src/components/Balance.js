import React,{useContext} from "react";
import {GlobalState} from '../context/ContextGlobal';
const Balance = () => {
    const {transactions} = useContext(GlobalState);
    console.log('Data',transactions);
    let amount = transactions.map(transaction => transaction.amount);
    let total = 0;
    if(amount.length > 0){
        total = amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    }
   
    console.log('total',total);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-11 col-lg-11 mobile-center">
          <h6 className="font-12 font-700">YOUR BALANCE</h6>
          <h6 className="font-12 font-700">${total}</h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Balance;
