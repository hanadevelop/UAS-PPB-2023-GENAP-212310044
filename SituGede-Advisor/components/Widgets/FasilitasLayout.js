import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window')

const FasilitasLayout = ({items}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>    
            <TouchableOpacity
                style={styles.slide}
                title={<Text numberOfLines={1} style={styles.Text}>tes</Text>}>
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={items.Images} />
            </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      wrapper: {
        marginTop: 10
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
      image: {
        width,
        flex: 1,
        justifyContent: 'center',
      },
      Text: {
        fontSize: 16,
        color: '#053247',
        fontWeight: '500',
        marginLeft: 9
    },
})

export default FasilitasLayout;
