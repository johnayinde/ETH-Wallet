import React, { useEffect, useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import Actions from '../contextActions';
import { Transaction,TransactionsService } from '../../services/TransactionsService';
import defaults from './../../utils/constants';
import { initAppState ,IAppState} from './IAppState';

// export interface IAppState {
//   transactions: Array<Transaction>;
// }

// export const initAppState: IAppState = {
//   transactions: [],
// };

const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);
  const transactionsService = new TransactionsService(initAppState);



   useEffect(() => {
    Object.values(defaults.pastTransactions).forEach((element, index) => {
      addTransaction({
        id: index,
        to: element.recipient,
        from: defaults.publicAddress,
        value: Number(element.amount),
        date: element.date
      })
    })
    transactionsService.getListOfTransactions().then((data)=>{
      setState({transactions: data})
    })
   }, [])
  
  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };
  
  // TODO: Complete the addTransaction method
  const addTransaction = (transaction: Transaction) => {
     transactionsService.addTransaction(transaction)
    setState({transactions: state.transactions.concat(transaction)})

  }

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
