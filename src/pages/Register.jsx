import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">
        {/* Chap tomon – forma */}
        <div className="flex flex-col items-center md:items-start justify-center w-full">
          <div className="w-full max-w-sm bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
              Ro‘yxatdan o‘tish
            </h2>

            {/* Google bilan ro‘yxatdan o‘tish */}
            <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition mb-3">
              <FcGoogle size={22} />
              <span>Google orqali ro‘yxatdan o‘tish</span>
            </button>

            {/* Facebook bilan ro‘yxatdan o‘tish */}
            <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition mb-6 text-blue-600">
              <FaFacebook size={22} />
              <span>Facebook orqali ro‘yxatdan o‘tish</span>
            </button>

            <div className="flex items-center mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">yoki email orqali</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Email */}
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 mb-4 transition"
            />

            {/* Parol */}
            <label className="block text-sm text-gray-600 mb-1">Parol</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 pr-10 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-2 text-gray-500 hover:text-green-600 transition"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Parol tasdig‘i */}
            <label className="block text-sm text-gray-600 mb-1">Parol tasdig‘i</label>
            <div className="relative mb-4">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 pr-10 transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-0 top-2 text-gray-500 hover:text-green-600 transition"
              >
                {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Ism va familiya */}
            <label className="block text-sm text-gray-600 mb-1">Ismingiz</label>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 mb-4 transition"
            />

            <label className="block text-sm text-gray-600 mb-1">Familiyangiz</label>
            <input
              type="text"
              placeholder="Familiyangizni kiriting"
              className="w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 mb-4 transition"
            />

            {/* Shartlarga rozilik */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 accent-green-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Saytdan foydalanish{' '}
                <span className="text-green-500 cursor-pointer hover:underline">
                  shartlariga
                </span>{' '}
                roziman
              </label>
            </div>

            {/* Ro‘yxatdan o‘tish tugmasi */}
            <button className="w-full py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition mb-4">
              Ro‘yxatdan o‘tish
            </button>

            <div className="text-sm text-center text-gray-500">
              Allaqachon ro‘yxatdan o‘tganmisiz?{' '}
              <span className="text-green-500 hover:underline cursor-pointer">
                Kirish
              </span>
            </div>
          </div>
        </div>

        {/* O‘ng tomondagi rasm */}
        <div className="hidden md:flex justify-center">
          <img
            src="logo.svg"
            alt="Register illustration"
            className="w-[80%] max-w-md"
          />
        </div>
      </div>
    </div>
  )
}
