import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultList results={filterByPrice('$')} title="Cost Effective" />
      <ResultList results={filterByPrice('$$')} title="Bit Pricer" />
      <ResultList results={filterByPrice('$$$')} title="Big Spender!" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
