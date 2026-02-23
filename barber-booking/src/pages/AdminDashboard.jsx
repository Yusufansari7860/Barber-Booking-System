import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function AdminDashboard() {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  const totalUsers = users.length;
  const totalAdmins = users.filter(user => user.role === "admin").length;
  const totalBookings = bookings.length;

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-gray-100 dark:bg-gray-800 shadow rounded-xl p-6 transition-colors duration-300">
          <h2 className="text-gray-600 dark:text-gray-400">Total Users</h2>
          <p className="text-3xl font-bold">{totalUsers}</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 shadow rounded-xl p-6 transition-colors duration-300">
          <h2 className="text-gray-600 dark:text-gray-400">Total Admins</h2>
          <p className="text-3xl font-bold">{totalAdmins}</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 shadow rounded-xl p-6 transition-colors duration-300">
          <h2 className="text-gray-600 dark:text-gray-400">Total Bookings</h2>
          <p className="text-3xl font-bold">{totalBookings}</p>
        </div>

      </div>

      {/* USERS TABLE */}
      <div className="bg-gray-100 dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-300">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3 border dark:border-gray-600">Name</th>
              <th className="p-3 border dark:border-gray-600">Email</th>
              <th className="p-3 border dark:border-gray-600">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="p-3 border dark:border-gray-600">
                  {user.name}
                </td>
                <td className="p-3 border dark:border-gray-600">
                  {user.email}
                </td>
                <td className="p-3 border dark:border-gray-600 capitalize">
                  <span className={`px-2 py-1 rounded text-sm ${
                    user.role === "admin"
                      ? "bg-purple-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}>
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default AdminDashboard;
