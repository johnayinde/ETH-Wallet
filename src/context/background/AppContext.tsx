import { createContext } from 'react';
import { Transaction } from '../../services/TransactionsService';
import { initAppState,IAppState } from './IAppState';
// import { IAppState, initAppState } from './AppState';

type ContextType = {
  state: IAppState,
  addTransaction: (transaction: Transaction) => void
  setState: (state: IAppState) => void
}

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {}
});

export default AppContext;
