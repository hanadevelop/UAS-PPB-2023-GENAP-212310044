import React, { Component } from 'react';
import {View, StyleSheet, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, BackHandler, ToastAndroid} from 'react-native';
import SearchBar from '../Search/SearchBar';
import Rekomendasi from './Rekomendasi';
import Fasilitas from './Fasilitas';
import Atraksi from './Atraksi';

class Home extends Component {
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
        ToastAndroid.show('You want to sign out?', ToastAndroid.SHORT);
        return true;
    }

    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <StatusBar/>
                <ScrollView>
                    <View style={styles.Header}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center'}}>
                            <Text style={styles.HeaderTitle}>SituGede Advisor</Text>   
                            <TouchableOpacity
                                onPress={() => (this.props.navigation.navigate('Profil'))}
                                Title='Profile'
                                style={styles.profile} >
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Body}>
                        {/* <SearchBar/> */}
                        <View style={styles.Rekomendasi}>
                            <Text style={styles.Title}>Rekomendasi</Text>
                            <Rekomendasi/>
                        </View>
                        <View style={styles.Fasilitas}>
                            <Text style={styles.Title}>Fasilitas</Text>
                            <Fasilitas/>
                        </View>
                        <View style={styles.Atraksi}>
                            <Text style={styles.Title}>Atraksi Wisata</Text>
                            <Atraksi/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    Header: {
        display: 'flex',
        backgroundColor: '#3A835F',
        width: '100%',
        height: 80
    },
    HeaderTitle: {
        fontWeight:'bold',
        fontSize: 24,
        color: '#F5F5F5',
    },
    profile: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    Body: {
        marginVertical: 20
    },
    layout: {
        flexDirection: 'row'
    },
    Title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#053247',
        marginLeft: 20
    },
    Rekomendasi: {
        marginBottom: 80,
    },
    Fasilitas: {
        marginBottom: 80,
    },
    Atraksi: {
        marginBottom: 80,
    },
})

export default Home;
