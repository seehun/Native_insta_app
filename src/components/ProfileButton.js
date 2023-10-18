import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

const ProfileButton = ({ id }) => {
  const [follow, setFollow] = useState(false);
  return (
    <>
      {id === 0 ? (
        <View></View>
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
