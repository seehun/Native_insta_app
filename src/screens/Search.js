import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SearchInput */}
        <SearchInput />
        {/* SearchContent */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
});
