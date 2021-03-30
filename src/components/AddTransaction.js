import React,{useState,useContext} from "react";
import {GlobalState} from '../context/ContextGlobal';

const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalState);
    let [text,setText] = useState('');
    let [amount,setAmount] = useState(0); 
    const submitTransaction =()=>{
    if(text !== '' && amount !== 0){
        let transaction = {
            text,amount: +amount
        }
        addTransaction(transaction);
        setText('');
        setAmount('');
    }else{
        alert('Please First Fill The Required Field');
    }
    }
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className='row'>
              <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  <div className="row">
                     <div className='col-md-1'></div>
                      <div className='col-12 col-xs-12 col-sm-12 col-md-11 col-lg-11 text-left mt-3'>
                          <h6 className='font-11 font-600'>ADD TRANSACTION</h6>
                      </div>
                         <hr className="bg-white mt-0 mb-2" />
                      <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-2 hover pos-rel'>
                        <div className="row">
                            <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left mt-3'>
                                <h6 className='font-11 font-600'>Text</h6>
                                <input type='text' value={text} onChange={(event)=>{setText(event.target.value)}} placeholder="Enter Text..." className="form-control font-10" />
                            </div>
                            <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left mt-3'>
                                <h6 className='font-11 font-600 mb-0'>Amount</h6>
                                 <span className="font-10 font-600">(Negative-expense,Positive-expense)</span>
                                <input type='number' value={amount} onChange={(event)=>{setAmount(event.target.value)}} placeholder="Enter Amount..." className="form-control font-10" />
                                <button className="btn btn-sm btn-md btn-lg bg-common color-white w-100 font-11 font-700 mt-2 mb-3" onClick={()=>{submitTransaction()}}>Add Transaction</button>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddTransaction;
