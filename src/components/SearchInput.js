import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Ionicons name={'search'} style={styles.searchIcon} />
      <TextInput style={styles.searchTextInput} placeholder='search...' />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    position: 'relative',
    width: '100%',
  },
  searchIcon: {
    fontSize: 18,
    position: 'absolute',
    left: 25,
    zIndex: 1,
    opacity: 0.7,
  },
  searchTextInput: {
    width: '92%',
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    paddingLeft: 40,
  },
});
