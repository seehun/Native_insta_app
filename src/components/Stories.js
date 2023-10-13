import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StoryInfo = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'john',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 3,
    name: 'tonny',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'daniel',
    image: require('../../assets/images/profile3.jpeg'),
  },
  {
    id: 5,
    name: 'sojeong',
    image: require('../../assets/images/profile4.jpeg'),
  },
  {
    id: 6,
    name: 'jaeho',
    image: require('../../assets/images/profile5.jpeg'),
  },
];

const Stories = () => {
  const Navigation = useNavigation();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      style={styles.container}
    >
      {StoryInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              Navigation.push('Status', { name: data.name, image: data.image });
            }}
          >
            <View style={styles.story}>
              {data.id === 1 ? (
                <View style={styles.addSymbol}>
                  <Entypo name={'circle-with-plus'} style={styles.circlePlus} />
                </View>
              ) : null}
              <View style={styles.profileImageView}>
                <Image source={data.image} style={styles.profileImage} />
              </View>
              <Text style={[styles.name, { opacity: data.id === 1 ? 1 : 0.5 }]}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
  story: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 8,
    position: 'relative',
  },
  addSymbol: {
    position: 'absolute',
    right: 10,
    bottom: 15,
    zIndex: 1,
  },
  circlePlus: {
    fontSize: 20,
    color: '#405de6',
    backgroundColor: 'white',
    borderRadius: 100,
    overflow: 'hidden',
  },
  profileImageView: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1.8,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '92%',
    height: '92%',
    resizeMode: 'cover',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  name: {
    textAlign: 'center',
    fontSize: 10,
  },
});
