import { useState } from 'react'

import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ProtectedRoutes from './components/protect/ProtectedRoutes'
import Login from './pages/Login'
import Register from './pages/Register'
import Favorites from './pages/Favorites'
import ElonOferta from './pages/ElonOferta'

function App() {
  const user = false // bu yerda haqiqiy autentifikatsiya holatini tekshirish kerak

  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/favorites',
          element: <Favorites />,
        },
      ],
    },
    {
      path: '/login',
      element: user ? <Navigate to={'/'} /> : <Login />,
    },
    {
      path: '/register',
      element: user ? <Navigate to={'/'} /> : <Register />,
    },
    {
      path: '/oferta',
      element: <ElonOferta/>
    },
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
