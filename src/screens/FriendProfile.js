import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';

const FriendProfile = ({ navigation, route }) => {
  const { name, profileImage, posts, followers, following } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name={'arrow-back'} style={styles.arrowIcon} />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.name}>{name}</Text>
            <Feather name={'more-vertical'} style={styles.moreIcon} />
          </View>
        </View>
        <ProfileBody
          name={name}
          profileImage={profileImage}
          posts={posts}
          followers={followers}
          following={following}
        />
        <ProfileButton id={1} />
      </View>
    </SafeAreaView>
  );
};

export default FriendProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%',
  },
  arrowIcon: {
    fontSize: 20,
    color: 'black',
  },
  headerContent: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  moreIcon: {
    fontSize: 20,
    color: 'black',
  },
});
