import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Search = () => {
  const [img, setImg] = useState(null); //모달창 띄워주는 용도
  const statusBarHeight = getStatusBarHeight();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const getItem = (item) => {
    setImg(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SearchInput */}
        <SearchInput />
        {/* SearchContent */}
        <SearchContent getData={getItem} />
      </ScrollView>

      {img !== null ? (
        //모달 창
        <View
          style={[
            styles.modalContainer,
            { top: Platform.OS === 'ios' ? statusBarHeight : 0 },
          ]}
        >
          <StatusBar backgroundColor={'#525252'} barStyle={'dark-content'} />
          <View
            style={[
              styles.modalContent,
              { top: windowHeight / 6, left: windowWidth / 18 },
            ]}
          >
            <View style={styles.modalContentProfile}>
              <Image source={img} style={styles.modalContentProfileImg} />
              <View style={styles.modalContentProfileName}>
                <Text style={{ fontSize: 13, fontWeight: '600' }}>
                  친구 아이디
                </Text>
              </View>
            </View>
            <Image source={img} style={styles.modalContentImg} />
            <View style={styles.modalContentIcons}>
              <Ionicons name={'ios-heart-outline'} style={styles.icon} />
              <Ionicons
                name={'ios-person-circle-outline'}
                style={styles.icon}
              />
              <Feather name={'navigation'} style={styles.icon} />
            </View>
          </View>
        </View>
      ) : (
        ''
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  modalContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52,52,52,0.8)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  modalContent: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '90%',
    height: 465,
    borderRadius: 15,
    zIndex: 1,
  },
  modalContentProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalContentProfileImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  modalContentProfileName: {
    paddingLeft: 8,
  },
  modalContentImg: {
    width: '100%',
    height: '80%',
  },
  modalContentIcons: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  icon: {
    fontSize: 26,
  },
});
