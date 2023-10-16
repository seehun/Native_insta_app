import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ActivityPrevious = ({ data }) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(data.follow);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
          style={styles.contentContainer}
        >
          <Image source={data.profileImage} style={styles.profileImg} />
          <Text style={styles.profileName}>
            <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>의 사진 및
            동영상을 보려면 팔로우 하세요.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFollow(!follow);
          }}
          style={{ width: follow ? 72 : 68 }}
        >
          <View
            style={[
              styles.follow,
              {
                backgroundColor: follow ? null : '#3494D9',
                borderWidth: follow ? 1 : 0,
                borderColor: follow ? '#DEDEDE' : null,
              },
            ]}
          >
            <Text style={{ color: follow ? 'black' : 'white' }}>
              {follow ? 'Following' : 'Follow'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityPrevious;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '64%',
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  profileName: {
    fontSize: 15,
  },
  follow: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
