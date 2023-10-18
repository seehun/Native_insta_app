import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const FriendItem = ({ data, name }) => {
  const [close, setClose] = useState(false);
  const [follow, setFollow] = useState(false);
  return (
    <View>
      {name === data.name || close ? null : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              setClose(true);
            }}
            style={styles.closeBtn}
          >
            <AntDesign name={'close'} style={styles.closeIcon} />
          </TouchableOpacity>
          <Image source={data.profileImage} style={styles.profileImage} />
          <Text style={styles.profileName}>{data.name}</Text>
          <Text style={styles.accountName}>{data.accountName}</Text>
          <TouchableOpacity
            onPress={() => {
              setFollow(!follow);
            }}
            style={{ width: '80%', paddingVertical: 10 }}
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
      )}
    </View>
  );
};

export default FriendItem;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    margin: 3,
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    color: 'black',
    fontSize: 20,
    opacity: 0.5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountName: {
    fontSize: 12,
  },
  follow: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
