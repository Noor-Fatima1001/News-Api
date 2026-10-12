import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

const API_KEY = 'cc9ee689305647bc8468b5d32edf715c';

const News = () => {
  const [technology, setTechnology] = useState([]);
  const [culture, setCulture] = useState([]);
  const [science, setScience] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchCategoryNews = async (category, setcategory) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&page=1&pageSize=6`
    );
    setcategory(response.data.articles);
  } catch (error) {
    if (error.response) {
      console.error(` API error [${category}]:`, error.response.data);
    } else if (error.request) {
      console.error(` No response for [${category}]:`, error.request);
    } else {
      console.error(` Config error [${category}]:`, error.message);
    }
  }
};


  useEffect(() => {
    fetchCategoryNews('general', setTechnology);
    fetchCategoryNews('science', setCulture);
    fetchCategoryNews('entertainment', setScience);
    fetchCategoryNews('technology', setVideo);
  }, []);

  return (
    <NewsItem
      technologyArticles={technology}
      cultureArticles={culture}
      scienceArticles={science}
      videoArticles={video}
    />
  );
};

export default News;
