import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const searchData = [
  {
    id: 0,
    images: [
      require('../../assets/images/post1.jpeg'),
      require('../../assets/images/post2.jpeg'),
      require('../../assets/images/post3.jpeg'),
      require('../../assets/images/post4.jpeg'),
      require('../../assets/images/post5.jpeg'),
      require('../../assets/images/post6.jpeg'),
    ],
  },
  {
    id: 1,
    images: [
      require('../../assets/images/post7.jpeg'),
      require('../../assets/images/post8.jpeg'),
      require('../../assets/images/post9.jpeg'),
      require('../../assets/images/post10.jpeg'),
      require('../../assets/images/post11.jpeg'),
      require('../../assets/images/post12.jpeg'),
    ],
  },
  {
    id: 2,
    images: [
      require('../../assets/images/post13.jpeg'),
      require('../../assets/images/post14.jpeg'),
      require('../../assets/images/post15.jpeg'),
    ],
  },
];

const SearchContent = ({ getData }) => {
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View style={styles.SearchContentFirst}>
                {data.images.map((imgData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      style={styles.searchContentFirstContent}
                      onPressIn={() => {
                        getData(imgData);
                      }}
                      onPressOut={() => {
                        getData(null);
                      }}
                    >
                      <Image
                        source={imgData}
                        style={styles.searchContentFirstImg}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {data.id === 1 ? (
              <View style={styles.searchSecondContainer}>
                <View style={styles.searchSecondContentsLeft}>
                  {data.images.slice(0, 4).map((imgData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={styles.searchContentSecondContent}
                        onPressIn={() => {
                          getData(imgData);
                        }}
                        onPressOut={() => {
                          getData(null);
                        }}
                      >
                        <Image
                          source={imgData}
                          style={styles.searchContentSecondImg}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>

                <TouchableOpacity
                  style={styles.searchContentSecondContentRight}
                  onPressIn={() => {
                    getData(data.images[5]);
                  }}
                  onPressOut={() => {
                    getData(null);
                  }}
                >
                  <Image
                    source={data.images[5]}
                    style={styles.searchContentSecondImgRight}
                  />
                </TouchableOpacity>
              </View>
            ) : null}

            {data.id === 2 ? (
              <View style={styles.searchThirdContainer}>
                <TouchableOpacity
                  style={styles.searchThirdContentLeft}
                  onPressIn={() => {
                    getData(data.images[2]);
                  }}
                  onPressOut={() => {
                    getData(null);
                  }}
                >
                  <Image
                    source={data.images[2]}
                    style={styles.searchThirdContentLeftImg}
                  />
                </TouchableOpacity>
                <View style={styles.searchThirdContentRight}>
                  {data.images.slice(0, 2).map((imgData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={styles.searchThirdContentRightTouch}
                        onPressIn={() => {
                          getData(imgData);
                        }}
                        onPressOut={() => {
                          getData(null);
                        }}
                      >
                        <Image
                          source={imgData}
                          style={styles.searchThirdContentRightImg}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  SearchContentFirst: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchContentFirstContent: {
    width: '33%',
    paddingBottom: 2,
  },
  searchContentFirstImg: {
    width: '100%',
    height: 150,
  },
  searchSecondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchSecondContentsLeft: {
    width: '66.5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  searchContentSecondContent: {
    width: '49.5%',
    paddingBottom: 2,
  },
  searchContentSecondImg: {
    width: '100%',
    height: 150,
  },
  searchContentSecondContentRight: {
    width: '33%',
    marginLeft: 2,
  },
  searchContentSecondImgRight: {
    width: '100%',
    height: 302,
  },
  searchThirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchThirdContentLeft: {
    width: '66.5%',
  },
  searchThirdContentLeftImg: {
    width: '100%',
    height: 300,
  },
  searchThirdContentRight: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '33%',
  },
  searchThirdContentRightTouch: {
    width: '100%',
    paddingBottom: 2,
  },
  searchThirdContentRightImg: {
    width: '100%',
    height: 150,
  },
});
