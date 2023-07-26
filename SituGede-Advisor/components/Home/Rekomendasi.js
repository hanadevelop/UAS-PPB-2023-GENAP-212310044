import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { Fasilitas } from '../Data/Dummy';
const { width } = Dimensions.get('window')

const Rekomendasi = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Swiper
                style={styles.wrapper}
                height={250}
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('Detail')}
                    style={styles.slide}
                    title={<Text numberOfLines={1} style={styles.Text}>Balai Pertemuan</Text>}>
                    <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={require('../../assets/Dokumentasi/balai.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.slide}
                    title={<Text numberOfLines={1} style={styles.Text}>Konservasi</Text>}>
                    <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={require('../../assets/Dokumentasi/konservasi.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.slide}
                    title={<Text numberOfLines={1} style={styles.Text}>Wahana Kano</Text>}>
                    <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={require('../../assets/Dokumentasi/kano.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.slide}
                    title={<Text numberOfLines={1} style={styles.Text}>Caffe</Text>}>
                    <Image
                        resizeMode='cover'
                        style={styles.image}
                        source={require('../../assets/Dokumentasi/cafe.jpg')} />
                </TouchableOpacity>
            </Swiper>
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
        fontSize: 20,
        color: '#053247',
        fontWeight: '500',
        marginLeft: 9
    },
})

export default Rekomendasi;
