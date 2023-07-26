import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import { DataReview } from '../Data/Dummy';
import Rate from './Rate';

const LihatUlasan = () => {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Ulasan Pengunjung</Text>
        {DataReview.map((review) => (
          <View key={review.id} style={styles.reviewContainer}>
            <Text style={styles.reviewTitle}>{review.nama_Pengunjung}</Text>
            <Rate value={review.rate_Pengunjung}/>
            <Text style={styles.reviewText}>{review.Ulasan_Pengunjung}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#053247',
    },
    reviewContainer: {
      marginBottom: 16,
      padding: 16,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    reviewTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#053247',
    },
    reviewRating: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#3A835F',
    },
    reviewText: {
      fontSize: 16,
      color: '#053247',
    },
  });

export default LihatUlasan;
