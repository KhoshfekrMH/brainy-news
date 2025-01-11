import React, { createContext, useState, useEffect } from "react";
import { users as dummyUsers } from "../data/DummyData";

export const UserContext = createContext({});

// TODO: remove localStorage
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  );
  const [currentUser, setCurrentUser] = useState(
    () => JSON.parse(localStorage.getItem("currentUser")) || null,
  );
  const [users, setUsers] = useState(dummyUsers); // Add users state

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [isLoggedIn, currentUser]);

  const logIn = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
    }
    return user;
  };

  const signUp = (name, email, password) => {
    const userExists = users.some((user) => user.email === email);
    if (!userExists) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        avatar: "https://picsum.photos/50/50", // TODO: remove this dummy for test
        role: "user",
      };
      setUsers([...users, newUser]);
      setIsLoggedIn(true);
      setCurrentUser(newUser);
      return newUser;
    }
    return null;
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        currentUser,
        logIn,
        signUp,
        logOut,
        users,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
