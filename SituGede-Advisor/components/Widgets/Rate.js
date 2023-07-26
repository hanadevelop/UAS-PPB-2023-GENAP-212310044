import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Rate = ({value, size, color}) => {
    const filledStars = Math.floor(value);
    const hasHalfStar = value - filledStars >= 0.5;

    const renderStars = () => {
    const stars = [];

    // Render filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <FontAwesome5
          key={`star-${i}`}
          name="star"
          size={size}
          color={color}
          style={styles.star}
        />
      );
    }

    // Render half star
    // if (hasHalfStar) {
    //   stars.push(
    //     <FontAwesome5
    //       key="half-star"
    //       name="star-half-alt"
    //       size={size}
    //       color={color}
    //       style={styles.star}
    //     />
    //   );
    // }

    // Render empty stars
    for (let i = filledStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(
        <FontAwesome5
          key={`star-${i}`}
          name="star"
          size={size}
          color="#D3D3D3"
          style={styles.star}
        />
      );
    }

    return stars;
  };

    return (
        <View style={styles.container}>
        {renderStars()}
        <Text style={styles.value}>{value.toFixed(1)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        marginRight: 2,
    },
    value: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#053247',
    },
});

export default Rate;
