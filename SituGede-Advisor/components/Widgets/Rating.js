import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingPress = (value) => {
    if (rating === value) {
      // Jika pengguna mengklik bintang yang sudah aktif, set rating menjadi 0
      setRating(0);
    } else {
      // Jika pengguna mengklik bintang yang belum aktif, set rating sesuai dengan nilai bintang yang diklik
      setRating(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rating: {rating}</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => handleRatingPress(value)}
          >
            <FontAwesome5
              name={value <= rating ? 'dot-circle' : 'circle'}
              size={24}
              color="#FFD700"
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: 4,
  },
});

export default Rating;