import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact.tsx";
import Home from "./components/Home.tsx";
import PostList from "./components/PostList";
import Posts from "./components/Posts";
import Nav from "./components/Nav.tsx";

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
          >
            <Route
              path="postlist"
              element={<PostList />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
