import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact.tsx";
import Home from "./components/Home.tsx";
import Posts from "./components/Posts";
import Nav from "./components/Nav.tsx";
import NewArticle from "./components/NewArticle";
import EditArticle from "./components/EditArticle.tsx";
import DeleteArticle from "./components/DeleteArticle.tsx";
import ShowArticle from "./components/ShowArticle.tsx";

function App() {
  return (
    <>
      Hello?
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="contact"
            element={<Contact />}
          />
          <Route
            path="posts"
            element={<Posts />}
          />
          <Route
            path="/newarticle"
            element={<NewArticle />}
          />
          <Route
            path="/editarticle"
            element={<EditArticle />}
          />
          <Route
            path="/deletearticle"
            element={<DeleteArticle />}
          />
          <Route
            path="/articles/:id"
            element={<ShowArticle />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
