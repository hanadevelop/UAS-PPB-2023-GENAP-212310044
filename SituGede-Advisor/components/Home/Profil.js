import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Text, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

class Profil extends Component {
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <StatusBar/>
                <ScrollView>
                    <View style={styles.ProfilLayout}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                            <View style={styles.ImgProfil}>
                            </View>
                            <View style={{marginHorizontal: 20}}>
                                <Text style={styles.Title}>Nama</Text>
                                <Text style={styles.Text}>Tanggal bergabung</Text>
                            </View>
                        </View>
                        <Text style={styles.Text}>Tentang Anda</Text>
                        <View style={styles.Domicile}>
                            <FontAwesome5 name='map-pin' size={20} color={'#053247'} style={{marginRight: 10}}/>
                            <Text style={styles.Text}>Bogor</Text>
                            
                        </View>
                        <View style={styles.Line}></View>
                        <View style={styles.Foto}>
                            <Text style={styles.Title}>0 foto</Text>
                            <View style={{height: 200, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.Text}>Anda belum memiliki foto</Text>
                            </View>
                            <TouchableOpacity 
                                style={styles.Button}>
                                <Text style={styles.ButtonText}>Upload Foto</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Line}></View>
                        <View style={styles.Ulasan}>
                            <Text style={styles.Title}>0 Ulasan</Text>
                            <View style={{height: 200, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.Text}>Anda belum memiliki Ulasan</Text>
                            </View>
                            <TouchableOpacity style={styles.Button}>
                                <Text style={styles.ButtonText}>Upload Ulasan</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Line}></View>
                        <TouchableOpacity 
                            onPress={() => (this.props.navigation.navigate('SignIn'))}
                            style={styles.SignOutButton}>
                            <Text style={styles.ButtonText}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'F5F5F5',
    },
    ImgProfil: {
        height: 80,
        width: 80,
        backgroundColor: '#F5F5F5',
        borderRadius: 80,
        borderWidth: 2,
        borderColor: '#3A835F'
    },
    ProfilLayout: {
        margin: 20
    },
    Title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#053247',
    },
    Text: {
        fontSize: 16,
        color: '#053247',
    },
    Domicile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    Line: {
        width: '100%',
        borderBottomWidth: 2,
        marginVertical: 20,
        borderColor: 'gray'
    },
    Foto: {
        marginVertical: 20,
    },
    Ulasan: {
        marginVertical: 20,
    },
    Button: {
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#053247',
    },
    SignOutButton: {
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginHorizontal: 80
    }
})

export default Profil;
