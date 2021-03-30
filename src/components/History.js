import React,{useContext} from "react";
import {GlobalState} from '../context/ContextGlobal';

const History = () => {
    const {transactions,deleteTransaction} = useContext(GlobalState);
    let sign = transactions.amount < 0 ? '-' : '+';
    console.log('Data is',transactions);
    const getIndex =(index)=>{
        console.log('/////////////',index);
        deleteTransaction(index);
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
                          <h6 className='font-11 font-600'>HISTORY</h6>
                      </div>
                         <hr className="bg-white mt-0 mb-2" />
                         {
                             transactions && transactions.length > 0 ?(transactions.map((item,index)=>{
                                 return(
                                    <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-2 hover pos-rel' key={index}>
                          <div className='row'>
                              <div className='col-md-1'></div>
                              <div className={item.amount < 0 ? ('col-12 col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-common padding-border-right-negative hover-effect'):('col-12 col-xs-12 col-sm-12 col-md-10 col-lg-10 bg-common padding-border-right-positive hover-effect')}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h6 className="font-13 font-600 color-white">{item.text}</h6>
                                    </div>
                                    <div className='col-md-6 text-right-common'>
                                    <h6 className="font-13 font-600 color-white">{item.amount < 0 ? '-' : '+'}${Math.abs(item.amount)}</h6>
                                    </div>
                                </div>
                              </div>
                              <div className='col-md-1'></div>
                          </div>
                          <div className='pos-abs'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="coral" className="bi bi-trash-fill cursor font-13" viewBox="0 0 16 16" onClick={()=>{
                                getIndex(index)
                            }}>
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                          </div>
                      </div>
                                 )
                             })) : null
                         }
                      
                  </div>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
