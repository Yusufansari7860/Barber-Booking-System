import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const barbers = [
  {
    id: 1,
    name: "Yusuf",
    shop: "Elite Cuts",
    rating: 4.8,
    location: "Downtown",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600",
  },
  {
    id: 2,
    name: "Aisha",
    shop: "Style Studio",
    rating: 4.5,
    location: "City Center",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600",
  },
  {
    id: 3,
    name: "Omar",
    shop: "Barber's Den",
    rating: 4.7,
    location: "Main Street",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600",
  },
];

function BarberList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  let filteredBarbers = barbers.filter((barber) =>
    barber.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOrder === "low") {
    filteredBarbers.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high") {
    filteredBarbers.sort((a, b) => b.price - a.price);
  }

  return (
    <div
      className="min-h-screen py-12 px-6
      bg-gradient-to-br 
      from-blue-100 via-purple-100 to-pink-100
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      transition-all duration-500"
    >
      {/* 🔥 Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-10
        text-gray-800 dark:text-white"
      >
        Discover Top Barbers ✂️
      </motion.h1>

      {/* 🔎 Search + Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
        <input
          type="text"
          placeholder="Search barber..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl border 
          bg-white/70 dark:bg-gray-800/70
          backdrop-blur-lg
          text-black dark:text-white
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-purple-400
          outline-none transition"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-3 rounded-xl border
          bg-white/70 dark:bg-gray-800/70
          backdrop-blur-lg
          text-black dark:text-white
          border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-purple-400
          outline-none transition"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* 🧔 Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBarbers.map((barber, index) => (
          <motion.div
            key={barber.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg
            bg-white/70 dark:bg-gray-800/70
            border border-white/20
            shadow-xl rounded-3xl overflow-hidden
            transition-all duration-300"
          >
            {/* Image */}
            <img
              src={barber.image}
              alt={barber.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {barber.name}
              </h2>

              <p className="text-gray-600 dark:text-gray-400">
                {barber.shop}
              </p>

              <p className="text-yellow-500 mt-1">
                ⭐ {barber.rating}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {barber.location}
              </p>

              <p className="font-bold mt-2 text-gray-800 dark:text-white">
                ₹ {barber.price}
              </p>

              <button
                onClick={() => navigate(`/barbers/${barber.id}`)}
                className="mt-4 w-full py-2 rounded-xl
                bg-gradient-to-r from-blue-500 to-purple-600
                text-white font-semibold
                hover:scale-105 hover:shadow-2xl
                transition-all duration-300"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BarberList;