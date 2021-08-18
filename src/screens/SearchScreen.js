import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList results={filterByPrice('$')} title="Cost Effective" />
        <ResultList results={filterByPrice('$$')} title="Bit Pricer" />
        <ResultList results={filterByPrice('$$$')} title="Big Spender!" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
