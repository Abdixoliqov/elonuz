import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Texnika",
    image: "category.png",
    color: "bg-amber-200",
    subs: ["Telefonlar", "Kompyuterlar", "Televizorlar", "Aksessuarlar"],
  },
  {
    id: 2,
    name: "Ko‘chmas mulk",
    image: "1.png",
    color: "bg-green-200",
    subs: ["Kvartiralar", "Uylar", "Yer uchastkalari", "Ijara"],
  },
  {
    id: 3,
    name: "Transport",
    image: "2.png",
    color: "bg-yellow-200",
    subs: ["Avtomobillar", "Motosikllar", "Ehtiyot qismlar", "Aksessuarlar"],
  },
  {
    id: 4,
    name: "Ish e’lonlari",
    image: "3.png",
    color: "bg-slate-200",
    subs: ["To‘liq stavka", "Masofaviy ish", "Freelance", "Stajirovka"],
  },
  {
    id: 5,
    name: "Xizmatlar",
    image: "4.png",
    color: "bg-blue-200",
    subs: ["Ta’mirlash", "Yetkazib berish", "Kuzatuv tizimlari", "IT xizmatlar"],
  },
  {
    id: 6,
    name: "Hayvonlar",
    image: "3.png",
    color: "bg-amber-200",
    subs: ["Itlar", "Mushuklar", "Qushlar", "Boshqalar"],
  },
  {
    id: 7,
    name: "Sport",
    image: "1.png",
    color: "bg-green-200",
    subs: ["Jihozlar", "Kiyim-kechak", "Trenajyorlar"],
  },
  {
    id: 8,
    name: "Boshqalar",
    image: "2.png",
    color: "bg-gray-200",
    subs: ["Kitoblar", "O‘yinchoqlar", "Sovg‘alar"],
  },
];

export default function CategoryDropdown({ open, onClose }) {
  const [hovered, setHovered] = useState(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 🔹 Overlay — sahifani qoplaydi, lekin navbar ustiga chiqmaydi */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            // ❗ `top-[80px]` -> overlay navbar pastidan boshlanadi
            className="fixed left-0 right-0 bottom-0 top-[80px] bg-black z-[1000]"
          />

          {/* 🔹 Dropdown — container eni bilan bir xil, overlay ustida */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            // ❗ Navbar pastidan boshlanadi, shuning uchun absolute o‘rniga fixed ishlatamiz
            className="absolute left-0 right-0 top-[80px] z-[1100] bg-white border-t border-gray-200"
          >
            <div className="container relative">
              <div className="mx-auto flex flex-col h-[70vh] overflow-hidden border-x border-b rounded-b-lg border-gray-200 bg-white">
                <div className="flex flex-1 overflow-hidden">
                  {/* Chap sidebar (bitta ustun, scroll bilan) */}
                  <div className="w-[260px] border-r border-gray-100 p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {categories.map((cat) => (
                      <div
                        key={cat.id}
                        onMouseEnter={() => setHovered(cat)}
                        className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl transition ${
                          hovered?.id === cat.id
                            ? "bg-[#06b18f]/10"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 ${cat.color} rounded-lg flex items-center justify-center`}
                        >
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                          <span className="font-medium text-gray-700">
                            {cat.name}
                          </span>
                          <FaChevronRight
                            className={`text-gray-400 transition ${
                              hovered?.id === cat.id ? "text-[#06b18f]" : ""
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* O‘ng panel (subkategoriyalar) */}
                  <div className="flex-1 p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {hovered ? (
                      <>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                          {hovered.name}
                        </h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {hovered.subs.map((sub, i) => (
                            <div
                              key={i}
                              className="p-4 border border-gray-200 rounded-lg cursor-pointer text-gray-700 hover:bg-[#06b18f]/10 hover:text-[#06b18f] transition"
                            >
                              {sub}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400 text-lg">
                        Kategoriyani tanlang
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
