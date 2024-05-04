import { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <h1 className="text-2xl">Loading...</h1>
      ) : (
        <div className="overflow-x-auto pt-5">
          <table className="table table-zebra">
            {/* Table Head */}
            <thead>
              <tr>
                <th className="text-lg">#</th>
                <th className="text-lg">Email</th>
                <t className="text-lg">Password</t>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th className="text-lg">{index + 1}</th>
                  <td className="text-lg">{user.email}</td>
                  <td className="text-lg">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UsersList;
