import React, { Component } from 'react';
import {View, StyleSheet, Text, SafeAreaView, StatusBar, TouchableOpacity, Image} from 'react-native';

class SplashScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar/>
                <View style={{flex: 1}}>
                    <View style={styles.BackgroundHeader}>
                        <Image
                            source={require('../assets/SketchLake.jpg')}
                            style={styles.BackgroundHeader} >
                        </Image>
                    </View>
                    <View style={styles.Center}>
                        <Image
                            source={require('../assets/LogoSituGede.png')}
                            style={styles.Circle} />
                    </View>
                </View>
                <View style={styles.Footer}>
                    <View style={{marginVertical: 20}}>
                        <View style={styles.Body}>
                            <Text style={styles.TitleHeader}>SITU GEDE ADVISOR</Text>
                            <Text style={styles.Text}>Sebuah Platform untuk mengumpulkan pendapat dan umpan balik dari pengunjung mengenai pengalaman mereka di Danau Situ Gede</Text>
                        </View>

                    </View>
                    <TouchableOpacity
                        onPress={() => (this.props.navigation.navigate('SignIn'))}
                        Title="Start_btn"
                        style={styles.Start_btn} >
                        <Text style={styles.Title}>Mulai</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    BackgroundHeader: {
        height: '100%',
        width: '100%',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    TitleHeader: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
        color: '#3A835F',
    },
    Body: {
        padding: 20,
    },
    Title: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 16,
        color: '#F5F5F5'
    },
    Text: {
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#053247',
    },
    Circle: {
        height: 120,
        width: 120,
        backgroundColor: '#f5f5f5',
        borderRadius: 120,
        position: 'absolute',
        borderWidth: 2,
        borderColor: '#3A835F'
    },
    Center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Start_btn: {
        height: 40,
        marginHorizontal:"20%",
        marginVertical:10,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#3A835F',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40
    }, 
    Footer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 0
    },
})

export default SplashScreen;
