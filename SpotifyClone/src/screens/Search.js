import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState, useContext} from 'react';

import {ThemeContext} from '../context/theme';


//Search input needs to be develop.

const Search = () => {
  //for theme change.
  const {theme} = useContext(ThemeContext);
  const [searchtext, onChangeSearchText] = useState('');

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={onChangeSearchText}
        value={searchtext}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  searchInput: {
    marginTop: 10,
    width: '95%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
});