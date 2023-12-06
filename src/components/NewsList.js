// src/components/NewsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Auth from './Auth';
import { useNewsContext } from '../context/NewsContext';
import Article from './Article';
import ArticleDetail from './ArticleDetail';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
//   @media (max-width: 768px) {
//     grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   }
// `;

// Rest of your component...


const NewsList = () => {
    
  const [news, setNews] = useState([]);
  const { isGridView, toggleView } = useNewsContext();
  const { setSelectedArticle } = useNewsContext();
  const { user } = useNewsContext();
 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            apiKey: '13ac11b5b6584c0d802bd7af1bf32a7b',
            country: 'us',
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);


//   const toggleView = () => {
//     setIsGridView(!isGridView);
//   };

  return (
   
    <Container>
      <h1>News List</h1>
      {user ? (
        <div>
      <Button>List View</Button>
      <button onClick={toggleView}>{isGridView ? 'List View' : 'Grid View'}</button>
      <ListContainer
       className={isGridView ? 'grid-container' : 'list-container'}>
        {news.map((article) => (
          <Article key={article.title} article={article} isGridView={isGridView} />
        ))}
      </ListContainer>
      {setSelectedArticle && <ArticleDetail article={setSelectedArticle} />}
      </div>
      ) : (
        <Auth />
      )}
    </Container>
  );
  
        };

export default NewsList;
