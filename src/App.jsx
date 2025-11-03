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
import CardInfo from './pages/CardInfo'
import { useSelector } from 'react-redux'
import VerifyEmailCode from './pages/VerifyEmailCode'

function App() {
  const {user} = useSelector(state=>state.auth) // bu yerda haqiqiy autentifikatsiya holatini tekshirish kerak
  // const {user}=useSelector(state=>state.auth)

  console.log(user, 'user');
  

  const adDetail = {
  id: 1,
  user_id: 42,
  category_id: 3,
  location_id: 10,
  title: "Chevrolet Cobalt 2022, avtomat, 1 egadan",
  slug: "chevrolet-cobalt-2022-avtomat",
  description:
    "Mashina a’lo holatda. Texnik jihatdan soz, hech qanday muammo yo‘q. 1 egadan, o‘z vaqtida texko‘rikdan o‘tgan. Konditsioner, multimedia tizimi va parkovka sensori mavjud. Saloni toza, mashina original bo‘yoqda.",
  price: 125_000_000,
  currency: "UZS",
  condition: "Ishlatilgan",
  status: "active",
  is_premium: true,
  premium_until: "2025-11-15T00:00:00Z",
  views: 248,
  contacts: "+998901234567",
  created: "2025-10-28T12:30:00Z",
  updated: "2025-10-30T09:10:00Z",
  deleted: null,
  location: "Toshkent shahri, Chilonzor tumani",
  images: [
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8460153/pexels-photo-8460153.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
}

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
        {
          path: '/card-info',
          element: <CardInfo {...adDetail} />,
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
      path: '/verify',
      element: user ? <Navigate to={'/'} /> : <VerifyEmailCode />,
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
