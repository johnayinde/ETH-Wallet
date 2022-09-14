import AppState from './context/background/AppState';
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Account from './pages/Account';
import BackroundContainer from './components/BackroundContainer';
import SendETH from './pages/SendETH';
import SuccessPage from './pages/SuccessPage';
const App = () => {
  return (
    <AppState>
		<BackroundContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={ <Account/>}/>
          <Route path='/send'  element={ <SendETH/>}/>
          <Route path='/success'  element={ <SuccessPage/>}/>
      </Routes>
      </BrowserRouter>
      </BackroundContainer>
    </AppState>
  );
};

export default App;
