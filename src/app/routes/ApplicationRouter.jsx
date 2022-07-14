import React from 'react'
import { Navigate, Routes, Route } from "react-router-dom";
import { AppPage } from '../pages'

export const ApplicationRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/"  element={ <AppPage /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
    </>
  )
}
