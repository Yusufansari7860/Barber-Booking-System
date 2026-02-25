import { createContext,useState, useEffect, } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem("users");
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem("currentUser");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        localStorage.setItem("users",JSON.stringify(users));
    },[users]);

    useEffect(() => {
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
    },[currentUser]);

    const register = (name, email, password) => {
        const userExists = users.find((user) => user.email === email);
        if (userExists){
            alert('User already exists!');
            return false;
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            role: email === "admin@example.com" ? "admin" : "user",
        };

        setUsers([...users,newUser]);
        setCurrentUser(newUser);
        return true;
    };

    const login = (email,password) => {
        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if(!user){
            alert("Invalid credentials!");
            return false;
        }

        setCurrentUser(user);
        return true;
    };

    const resetPassword = (email, newPassword) => {
    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex === -1) {
        alert("Email not found!");
        return false;
    }

    const updatedUsers = [...users];
    updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        password: newPassword,
    };

    setUsers(updatedUsers);

    alert("Password updated successfully!");
    return true;
};
    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
    users,
    currentUser,
    register,
    login,
    logout,
    resetPassword
}}
        >
            {children}
        </AuthContext.Provider>
    );
};