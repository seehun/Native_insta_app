import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ActivityRecommend = ({ data }) => {
  const navigation = useNavigation();
  const [close, setClose] = useState(false);
  const [follow, setFollow] = useState(data.follow);
  return (
    <View>
      {close ? null : (
        <View style={styles.container}>
          <View>
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
              style={styles.Profile}
            >
              <Image source={data.profileImage} style={styles.profileImage} />
              <View style={styles.profileDetails}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                  {data.name}
                </Text>
                <Text style={{ fontSize: 12, opacity: 0.5 }}>
                  {data.accountName}
                </Text>
                <Text style={{ fontSize: 12, opacity: 0.5 }}>
                  회원님을 위한 추천
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rightContent}>
            {follow ? (
              <TouchableOpacity
                onPress={() => {
                  setFollow((prev) => !prev);
                }}
                style={{ width: follow ? 90 : 68 }}
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
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setFollow((prev) => !prev);
                  }}
                  style={{ width: follow ? 90 : 68 }}
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
                <TouchableOpacity
                  onPress={() => {
                    setClose(true);
                  }}
                  style={styles.close}
                >
                  <AntDesign name={'close'} style={styles.closeBtn} />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ActivityRecommend;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Profile: {
    flexDirection: 'row',
    maxWidth: '64%',
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  profileDetails: {
    width: '100%',
  },
  rightContent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  follow: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    paddingHorizontal: 10,
  },
  closeBtn: {
    fontSize: 14,
    color: 'black',
    opacity: 0.8,
  },
});
