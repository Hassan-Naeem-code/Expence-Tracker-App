import logo from './logo.svg';
import './custom.css';
import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import SeperateCommon from './components/SeperateCommon';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/ContextGlobal';
export const App = () => {
  return (
    <GlobalProvider>
      <div className="container max-width">
       <Header />
       <Balance />
       <SeperateCommon />
       <History />
       <AddTransaction />
      </div>
    </GlobalProvider>
  )
}


export default App;
