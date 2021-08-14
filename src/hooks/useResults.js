import React from 'react';
import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const useResults = () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'san jose',
        },
      });
      setResult(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong..');
    }
  };

  useEffect(() => {
    setErrorMessage('');
    searchApi('pasta');
  }, []);

  return [searchApi, result, errorMessage];
};

export default useResults;
