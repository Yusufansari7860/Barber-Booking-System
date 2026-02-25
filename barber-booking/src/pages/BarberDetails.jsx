import { useParams,useNavigate } from "react-router-dom";

const barbers = [
  {
    id: 1,
    name: "Yusuf",
    shop: "Elite Cuts",
    rating: 4.8,
    location: "Downtown",
    services: [
        { name: "Haircut", price: "60" },
        { name: "Beard Trim", price: "30" },
        { name: "Shave", price: "40" },
    ]
  },
  {
    id: 2,
    name: "Aisha",
    shop: "Style Studio",
    rating: 4.5,
    location: "City Center",
    services: [
        { name: "Haircut", price: "55" },
        { name: "Beard Trim", price: "25" },
        { name: "Shave", price: "35" },
    ]
  },
  {
    id: 3,
    name: "Omar",
    shop: "Barber's Den",
    rating: 4.7,
    location: "Main Street",
    services: [
        { name: "Haircut", price: "50" },
        { name: "Beard Trim", price: "20" },
        { name: "Shave", price: "30" },
    ]
  }
];


function BarberDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const barber = barbers.find((b) => b.id === parseInt(id));

    if (!barber) {
        return <h2 className="text-center mt-10">Barber not found</h2>
    }

    return (
  <div className="py-10">

    <div className="max-w-3xl mx-auto 
      bg-white dark:bg-gray-800 
      p-8 rounded-2xl shadow-lg 
      transition-colors duration-300">

      <h1 className="text-3xl font-bold 
        text-gray-800 dark:text-white">
        {barber.name}
      </h1>

      <p className="text-gray-600 dark:text-gray-400">
        {barber.shop}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {barber.location}
      </p>

      <h2 className="text-xl font-semibold mb-4 
        text-gray-800 dark:text-white">
        Services
      </h2>

      <div className="space-y-3">
        {barber.services.map((service, index) => (
          <div
            key={index}
            className="flex justify-between 
            bg-gray-50 dark:bg-gray-700 
            p-4 rounded-xl 
            transition-colors duration-300"
          >
            <span className="dark:text-gray-200">
              {service.name}
            </span>

            <span className="font-semibold dark:text-gray-200">
              ₹ {service.price}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate(`/book/${barber.id}`)}
        className="mt-8 w-full 
        bg-blue-600 text-white 
        py-3 rounded-xl 
        hover:bg-blue-700 
        transition duration-300"
      >
        Book Appointment
      </button>

    </div>
  </div>
);
}


export default BarberDetails;