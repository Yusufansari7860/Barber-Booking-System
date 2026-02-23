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
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold">{barber.name}</h1>
                <p className="text-gray-600">{barber.shop}</p>
                <p className="text-sm text-gray-500 mb-4">{barber.location}</p>

                <h2 className="text-xl font-semibold mb-3">Services</h2>

                <div className="space-y-3">
                    {barber.services.map((service, index) => (
                        <div
                         key={index} 
                         className="flex justify-between bg-gray-50 p-4 rounded-lg"
                        >
                            <span>{service.name}</span>
                            <span>₹ {service.price}</span>
                        </div>
                    ))}
                </div>

                <button
                onClick={() => navigate(`/book/${barber.id}`)}
                className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Book Appointment
                </button>
            </div>
        </div>
    );
}


export default BarberDetails;