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
// import articlesApi from "./api/articles";
// import { useEffect } from "react";

// // get the articles from articles api
// const getAllArticles = async () => {
//   const articles = await articlesApi.get("/articles");
//   console.log(articles);
//   return articles;
// };

// useEffect(() => {
//   const fetchArticles = async () => {
//     const articles = await getAllArticles();
//     console.log(articles);
//   };
//   fetchArticles();
// }, []);

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
