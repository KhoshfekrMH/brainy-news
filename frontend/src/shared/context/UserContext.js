import React, { createContext, useState } from "react";
import { users as dummyUsers } from "../data/DummyData";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, currentUser, logIn, signUp, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
