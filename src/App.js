import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Todo from "./todos/pages/Todo";
import Folder from "./folders/pages/Folder";
import Jumbotron from "./shared/jumbotron/Jumbotron";
import MainNav from "./shared/navigation/MainNav";
import UpdateTodo from "./todos/pages/UpdateTodo";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Jumbotron />} exact />
        <Route path="/folders" element={<Folder />} exact />
        <Route path="/folders/:folderName/:folderId" element={<Todo />} exact />
        <Route path="/todo/:todoName/:todoId" element={<UpdateTodo />} exact />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/auth" element={<Auth />} exact />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <MainNav />
        <main className="container">{routes}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
