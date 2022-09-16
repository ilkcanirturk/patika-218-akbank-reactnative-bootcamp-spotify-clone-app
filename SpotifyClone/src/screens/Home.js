import { View, ScrollView, FlatList, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import {ThemeContext} from '../context/theme';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const {theme} = useContext(ThemeContext);
  //WRONG API !!!! I've got errors with music API's. So I use the previous assignment's API with same values.
  //GET request from API with axios.
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e20b8646d40548ed22a91e98df4e5b52&language=en-US&page=1"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const renderMovies = ({ item }) => <MusicCard movies={item} />;

  return (
    <View style={{backgroundColor: theme.backgroundColor}}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View>
          <Text style={{marginLeft: 10, fontSize: 26, fontWeight: 'bold'}}>Weekly new musics!</Text>
          <FlatList
            showsHorizontalScrollIndicator= {false}
            horizontal={true}
            data={movies}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderMovies}
          />
        </View>
        <View>
          <Text style={{marginLeft: 10, fontSize: 26, fontWeight: 'bold'}}>Discover the albums!</Text>
          <FlatList
            showsHorizontalScrollIndicator= {false}
            horizontal={true}
            data={movies}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderMovies}
          />
        </View>
        <View>
          <Text style={{marginLeft: 10, fontSize: 26, fontWeight: 'bold'}}>Listen best playlists!</Text>
          <FlatList
            showsHorizontalScrollIndicator= {false}
            horizontal={true}
            data={movies}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderMovies}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
