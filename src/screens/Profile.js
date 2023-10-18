import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import { Entypo } from '@expo/vector-icons';

let circles = [];
let numberOfCircles = 10;

for (let i = 0; i < numberOfCircles; i++) {
  circles.push(
    <View key={i}>
      {i === 0 ? (
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            borderWidth: 1,
            opacity: 0.7,
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Entypo name={'plus'} style={{ fontSize: 40, fontWeight: 'bold' }} />
        </View>
      ) : (
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            borderWidth: 1,
            opacity: 0.1,
            backgroundColor: 'black',
            marginHorizontal: 5,
          }}
        ></View>
      )}
    </View>
  );
}

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', padding: 10 }}>
        <ProfileBody
          name='sehun'
          accountName='sehun'
          profileImage={require('../../assets/images/userProfile.jpeg')}
          posts='20'
          followers='213'
          following='123'
        />
        <ProfileButton
          id={0}
          name='sehun'
          accountName='sehun'
          profileImage={require('../../assets/images/userProfile.jpeg')}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.circlesContainer}
        >
          {circles}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    width: '100%',
    backgroundColor: 'white',
  },
  plusCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.1,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  circlesContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});
