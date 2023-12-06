// src/components/Article.js
import React, { useState } from 'react';
import { useNewsContext } from '../context/NewsContext';

const Article = ({ article }) => {
  const { toggleFavorite } = useNewsContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    toggleFavorite(article);
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt={article.title} />
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default Article;
