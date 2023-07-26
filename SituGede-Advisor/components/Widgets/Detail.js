import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { DataFasilitas } from '../Data/Dummy';
import Rate from './Rate';
import ReadMore from './ReadMore';
import { useSafeArea } from 'react-native-safe-area-context';
import TulisUlasan from './TulisUlasan';
import LihatUlasan from './LihatUlasan';

class Detail extends Component {
    render() {
        const data = DataFasilitas;
        const getDataById = (id) => {
            return data.find((item) => item.id === id);
        }
        const dataById = getDataById(2);
        return (
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Image
                            style={styles.image}
                            source={require('../../assets/Dokumentasi/balai.png')} />
                    </View>
                    <View style={styles.body}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20}}>
                            <Text style={styles.Title}>{dataById.nama_Fasilitas}</Text>
                            <Rate value={dataById.rate_Fasilitas} size={20} color="#F5B041"/>
                        </View>
                        <View style={{marginBottom: 40}}>
                            <Text style={styles.Title}>Deskripsi</Text>
                            <ReadMore text={dataById.deskripsi_Fasilitas} maxLength={100} />
                        </View>
                        <View style={{marginVertical: 10}}>
                            <TulisUlasan/>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <LihatUlasan/>
                        </View>
                    </View>
                </ScrollView>               
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 260,
        width: '100%',
        justifyContent: 'center',
    },
    body: {
        paddingHorizontal: 20
    },
    Title: {
        fontSize: 20,
        fontWeight: 600,
        color: '#053247',
    },
    Text: {
        fontSize: 16,
        color: '#053247',
    },
    Button: {
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    }   
})

export default Detail;
