import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AppRouter } from '../app/routes/ApplicationRouter';
import { AuthRouter } from '../auth/routes/AuthRouter';


export const ApplicationRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/*"      element={<AppRouter/>} />
        </Routes>
    </>
  )
}
