import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArticlesSidebar from "./ArticlesSidebar";
import { TextField, Button, Box } from "@mui/material";
import { useArticle } from "../handlers/ArticlesHandler";

const ArticleEditor = () => {
  const {
    articleId,
    handleIdChange,
    title,
    handleTitleChange,
    content,
    handleContentChange,
    handleSubmit,
  } = useArticle();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
    >
      <Box m={2}>
        <TextField
          type="text"
          value={articleId}
          onChange={handleIdChange}
          placeholder="Article ID"
        />
      </Box>

      <Box m={2}>
        <TextField
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
      </Box>

      <Box m={2}>
        <TextField
          multiline
          value={content}
          onChange={handleContentChange}
          placeholder="Content"
        />
      </Box>

      <Box mt={2}>
        <Button
          type="submit"
          variant="contained"
          sx={{ ml: 3 }}
        >
          Update Article
        </Button>
      </Box>
    </Box>
  );
};

function EditArticle() {
  return (
    <Box className="contentContainer">
      <ArticlesSidebar />
      <ArticleEditor />
    </Box>
  );
}

export default EditArticle;
