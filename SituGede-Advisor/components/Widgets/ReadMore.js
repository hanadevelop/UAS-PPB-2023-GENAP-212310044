import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ReadMore = ({text, maxLength}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        </Text>
        {text.length > maxLength && (
          <TouchableOpacity onPress={toggleExpansion}>
            <Text style={styles.readMoreText}>
              {isExpanded ? 'Baca lebih sedikit...' : 'Baca selengkapnya...'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      textAlign: 'justify',
      color: '#053247'
    },
    readMoreText: {
      color: 'blue',
      marginTop: 5,
      textAlign: 'justify'
    },
  });
  
export default ReadMore;
