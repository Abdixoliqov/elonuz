import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaUser, FaRegHeart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import CategoryDropdown from "../CategoryDropdown";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="relative z-[100] bg-white border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between py-5">
          {/* ✅ Chap qism: logo + kategoriya tugmasi */}
          <div className="flex gap-4 items-center">
            <Link to={"/"}>
              <img src="logo.svg" alt="logo" className="h-10 w-auto" />
            </Link>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-lg bg-[#06b18f] px-5 py-2 font-medium text-white transition hover:bg-[#05977a]"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
              <span>Kategoriya</span>
            </button>
          </div>

          {/* ✅ Qidiruv maydoni */}
          <form className="relative w-[30%]">
            <input
              type="text"
              placeholder="Qidiruv..."
              className="input-bordered input text-primary bg-base-200 h-10 w-full rounded-md border-2 border-gray-300 pr-10 pl-4 placeholder-gray-500 shadow focus:border-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full w-10 flex items-center justify-center rounded-r-md bg-[#06b18f]"
            >
              <BiSearch className="text-white" size={20} />
            </button>
          </form>

          {/* ✅ Foydalanuvchi va til tanlash */}
          <div className="flex gap-2 items-center">
            {/* Til tanlash */}
            <ul className="flex items-center gap-3 rounded-full bg-gray-100 px-2 py-1">
              <li className="cursor-default rounded-full bg-[#06b18f] px-3 py-1 text-sm font-medium text-white">
                O‘Z
              </li>
              <li className="rounded-full px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200">
                <a href="/">РУ</a>
              </li>
            </ul>

            {/* Foydalanuvchi menyusi */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer rounded-md border-2 border-gray-200 p-2"
              >
                <FaUser className="text-lg text-gray-700" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content z-50 mt-3 w-40 rounded-md border border-[#f1f1f1] bg-slate-50 p-2 shadow"
              >
                <li className="mb-2 rounded-md hover:bg-gray-200">
                  <div className="flex items-center gap-2">
                    <IoSettingsOutline size={20} />
                    <a>Sozlamalar</a>
                  </div>
                </li>
                <Link to={"/login"}>
                  <li
                    className="rounded-md hover:bg-gray-200"
                    onClick={() => dispatch(logOut(false))}
                  >
                    <div className="flex items-center gap-2">
                      <IoLogOutOutline size={20} />
                      <a>Chiqish</a>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Sevimlilar */}
            <Link to={"/favorites"}>
              <div className="cursor-pointer rounded-md border-2 border-gray-200 p-2">
                <FaRegHeart className="text-lg text-gray-900" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 🟢 Kategoriya menyusi (navbar ustida emas, lekin overlay uni yopmaydi) */}
      <CategoryDropdown open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export default Navbar;
