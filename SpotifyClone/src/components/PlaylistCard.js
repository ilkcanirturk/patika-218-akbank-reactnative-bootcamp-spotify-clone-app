import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


function PlaylistCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.playlists.name}</Text>
      <View style={styles.overview_container}>
        <Text style={styles.overview_text}>{props.playlists.trackCount}</Text>
      </View>
    </View>
  );
}

export default PlaylistCard;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    overview_container: {
      padding: 5,
    },
    overview_text: {
      color: 'black',
      fontWeight: '300',
    },
  });