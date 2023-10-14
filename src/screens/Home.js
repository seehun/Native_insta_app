import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Instagram</Text>
        </View>
        <View style={styles.titleIcons}>
          <FontAwesome name={'plus-square-o'} style={styles.plusSquare} />
          <Feather name={'navigation'} style={styles.navigation} />
        </View>
      </View>
      <ScrollView>
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
  titleIcons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusSquare: {
    fontSize: 24,
    paddingHorizontal: 15,
  },
  navigation: {
    fontSize: 24,
  },
});
