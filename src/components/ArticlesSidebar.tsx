import React from "react";
import Sidebar from "./Sidebar";

const articleActions = [
  { label: "All Articles", route: `/posts` },
  { label: "New Article", route: `/newarticle` },
  { label: "Edit Article", route: `/editarticle` },
  { label: "Delete Article", route: `/deletearticle` },
];

function ArticlesSidebar(): React.ReactNode {
  return <Sidebar navLinks={articleActions} />;
}

export default ArticlesSidebar;
