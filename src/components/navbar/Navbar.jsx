import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
function Navbar() {
  return (
    <div className="container">
      <div className="flex justify-between items-center py-5 border-b border-b-gray-200">
        <div>
          <img src="logo.svg" alt="logo" />
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
          <button type="submit" className="cursor-pointer absolute top-1/2 -right-12 z-10 -translate-y-1/2 text-lg text-gray-400 px-3  rounded-md bg-[#06b18f] md:h-8 lg:h-9 xl:h-9 2xl:h-10">
            <BiSearch className="text-white" size={20}/>
          </button>
        </form>

        <div className="flex gap-2">
            <div className="border-2 border-gray-200 rounded-md p-2">
                <FaUser className="text-gray-700 text-lg" />
            </div>
            <div className="border-2 border-gray-200 rounded-md p-2">
                <FaRegHeart className="text-gray-900 text-lg" />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
