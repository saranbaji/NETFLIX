import React from 'react'
import { BrowserRouter,Routes,Router,Link, Route } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { LoginContext } from '../utils/LoginContext';

const Body = () => {
  return (
    <LoginContext.Provider value={{isUserlogin:false}}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/browse" element={<Browse/>}/>
          </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  )
}

export default Body