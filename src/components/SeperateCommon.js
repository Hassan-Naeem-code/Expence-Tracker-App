import React,{useContext} from "react";
import {GlobalState} from '../context/ContextGlobal';

const SeperateCommon = () => {
    const {transactions} = useContext(GlobalState);
    console.log(transactions);
    const amount = transactions.map(transaction => transaction.amount);
    let income = 0;
    let expense = 0;
    let secondExpense = 0;
    if(amount.length > 0){
     income = amount.filter(item=>item > 0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
     expense = amount.filter(item=>item < 0);
     if(expense.length > 0){
         secondExpense = expense.reduce((acc,item)=>(acc+=item,0)*-1).toFixed(2)
     }
     else{
         secondExpense = expense;
     }
    console.log(amount.filter(item=>item<0),"jvcdgc");
    }
  
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 bg-common">
          <div className='row'>
              <div className='col-md-6 border-right'>
                  <div className="row">
                      <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-3'>
                          <h6 className='font-11 font-600'>INCOME</h6>
                          <h6 className='font-13 font-600 color-white'>${income}</h6>
                      </div>
                  </div>
              </div>
              <div className="mobile-show">
                  <hr className="bg-white-new m-0" />
              </div>
              <div className='col-md-6 border-left'>
                    <div className="row">
                            <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-3'>
                                <h6 className='font-11 font-600'>EXPENSE</h6>
                                <h6 className='font-13 font-600 color-white'>${secondExpense}</h6>
                            </div>
                    </div>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SeperateCommon;
