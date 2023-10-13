import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Status = ({ route, navigation }) => {
  const { name, image } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'black'}
        barStyle={'light-content'}
      ></StatusBar>
      <View style={styles.bar}></View>
      <View style={styles.header}>
        <View style={styles.profileImageView}>
          <Image source={image} style={styles.profileImage} />
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.name}>{name} </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name={'close'} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={styles.mainImage} />
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  bar: {
    height: 3,
    width: '95%',
    backgroundColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    top: 30,
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },
  profileImageView: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
  },
  headerRight: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  closeIcon: {
    color: 'white',
    opacity: 0.6,
    fontSize: 20,
  },
  mainImage: {
    position: 'absolute',
    width: '100%',
    height: '80%',
  },
});
