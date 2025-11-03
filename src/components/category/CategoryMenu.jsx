const OPTIONS = {}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function CategoryMenu() {
  const categories = [
    { id: 1, name: 'Category name title tes', image: 'category.png', color: 'bg-amber-200' },
    { id: 2, name: 'Category name title tes', image: '1.png', color: 'bg-green-200' },
    { id: 3, name: 'Category name title tes', image: '2.png', color: 'bg-yellow-200' },
    { id: 4, name: 'Category name title tes', image: '3.png', color: 'bg-slate-200' },
    { id: 5, name: 'Category name title tes', image: '4.png', color: 'bg-blue-200' },
    { id: 6, name: 'Category name title tes', image: '3.png', color: 'bg-amber-200' },
    { id: 7, name: 'Category name title tes', image: '1.png', color: 'bg-green-200' },
    { id: 8, name: 'Category name title tes', image: '2.png', color: 'bg-gray-200' },
  ]

  return (
    <div className="my-8">
      <h2 className="font-bold text-lg md:text-2xl xl:text-3xl text-center mb-5">
        Kategoriya
      </h2>

      <div className="flex flex-wrap justify-start gap-8">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center cursor-pointer">
            <div className={`w-[100px] rounded-full outline-none overflow-hidden ${cat.color}`}>
              <img
                src={cat.image}
                alt={cat.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-center mt-2 font-semibold w-[112px]">
              {cat.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu
