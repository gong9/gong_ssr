import React from 'react';
import { Route } from 'react-router-dom'
import Home from './conponment/Home/index'
import Login from './conponment/Login/index'
export default (
    <>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
    </>
)