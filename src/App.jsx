import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import SideBarWrapper from './components/SideBar/SideBarWrapper';
import MainWrapper from './components/main/MainWrapper';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className='text-primary'>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Provider store={store}>
      {/*  */}
      <div className='flex general'>
        <SideBarWrapper />
        <MainWrapper />
      </div>
    </Provider>
  );
}

export default React.memo(App);
