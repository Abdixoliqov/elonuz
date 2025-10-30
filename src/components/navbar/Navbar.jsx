import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="container">
      <div className="flex items-center justify-between border-b border-b-gray-200 py-5">
        <div className="flex gap-4">
          <Link to={'/'}>
            <div>
            <img src="logo.svg" alt="logo" />
          </div>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 rounded-lg bg-[#06b18f] px-5 py-2 font-medium text-white transition hover:bg-[#05977a]"
          >
            {/* Chap tarafdagi icon */}
            {open ? <FiX size={22} /> : <FiMenu size={22} />}

            {/* Yozuv */}
            <span>Kategoriya</span>
          </button>
        </div>

        {/* Search */}
        <form className="relative w-[30%]">
          <input
            type="text"
            // value={searchValue}
            // onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Qidiruv"
            className="input-bordered 3xl:h-[44px] input text-primary bg-base-200 h-7 w-full rounded-md border-2 border-gray-300 pr-10 pl-4 placeholder-gray-500 shadow-[var(--shadow)] focus:border-gray-400 focus:outline-none md:h-8 lg:h-9 xl:h-9 2xl:h-10"
          />
          <button
            type="submit"
            className="absolute top-1/2 -right-12 z-10 -translate-y-1/2 cursor-pointer rounded-md bg-[#06b18f] px-3 text-lg text-gray-400 md:h-8 lg:h-9 xl:h-9 2xl:h-10"
          >
            <BiSearch className="text-white" size={20} />
          </button>
        </form>

        <div className="flex gap-2">
          <ul
            data-testid="langswitcher"
            class="flex items-center gap-3 rounded-full bg-gray-100 px-2 py-1"
          >
            <li class="cursor-default rounded-full bg-[#06b18f] px-3 py-1 text-sm font-medium text-white">
              <span data-testid="lang-switcher-item-uz">O'Z</span>
            </li>
            <li class="rounded-full px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-200">
              <a href="/" data-testid="lang-switcher-item-ru">
                РУ
              </a>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer rounded-md border-2 border-gray-200 p-2"
            >
              <div className="">
                <FaUser className="text-lg text-gray-700" />
                {/* <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                /> */}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content z-40 mt-3 w-40 rounded-md border border-[#f1f1f1] bg-[#f1f1f1] bg-slate-50 p-2 shadow"
            >
              <li className="mb-2 hover:bg-gray-200 transition duration-300 rounded-md">
                <div className="flex items-center gap-2">
                  <IoSettingsOutline size={20} />
                  <a>Settings</a>
                </div>
              </li>
              <li className="hover:bg-gray-200 transition duration-300 rounded-md">
                <div className="flex items-center gap-2">
                  <IoLogOutOutline size={20} />
                  <a>Chiqish</a>
                </div>
              </li>
            </ul>
          </div>
          {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
          {/* For TSX uncomment the commented types below */}
          <Link to={'/favorites'}>
          <div className="rounded-md border-2 border-gray-200 p-2 cursor-pointer">
            <FaRegHeart className="text-lg text-gray-900" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
