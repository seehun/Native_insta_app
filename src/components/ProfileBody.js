import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const ProfileBody = ({
  name,
  accountName,
  profileImage,
  posts,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName ? (
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.accountName}>{accountName}</Text>
            <Feather name={'chevron-down'} style={styles.chevronIcon} />
          </View>
          <View style={styles.headerRight}>
            <Feather name={'plus-square'} style={styles.plusIcon} />
            <Feather name={'menu'} style={styles.menuIcon} />
          </View>
        </View>
      ) : null}
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
    </View>
  );
};

export default ProfileBody;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountName: { fontSize: 18, fontWeight: 'bold' },
  chevronIcon: {
    paddingHorizontal: 5,
    fontSize: 20,
    color: 'black',
    opacity: 0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: { fontSize: 25, color: 'black', paddingHorizontal: 15 },
  menuIcon: { fontSize: 25 },
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
