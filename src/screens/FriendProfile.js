import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import FriendItem from '../components/FriendItem';
import { FriendsProfileData } from '../components/Database';

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
        <Text style={styles.recommendText}>회원님을 위한 추천</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.friendProfileContainer}
        >
          {FriendsProfileData.map((data, index) => {
            return <FriendItem key={index} data={data} name={name} />;
          })}
        </ScrollView>
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
  recommendText: {
    paddingVertical: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  friendProfileContainer: {
    paddingTop: 10,
  },
});
