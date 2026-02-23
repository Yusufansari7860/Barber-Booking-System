import { useNavigate } from "react-router-dom";

const barbers = [
  {
    id: 1,
    name: "Yusuf",
    shop: "Elite Cuts",
    rating: 4.8,
    location: "Downtown",
  },
  {
    id: 2,
    name: "Aisha",
    shop: "Style Studio",
    rating: 4.5,
    location: "City Center",
  },
  {
    id: 3,
    name: "Omar",
    shop: "Barber's Den",
    rating: 4.7,
    location: "Main Street",
  }
];

function BarberList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Barbers Near You</h1>

        <div className="grid md:grid-cols-3 gap-6">
            {barbers.map((barber) => (
                <div
                key={barber.id}
                className="bg-white p-6 rouded-xl shadow-md"
                >
                    <h2 className="text-xl font-semibold">{barber.name}</h2>
                    <p className="text-gray-600">{barber.shop}</p>
                    <p className="text-yellow-600">⭐ {barber.rating}</p>
                    <p className="text-sm text-gray-500">{barber.location}</p>

                    <button
                    onClick={() => navigate(`/barbers/${barber.id}`)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >View Details
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
}










export default BarberList;