import React, { useState } from "react";
// import Sidebar from "./Sidebar";
import ArticlesSidebar from "./ArticlesSidebar";
import { useNavigate } from "react-router-dom";

const NewArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3007/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const data = await response.json();

      // After post request is successful, clear the form
      if (response.ok) {
        setTitle("");
        setContent("");
        navigate("/posts");
      }

      console.log(data);
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <br />
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

function NewArticle() {
  return (
    <div className="contentContainer">
      <ArticlesSidebar />
      <NewArticleForm />
    </div>
  );
}

export default NewArticle;
