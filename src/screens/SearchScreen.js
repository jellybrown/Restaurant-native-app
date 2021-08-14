import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

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
      setError('Something went wrong..');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {result.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
