import { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaUser, FaRegHeart } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5'
import { GoPlus } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../features/auth/authSlice'
import CategoryDropdown from '../CategoryDropdown'
import { PiListBulletsFill } from "react-icons/pi";
import { IoIosChatboxes } from "react-icons/io";
import { BsChatSquareText } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import { LuUser } from "react-icons/lu";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="container flex items-center justify-between py-4 transition-all duration-500">
          {/* ✅ Chap: logo + kategoriya */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src="/logo.svg"
                alt="logo"
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-8' : 'h-10'
                } w-auto`}
              />
            </Link>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className={`flex items-center gap-3 rounded-lg px-5 py-2 font-medium text-white transition-all duration-300 ${
                open
                  ? 'bg-[#05977a] shadow-sm'
                  : 'bg-[#06b18f] hover:bg-[#05977a]'
              }`}
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
              <span>Kategoriya</span>
            </button>
          </div>

          {/* ✅ Qidiruv */}
          <form className="relative w-[30%]">
            <input
              type="text"
              placeholder="Qidiruv..."
              className="h-10 w-full rounded-md border border-gray-300 bg-gray-100 pl-4 pr-10 text-sm placeholder-gray-500 focus:border-[#06b18f] focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 flex h-full w-10 items-center justify-center rounded-r-md bg-[#06b18f] hover:bg-[#05977a] transition"
            >
              <BiSearch className="text-white" size={18} />
            </button>
          </form>

          {/* ✅ Foydalanuvchi va E'lon */}
          <div className="flex items-center gap-2">
            {/* Til */}
            <ul className="flex items-center gap-2 rounded-full bg-gray-100 px-2 py-1">
              <li className="cursor-default rounded-full bg-[#06b18f] px-3 py-1 text-xs font-semibold text-white">
                O‘Z
              </li>
              <li className="rounded-full px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-200">
                <a href="/">РУ</a>
              </li>
            </ul>

            {/* Sevimlilar */}
            <Link to="/favorites">
              <div className="rounded-md border border-gray-200 p-2 hover:bg-gray-100 transition">
                <FaRegHeart className="text-lg text-gray-700" />
              </div>
            </Link>

            {/* Foydalanuvchi menyu */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="rounded-md border border-gray-200 p-2 hover:bg-gray-100 transition cursor-pointer"
              >
                <FaUser className="text-lg text-gray-700" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 w-48 rounded-md border border-gray-200 bg-white p-2 shadow-lg"
              >
                <li className="rounded-md hover:bg-gray-100">
                  <div className="flex items-center gap-2">
                    <LuUser size={18} />
                    <span>Mening profilim</span>
                  </div>
                </li>
                <li className="rounded-md hover:bg-gray-100">
                  <div className="flex items-center gap-2">
                    <AiOutlineProfile size={18} />
                    <span>Mening E'lonlarim</span>
                  </div>
                </li>
                <li className="rounded-md hover:bg-gray-100">
                  <div className="flex items-center gap-2">
                    <BsChatSquareText size={15} />
                    <span>Xabarlar</span>
                  </div>
                </li>
                <li className="rounded-md hover:bg-gray-100">
                  <div className="flex items-center gap-2">
                    <IoSettingsOutline size={18} />
                    <span>Sozlamalar</span>
                  </div>
                </li>
                <li
                  onClick={() => dispatch(logOut(false))}
                  className="rounded-md hover:bg-gray-100 "
                >
                  <Link to="/login" className="flex items-center gap-2">
                    <IoLogOutOutline size={18} />
                    <span>Chiqish</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* E’lon */}
            <Link to="/create">
              <button className="flex items-center gap-2 rounded-full border border-[#32cfb0] bg-[#06b18f] px-5 py-2 text-white font-semibold hover:bg-[#05977a] transition active:scale-[0.97]">
                <span>E’lon</span>
                <span className="rounded-full bg-white p-1">
                  <GoPlus className="text-black" size={14} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Kategoriya menyusi */}
      <CategoryDropdown open={open} onClose={() => setOpen(false)} />
    </>
  )
}
