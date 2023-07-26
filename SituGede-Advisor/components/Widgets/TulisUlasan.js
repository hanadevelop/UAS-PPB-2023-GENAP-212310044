import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, ScrollView,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Rating from './Rating';

const Ulasan = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={openModal}
            style={styles.Button} >
            <Text style={styles.Text}>Tulis Ulasan</Text>
        </TouchableOpacity>
        <ScrollView>
        <Modal visible={isModalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.modalTitle}>Tulis Ulasan</Text>
                <TouchableOpacity onPress={closeModal}>
                  <FontAwesome5 name='window-close' size={20}/>
              </TouchableOpacity>
              </View>
              <Text style={styles.Text}>Bagaimana penilaian anda tentang pengalaman anda?</Text>
              <Rating/>
              <Text style={styles.Text}>Tulis Ulasan</Text>
              <TextInput style={styles.InputText} placeholder='Ceritakan Pengalaman Anda'/>
              <Text style={styles.Text}>Upload Foto</Text>
              <View style={{alignItems: 'center', marginVertical: 20, paddingVertical: 20}}>
                <TouchableOpacity style={styles.UploadFoto}>
                  <FontAwesome5 name='camera' size={60}/>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.Kirim}>
                <Text style={styles.Text}>Kirim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#3A835F',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#F5F5F5',
      fontSize: 16,
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      borderRadius: 10,
      width: '100%',
      height: 600
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    Text: {
      fontSize: 20,
      color: '#053247',
    },
    Button: {
      height: 40,
      borderWidth: 1,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      width: '100%'
    },
    InputText: {
      height: 40,
      borderBottomWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 20,
      fontSize: 16,
      marginBottom: 40
    },
    UploadFoto: {
      height: 120,
      width: 120,
      borderWidth: 2,
      borderRadius: 120,
      justifyContent: 'center',
      alignItems: 'center'
    },
    Kirim: {
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

export default Ulasan;
