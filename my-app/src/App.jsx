import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './components/menu/menu';
import './styles/global.scss';
import './App.scss';

class App extends React.Component {
  render () {
    return (
      <>
      <header className='header-second'>
          <div className='wrapper'>
            <div className='container'>
              <Menu />
            </div>
        </div>
      </header>
        
         <Outlet />
      </>
        
  );
  }
  
}
export default App;
