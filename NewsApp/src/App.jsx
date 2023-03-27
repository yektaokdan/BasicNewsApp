import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

export default function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.HeaderText}>News</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => (
                <Image
                  style={styles.banner_image}
                  source={{uri: bannerNews.imageUrl}}></Image>
              ))}
            </ScrollView>
          )}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').height / 2,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginBottom: 10,
  },
  HeaderText: {
    fontWeight: 'bold',
    fontSize: 50,
    margin: 5,
  },
});
