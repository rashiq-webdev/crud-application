import React from 'react';
import './App.css';
import Userform from './components/Userform';
import Userlist from './components/Userlist';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Useredit from './components/Useredit';
import List from './components/List';

function App()
{
  return (
    <div >
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Userform/>}/>
        <Route path='/userlist' element={<Userlist/>}/>
        <Route path='/useredit' element={<Useredit/>}/>
      </Routes>
      </BrowserRouter>
      {/* <List/> */}
    </div>
  );
}

export default App;
