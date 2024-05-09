import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArticlesSidebar from "./ArticlesSidebar";

const ArticleEditor = () => {
  const [content, setContent] = useState("");
  const [articleId, setId] = useState(""); // Declare the articleId variable
  const [title, setTitle] = useState(""); // Declare the title variable

  const navigate = useNavigate();

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    axios
      .put<{ content: string }>(`http://localhost:3007/articles/${articleId}`, {
        title,
        content,
      })
      .then((res) => {
        console.log(res);
        alert("Article updated successfully");
        navigate("/posts");
      })
      .catch((err) => {
        console.error(err);
        alert("There was an error updating the article");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={articleId}
        onChange={handleIdChange}
        placeholder="Article ID"
      />

      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />

      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Content"
      />

      <button type="submit">Update Article</button>
    </form>
  );
};

function EditArticle() {
  return (
    <div>
      <div className="contentContainer">
        <ArticlesSidebar />
        <ArticleEditor />
      </div>
    </div>
  );
}

export default EditArticle;
