import React, { createContext, useState, useEffect } from "react";
import { users as dummyUsers } from "../data/DummyData";

export const UserContext = createContext({});

//TODO: remove localStorge
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  );
  const [currentUser, setCurrentUser] = useState(
    () => JSON.parse(localStorage.getItem("currentUser")) || null,
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [isLoggedIn, currentUser]);

  const logIn = (email, password) => {
    const user = dummyUsers.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
    }
    return user;
  };

  const signUp = (name, email, password) => {
    const userExists = dummyUsers.some((user) => user.email === email);
    if (!userExists) {
      const newUser = {
        id: dummyUsers.length + 1,
        name,
        email,
        password,
        avatar: "https://picsum.photos/50/50", //TODO: remove this dummy for test
        role: "user",
      };
      dummyUsers.push(newUser);
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
      value={{ isLoggedIn, currentUser, logIn, signUp, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
