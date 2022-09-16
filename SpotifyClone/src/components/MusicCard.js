import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';


//For shown Movie pictures with URL
const getPosterURL = posterpath => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};
//Show movie list.
const MusicCard = ({poster_path, title, release_date, vote_average}) => {
  return (
    <TouchableOpacity
      style={{width: 150, height: 150, flexDirection: 'column'}}>
      <View>
        <Image
          source={{uri: getPosterURL(poster_path)}}
          style={styles.posterStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '600',
  },
  dateStyle: {
    fontSize: 14,
    alignSelf: 'center',
  },
  infoContainer: {
    width: 80,
    height: 20,
    backgroundColor: '#ffc107',
    borderRadius: 15,
    alignSelf: 'center',
  },
  posterStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'gray',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 0,
    resizeMode: 'cover'
  },
  voteText: {
    position: 'absolute',
    fontSize: 15,
    borderRadius: 15,
    marginLeft: 25,
    marginTop: -85,
  },
  iconStyle: {
    position: 'absolute',
    marginTop: -110,
    marginLeft: -10,
    color: '#ffc107',
  },
  bottomLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    
  },
});