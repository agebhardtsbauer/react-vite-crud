import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import ArticlesSidebar from "./ArticlesSidebar";

interface Article {
  id: number;
  title: string;
  content: string;
}

const AllArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get<Article[]>("http://localhost:3007/articles")
      .then((response) => setArticles(response.data))
      .catch((error) =>
        console.error(`There was an error retrieving the articles: ${error}`)
      );
  }, []); // Retrieve the articles when component mounts

  return (
    <Box>
      <Typography
        variant="h3"
        gutterBottom
      >
        Articles
      </Typography>
      <List>
        {articles.map((article) => (
          <ListItem
            key={article.id}
            component={Link}
            to={`/articles/${article.id}`}
          >
            <ListItemText primary={article.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

function Posts() {
  return (
    <Box sx={{ display: "flex", p: 1 }}>
      <ArticlesSidebar />
      <AllArticles />
    </Box>
  );
}

export default Posts;
