import { useState } from 'react'

import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ProtectedRoutes from './components/protect/ProtectedRoutes'
import Login from './pages/Login'

function App() {
  const user = true // bu yerda haqiqiy autentifikatsiya holatini tekshirish kerak

  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes user={user} >
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: '/login',
      element: user ? <Navigate to={'/'} /> : <Login />,
    },
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
