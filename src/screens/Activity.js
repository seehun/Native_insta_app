import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityRecommend from '../components/ActivityRecommend';
import ActivityThisWeek from '../components/ActivityThisWeek';
import { FriendsProfileData } from '../components/Database';

const Activity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText}>활동</Text>
      <ScrollView style={styles.containerContents}>
        <ActivityThisWeek />
        <Text style={styles.textInContainer}>이전 활동</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => (
          <ActivityPrevious data={data} key={index} />
        ))}
        <Text style={styles.textInContainer}>회원님을 위한 추천</Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => (
          <ActivityRecommend data={data} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    width: '100%',
    backgroundColor: 'white',
    paddingBottom: 40,
  },
  containerText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DEDEDE',
    padding: 10,
  },
  containerContents: {
    margin: 10,
  },
  textInContainer: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
