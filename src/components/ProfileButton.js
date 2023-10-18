import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileButton = ({ id, name, accountName, profileImage }) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(false);
  return (
    <>
      {id === 0 ? (
        <View style={styles.container0}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('EditProfile'),
                {
                  name: name,
                  accountName: accountName,
                  profileImage: profileImage,
                };
            }}
            style={{ width: '100%' }}
          >
            <View style={styles.profileEditBtn}>
              <Text style={styles.profileEditBtnText}>프로필 편집</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => {
              setFollow((prev) => !prev);
            }}
            style={{ width: '42%' }}
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
          <View style={styles.message1}>
            <Text>메시지</Text>
          </View>
          <View style={styles.chevronDown}>
            <Feather name={'chevron-down'} style={styles.chevronDownIcon} />
          </View>
        </View>
      )}
    </>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  container0: { paddingHorizontal: 10, paddingVertical: 5 },
  profileEditBtn: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderRadius: 5,
  },
  profileEditBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.8,
    letterSpacing: 1,
  },
  container1: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  follow: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message1: {
    width: '42%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 35,
    borderColor: '#DEDEDE',
  },
  chevronDown: {
    height: 35,
    width: '10%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevronDownIcon: {
    fontSize: 18,
    color: 'black',
  },
});
