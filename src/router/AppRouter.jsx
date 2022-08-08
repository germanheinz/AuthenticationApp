import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { ApplicationRouter } from '../app/routes/ApplicationRouter';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { CheckingAuth } from '../ui/components/CheckingAuth';


export const AppRouter = () => {

  const { status } = useCheckAuth();

  console.log(status);
  
  if (status === 'Verifying...') {
    console.log("Entró Veri");
    return <CheckingAuth/>
  }

  return (
    <>
        <Routes>
          {
            (status === 'Authenticated') 
            ? <Route path="/*"      element={<ApplicationRouter/>} />
            : <Route path="/auth/*" element={<AuthRouter />} />            
          }

          <Route path="/*" element={<Navigate to='/auth/login' /> } />

        </Routes>
    </>
  )
}
