import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gradient-to-br 
      from-blue-50 to-white 
      dark:from-gray-900 dark:to-gray-800 
      transition-colors duration-500">

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center px-6 sm:px-6 py-20 sm:py-24">
        
        <h1 className="text-5xl md:text-6xl font-extrabold 
          text-gray-800 dark:text-white mb-6">
          Book Your Perfect{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Barber
          </span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          Discover top-rated barbers near you. Schedule appointments instantly
          and get the style you deserve.
        </p>

        <button
          onClick={() => navigate("/barbers")}
          className="bg-blue-600 text-white px-2 py-3 rounded-full 
          text-lg font-semibold shadow-lg 
          hover:bg-blue-700 transition duration-300"
        >
          Explore Barbers
        </button>
      </div>

      {/* FEATURES SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
  gap-8 pb-20 max-w-6xl mx-auto">

        {/* CARD 1 */}
        <div className="bg-white dark:bg-gray-800 
rounded-2xl shadow-md p-8 text-center 
hover:shadow-2xl hover:-translate-y-2 
transition-all duration-300">

          <div className="text-4xl mb-4">💈</div>

          <h3 className="text-xl font-semibold mb-2 
            text-gray-800 dark:text-white">
            Top Professionals
          </h3>

          <p className="text-gray-500 dark:text-gray-400">
            Connect with skilled barbers trusted by hundreds of clients.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white dark:bg-gray-800 
          rounded-2xl shadow-md p-8 text-center 
          hover:shadow-2xl hover:-translate-y-2 
          transition-all duration-300">

          <div className="text-4xl mb-4">⚡</div>

          <h3 className="text-xl font-semibold mb-2 
            text-gray-800 dark:text-white">
            Instant Booking
          </h3>

          <p className="text-gray-500 dark:text-gray-400">
            Book your appointment in seconds with our seamless system.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white dark:bg-gray-800 
          rounded-2xl shadow-md p-8 text-center 
          hover:shadow-2xl hover:-translate-y-2 
          transition-all duration-300">

          <div className="text-4xl mb-4">⭐</div>

          <h3 className="text-xl font-semibold mb-2 
            text-gray-800 dark:text-white">
            Quality Experience
          </h3>

          <p className="text-gray-500 dark:text-gray-400">
            Enjoy premium grooming services and leave looking sharp.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;
