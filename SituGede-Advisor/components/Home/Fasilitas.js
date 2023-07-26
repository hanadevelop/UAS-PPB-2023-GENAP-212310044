import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import { DataFasilitas } from '../Data/Dummy';
import FasilitasLayout from '../Widgets/FasilitasLayout';
const { width } = Dimensions.get('window');

const Fasilitas = () => {
    return(
        <Swiper
        style={styles.wrapper}
        height={300}
        onMomentumScrollEnd={(e, state, context) =>
        console.log('index:', state.index)}
        dot={
            <View
                style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
                }}/>
        }
        activeDot={
            <View
                style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
                }}/>
        }
        paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
        }}
        loop>
            {DataFasilitas.map((v,index) => (
                <FasilitasLayout items={v} key={index} />
            ))}
        </Swiper>

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

export default Fasilitas;
