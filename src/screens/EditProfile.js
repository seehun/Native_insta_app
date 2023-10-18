import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

const EditProfile = ({ route, navigation }) => {
  const { name, accountName, profileImage } = route.params;
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>취소</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>프로필 수정</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: '#3493D9' }}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.currentProfileContainer}>
        <Image source={profileImage} style={styles.profileImg} />
        <Text style={{ color: '#3493D9', marginTop: 10 }}>
          프로필 사진 바꾸기
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5 }}>이름</Text>
          <TextInput
            placeholder='이름'
            defaultValue={name}
            style={styles.nameChangeContainer}
          />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5 }}>사용자 이름</Text>
          <TextInput
            placeholder='사용자 이름'
            defaultValue={accountName}
            style={styles.nameChangeContainer}
          />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5 }}>웹사이트</Text>
          <TextInput
            placeholder='웹사이트'
            style={styles.nameChangeContainer}
          />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ opacity: 0.5 }}>소개</Text>
          <TextInput placeholder='소개' style={styles.nameChangeContainer} />
        </View>
      </View>
      <View>
        <Text style={styles.wordBtn}>프로페셔널 계정으로 전환</Text>
        <Text style={styles.wordBtn}>개인정보 설정</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  currentProfileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  nameChangeContainer: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#CDCDCD',
  },
  wordBtn: {
    color: '#3493D9',
    marginVertical: 5,
    padding: 10,
  },
});
