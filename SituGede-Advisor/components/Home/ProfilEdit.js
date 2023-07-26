import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Text, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';

class ProfilEdit extends Component {
    render() {
        return (
            <SafeAreaView>
                <StatusBar/>
                <ScrollView>
                    <View style={styles.ProfilLayout}>
                        <View style={styles.ImgProfil}>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <KeyboardAvoidingView>
                            <View style={styles.InputLayout}>
                                <Text style={styles.Title}>Nama</Text>
                                <TextInput style={styles.InputText}>

                                </TextInput>
                            </View>
                            <View style={styles.InputLayout}>
                                <Text style={styles.Title}>Kota domisili saat ini</Text>
                                <TextInput style={styles.InputText}>
                                    
                                </TextInput>
                            </View>
                            <View style={styles.InputLayout}>
                                <Text style={styles.Title}>Tentang Anda</Text>
                                <TextInput style={styles.InputText2}>
                                    
                                </TextInput>
                            </View>
                        </KeyboardAvoidingView>                   
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
        height: 160,
        width: 160,
        backgroundColor: '#F5F5F5',
        borderRadius: 200,
        borderWidth: 2,
        borderColor: '#3A835F',
    },
    ProfilLayout: {
        marginVertical: 60,
        alignItems: 'center'
    },
    InputText: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    InputText2: {
        height: 120,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        marginBottom: 80
    },
    body: {
        marginHorizontal: 20
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
    InputLayout: {
        marginVertical: 10
    }
})

export default ProfilEdit;
