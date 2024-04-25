import React from 'react';
import Header from'./Header';
import About from './About';
import ArticleList from './ArticleList';



const App = () => {
  const articles = [
    {
      title: "Sample Article 1",
      date: "2024-04-25",
      preview: "This is a preview of sample article 1."
    },
    {
      title: "Sample Article 2",
      date: "2024-04-26",
      preview: "This is a preview of sample article 2."
    },
  ];

  return (
    <div>
      <Header name="The Mike Blog" />
      <About about="The Current Flood Situation" />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;