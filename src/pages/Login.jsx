import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-6 px-6 md:grid-cols-2">
        {/* Chap tomondagi forma */}
        <div className="flex w-full flex-col items-center justify-center md:items-start">
          <div className="w-full max-w-sm">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800 md:text-left">
              Tizimga kirish
            </h2>

            {/* Google bilan kirish */}
            <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 py-3 transition hover:bg-gray-50">
              <FcGoogle size={22} />
              <span>Google bilan kirish</span>
            </button>

            <div className="mb-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">yoki</span>
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
            <div className="relative mb-6">
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

            {/* Kirish tugmasi */}
            <button className="mb-4 w-full rounded-md bg-green-500 py-3 font-medium text-white transition hover:bg-green-600">
              Kirish
            </button>

            <div className="mb-2 cursor-pointer text-center text-sm text-gray-500 hover:text-green-600 md:text-left">
              Parolingizni unutdingizmi?
            </div>

            <div className="text-center text-sm text-gray-500 md:text-left">
              Yangi foydalanuvchimisiz?{' '}
              <Link to={'/register'}>
                <span className="cursor-pointer text-green-500 hover:underline">
                  Ro‘yxatdan o‘tish
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* O‘ng tomondagi rasm */}
        <div className="hidden justify-center md:flex">
          <img src="logo.svg" alt="Login illustration" className="w-[80%] max-w-md" />
        </div>
      </div>
    </div>
  )
}
