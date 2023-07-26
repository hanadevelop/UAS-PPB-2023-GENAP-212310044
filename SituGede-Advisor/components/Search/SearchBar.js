import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Modal, Button, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchIconPress = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchText);
    // Logika pencarian atau tindakan
  };

  return (
    <View style={styles.container}>
      {!isSearchVisible && (
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={handleSearchIconPress}
        >
          <Feather name="search" size={25} color="black" />
        </TouchableOpacity>
      )}

      {isSearchVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            autoFocus
          />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleSearchIconPress}
          >
            <Feather name="x" size={25} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  cancelButton: {
    padding: 5,
  },
});

export default SearchBar;
