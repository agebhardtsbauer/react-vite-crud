import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArticlesSidebar from "./ArticlesSidebar";

const DeleteArticle: React.FC = () => {
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:3007/articles/${id}`)
      .then(() => {
        alert("Article deleted successfully");
        navigate("/posts"); // return to the /posts route after deleting the article
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error deleting the article");
      });
  };

  return (
    <div className="contentContainer">
      <ArticlesSidebar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={handleInputChange}
          placeholder="Article ID"
        />
        <button type="submit">Delete Article</button>
      </form>
    </div>
  );
};

export default DeleteArticle;
