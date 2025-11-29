import React from 'react';
import Signup from './Signup';
import Login from './login';
import Home from './Home';
import C_Password from './C_Password';
import F_Password from './F_Password';
import View from './View';
import Edit from './Edit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App(){
  return(
    <div>
      <Router>
        <Link to='/signup'>Signup</Link> |  
        <Link to='/login'>Login</Link> |  
        <Link to='/home'>Home</Link> |  
        <Link to='/change_password'>Change Password</Link> |
        <Link to='/forgot_password'>Forgot Password</Link> |
        <Link to='/View'>View</Link> | 
        <Link to='/edit'>Edit</Link> | 
        <Routes>
          <Route element={<Signup/>} path='/signup'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Home/>} path='/home'/>
          <Route element={<C_Password/>} path='/change_password'/>
          <Route element={<F_Password/>} path='/forgot_password'/>
          <Route element={<View/>} path='/View'/>
          <Route element={<Edit/>} path='/edit'/>
        </Routes>
      </Router>
    </div>   
  )
}
export default App;