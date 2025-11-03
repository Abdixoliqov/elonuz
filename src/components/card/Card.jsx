import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Card({ image, title, price, currency, location, condition, isPremium, views }) {
 

  return (
    <>
        <Link to={'/card-info'} className="card bg-base-100 relative w-full max-w-sm rounded-md shadow-sm transition hover:shadow-md">
          {/* Premium Badge */}
          {isPremium && (
            <div className="absolute top-2 left-2 rounded-md bg-[#33f3cd] px-2 py-1 text-xs font-semibold text-gray-900 shadow-md">
              Top
            </div>
          )}

          {/* Favourite Icon */}
          <button className="absolute top-2 right-2 cursor-pointer rounded-full bg-white/80 p-1 shadow-sm hover:bg-white">
            <AiOutlineHeart className="h-5 w-5 text-gray-600 transition hover:text-red-500" />
          </button>

          {/* Image */}
          <figure className="h-48 w-full overflow-hidden rounded-t-md">
            <img
              src={
                image ||
                'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
              }
              alt={title}
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Body */}
          <div className="card-body p-4">
            <h2 className="card-title line-clamp-2 text-base">{title}</h2>

            <p className="text-sm text-gray-500">
              {location} • {condition}
            </p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-primary text-lg font-semibold">
                {price ? `${price.toLocaleString()} ${currency}` : 'Narx kelishiladi'}
              </span>
              <span className="text-xs text-gray-400">{views} ko‘rildi</span>
            </div>
          </div>
        </Link>
    </>
  )
}

export default Card
