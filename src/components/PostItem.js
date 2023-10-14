import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const PostItem = ({ data }) => {
  const [like, setLike] = useState(data.isLiked);
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <View style={styles.headerProfile}>
          <Image source={data.postPersonImage} style={styles.headerImage} />
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>{data.postTitle}</Text>
          </View>
        </View>
        <Feather name={'more-vertical'} style={styles.headerIcon} />
      </View>
      <View style={styles.postImage}>
        <Image source={data.postImage} style={styles.postImageImage} />
      </View>
      <View style={styles.postAction}>
        <View style={styles.postActionIcons}>
          <TouchableOpacity
            onPress={() => {
              setLike(!like);
            }}
          >
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={[styles.heartIcon, { color: like ? 'red' : 'black' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={'ios-chatbubble-outline'} style={styles.chatIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name={'navigation'} style={styles.navigationIcon} />
          </TouchableOpacity>
        </View>
        <Feather name={'bookmark'} style={styles.bookmarkIcon} />
      </View>
      <View style={styles.postComments}>
        <Text>좋아요 {like ? data.likes + 1 : data.likes} 개</Text>
        <Text style={styles.postExplain}>게시글 설명글입니다.</Text>
        <Text style={styles.postCommentOpenBtn}>댓글 모두 보기</Text>
        <View style={styles.postContainer}>
          <View style={styles.postCommentUser}>
            <Image
              source={data.postPersonImage}
              style={styles.commentPersonProfile}
            />
            <TextInput
              placeholder='댓글 달기...'
              style={styles.commentTextInput}
            />
          </View>
          <View>
            <Text style={styles.postBtn}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  Container: {
    paddingBottom: 10,
    borderBottomWidth: 0.1,
    borderBottomColor: 'gray',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  headerTitle: {
    paddingLeft: 5,
  },
  headerTitleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  headerIcon: {
    fontSize: 20,
  },
  postImage: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImageImage: {
    width: '100%',
    height: 320,
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  postActionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    fontSize: 20,
    paddingRight: 10,
  },
  chatIcon: {
    fontSize: 20,
    paddingRight: 10,
  },
  navigationIcon: {
    fontSize: 20,
  },
  bookmarkIcon: {
    fontSize: 20,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postComments: {
    paddingHorizontal: 15,
  },
  postExplain: {
    fontWeight: '700',
    fontSize: 14,
    paddingVertical: 2,
  },
  postCommentOpenBtn: {
    opacity: 0.4,
    paddingVertical: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  commentPersonProfile: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginRight: 10,
  },
  postCommentUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentTextInput: {
    opacity: 0.5,
  },
  postBtn: {
    color: '#0095f6',
  },
});
