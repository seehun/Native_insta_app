import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FriendsProfileData } from './Database';
import { useNavigation } from '@react-navigation/native';

const ActivityThisWeek = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.this_week}>이번 주</Text>
      <View style={styles.contents}>
        {FriendsProfileData.slice(0, 3).map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push('FriendProfile', {
                  name: data.name,
                  profileImage: data.profileImage,
                  posts: data.posts,
                  followers: data.followers,
                  following: data.following,
                  follow: data.follow,
                });
              }}
              key={index}
            >
              <Text>{data.name} </Text>
            </TouchableOpacity>
          );
        })}
        <Text>님이 팔로우 하기 시작했습니다.</Text>
      </View>
    </>
  );
};

export default ActivityThisWeek;

const styles = StyleSheet.create({
  this_week: {
    fontWeight: 'bold',
  },
  contents: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
