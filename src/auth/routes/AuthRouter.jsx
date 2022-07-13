import React from 'react'
import { Navigate, LoginPage, RegisterPage } from '../pages'

export const AuthRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/login"    element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/*" element={ <Navigate to="/auth/login" />} />
    </Routes>
    </>
  )
}
