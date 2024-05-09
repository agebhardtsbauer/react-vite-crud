import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import ArticlesSidebar from "./ArticlesSidebar";

interface Article {
  id: number;
  title: string;
  content: string;
}

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3007/articles")
      .then((response) => setArticles(response.data))
      .catch((error) =>
        console.error(`There was an error retrieving the articles: ${error}`)
      );
  }, []); // Retrieve the articles when component mounts
  return (
    <div className="articleWide">
      <h1>Article List</h1>
      {(articles as Article[]).map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

function Posts() {
  return (
    <div className="contentContainer">
      <ArticlesSidebar />
      <AllArticles />
    </div>
  );
}

export default Posts;
