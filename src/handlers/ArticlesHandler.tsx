// hooks/useArticle.ts
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useArticle = () => {
  const [content, setContent] = useState("");
  const [articleId, setId] = useState("");
  const [title, setTitle] = useState("");

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

  return {
    articleId,
    handleIdChange,
    title,
    handleTitleChange,
    content,
    handleContentChange,
    handleSubmit,
  };
};
