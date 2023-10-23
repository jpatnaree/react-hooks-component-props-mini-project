import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList"


function App() {
  return (
    <div className="App">
      <Header props={blogData} />
      <About props={blogData}/>
    <main>
      <ArticleList props={blogData} />
      </main>
    </div>
  );
}

export default App;
