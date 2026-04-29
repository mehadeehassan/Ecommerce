import React from 'react'
import { Outlet } from "react-router-dom";
import LoginPage from '../Pages/Login/Login';
import SignInPage from '../Pages/Login/SignUp';


const LoginLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LoginLayout
