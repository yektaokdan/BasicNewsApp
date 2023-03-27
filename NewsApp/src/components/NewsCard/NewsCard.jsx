import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import styles from './NewsCard.style';

export default function NewsCard(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.news.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.news.title}</Text>
        <Text style={styles.description}>{props.news.description}</Text>
        <Text style={styles.author}>{props.news.author}</Text>
      </View>
    </View>
  );
}
