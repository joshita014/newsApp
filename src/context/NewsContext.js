// src/context/NewsContext.js
import { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [isGridView, setIsGridView] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null); // Add user state

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const toggleFavorite = (article) => {
    const isArticleFavorite = favorites.some((favArticle) => favArticle.title === article.title);

    if (isArticleFavorite) {
      setFavorites(favorites.filter((favArticle) => favArticle.title !== article.title));
    } else {
      setFavorites([...favorites, article]);
    }
  };

  const loginUser = (userData) => {
    // Logic for logging in a user, update the 'user' state
    setUser(userData);
  };

  const logoutUser = () => {
    // Logic for logging out a user, update the 'user' state
    setUser(null);
  };

  return (
    <NewsContext.Provider value={{ isGridView, toggleView, favorites, toggleFavorite, user, loginUser, logoutUser }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};
