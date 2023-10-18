import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ProfileBody = ({ name, profileImage, posts, followers, following }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileLeft}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{name}</Text>
      </View>
      <View style={styles.profileRight}>
        <Text style={styles.number}>{posts}</Text>
        <Text>게시물</Text>
      </View>
      <View style={styles.profileRight}>
        <Text style={styles.number}>{followers}</Text>
        <Text>팔로워</Text>
      </View>
      <View style={styles.profileRight}>
        <Text style={styles.number}>{following}</Text>
        <Text>팔로잉</Text>
      </View>
    </View>
  );
};

export default ProfileBody;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  profileLeft: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  profileName: {
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  profileRight: {
    alignItems: 'center',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
