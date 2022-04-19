import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Todo from "./todos/pages/Todo";
import Folder from "./folders/pages/Folder";
import Jumbotron from "./shared/jumbotron/Jumbotron";
import MainNav from "./shared/navigation/MainNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <main className="container">
          <Routes>
            <Route path="/" element={<Jumbotron />} exact />
            <Route path="/folders" element={<Folder />} exact />
            <Route path="/folders/:folderId/todo" element={<Todo />} exact />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
