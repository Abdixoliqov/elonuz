import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans my-10">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-6 px-6 md:grid-cols-2">
        {/* Chap tomon – forma */}
        <div className="flex w-full flex-col items-center justify-center md:items-start">
          <div className="w-full max-w-sm bg-white">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800 md:text-left">
              Ro‘yxatdan o‘tish
            </h2>

            {/* Google bilan ro‘yxatdan o‘tish */}
            <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 py-3 transition hover:bg-gray-50">
              <FcGoogle size={22} />
              <span>Google orqali ro‘yxatdan o‘tish</span>
            </button>

            {/* Facebook bilan ro‘yxatdan o‘tish
            <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition mb-6 text-blue-600">
              <FaFacebook size={22} />
              <span>Facebook orqali ro‘yxatdan o‘tish</span>
            </button> */}

            <div className="mb-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">yoki email orqali</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            {/* Email */}
            <label className="mb-1 block text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="mb-4 w-full border-b-2 border-gray-300 py-2 transition outline-none focus:border-green-500"
            />

            {/* Parol */}
            <label className="mb-1 block text-sm text-gray-600">Parol</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full border-b-2 border-gray-300 py-2 pr-10 transition outline-none focus:border-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-0 text-gray-500 transition hover:text-green-600"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Parol tasdig‘i */}
            <label className="mb-1 block text-sm text-gray-600">Parol tasdig‘i</label>
            <div className="relative mb-4">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full border-b-2 border-gray-300 py-2 pr-10 transition outline-none focus:border-green-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute top-2 right-0 text-gray-500 transition hover:text-green-600"
              >
                {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Ism va familiya */}
            <label className="mb-1 block text-sm text-gray-600">Ismingiz</label>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="mb-4 w-full border-b-2 border-gray-300 py-2 transition outline-none focus:border-green-500"
            />

            <label className="mb-1 block text-sm text-gray-600">Familiyangiz</label>
            <input
              type="text"
              placeholder="Familiyangizni kiriting"
              className="mb-4 w-full border-b-2 border-gray-300 py-2 transition outline-none focus:border-green-500"
            />

            {/* Shartlarga rozilik */}
            <div className="mb-6 flex items-center">
              <input type="checkbox" id="terms" className="mr-2 accent-green-500" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Saytdan foydalanish{' '}
                <Link to={'/oferta'}>
                <span className="cursor-pointer text-green-500 hover:underline">shartlariga</span>{' '}
                </Link>
                roziman
              </label>
            </div>

            {/* Ro‘yxatdan o‘tish tugmasi */}
            <button className="mb-4 w-full rounded-md bg-green-500 py-3 font-medium text-white transition hover:bg-green-600">
              Ro‘yxatdan o‘tish
            </button>

            <div className="text-center text-sm text-gray-500">
              Allaqachon ro‘yxatdan o‘tganmisiz?{' '}
              <Link to={'/login'}>
                <span className="cursor-pointer text-green-500 hover:underline">Kirish</span>
              </Link>
            </div>
          </div>
        </div>

        {/* O‘ng tomondagi rasm */}
        <div className="hidden justify-center md:flex">
          <img src="logo.svg" alt="Register illustration" className="w-[80%] max-w-md" />
        </div>
      </div>
    </div>
  )
}
