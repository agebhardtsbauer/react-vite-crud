import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArticlesSidebar from "./ArticlesSidebar";
import { useArticle } from "../handlers/ArticlesHandler";
import Box from "@mui/material/Box";

const DeleteArticle: React.FC = () => {
  const navigate = useNavigate();

  const { articleId, handleIdChange } = useArticle();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:3007/articles/${articleId}`)
      .then(() => {
        navigate("/posts"); // return to the /posts route after deleting the article
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error deleting the article");
      });
  };

  return (
    <Box className="contentContainer">
      <ArticlesSidebar />
      <form onSubmit={handleSubmit}>
        <Box m={2}>
          <TextField
            type="text"
            value={articleId}
            onChange={handleIdChange}
            placeholder="Article ID"
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
        >
          Delete Article
        </Button>
      </form>
    </Box>
  );
};

export default DeleteArticle;
