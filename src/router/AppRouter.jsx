import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ApplicationRouter } from '../app/routes/ApplicationRouter';
import { AuthRouter } from '../auth/routes/AuthRouter';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/*"      element={<ApplicationRouter/>} />
        </Routes>
    </>
  )
}
