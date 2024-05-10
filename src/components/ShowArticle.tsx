import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Grid } from "@mui/material";
import ArticlesSidebar from "./ArticlesSidebar";

interface Article {
  id: number;
  title: string;
  content: string;
}

const ShowArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    axios
      .get<Article>(`http://localhost:3007/articles/${id}`)
      .then((response) => setArticle(response.data))
      .catch((error) =>
        console.error(`There was an error retrieving the article: ${error}`)
      );
  }, [id]);

  if (!article) return null;

  // Convert new line characters to HTML line breaks for rendering
  const formattedContent = { __html: article.content.replace(/\n/g, "<br/>") };

  return (
    <Box className="contentContainer">
      <ArticlesSidebar />
      <Grid
        container
        direction="column"
      >
        <Grid item>
          <Typography
            variant="h2"
            gutterBottom
            align="center"
          >
            {article.title}
          </Typography>
        </Grid>
        <Grid item>
          {/* Use dangerouslySetInnerHTML to respect new lines */}
          <Typography
            variant="body1"
            align="left"
            dangerouslySetInnerHTML={formattedContent}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShowArticle;
