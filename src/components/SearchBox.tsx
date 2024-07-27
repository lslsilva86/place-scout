import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Input from '@ant-design/react-native/lib/input-item/Input';
import { View } from '@ant-design/react-native';

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <Text style={styles.title}>Place SCOUT</Text>
      <Input
        placeholder="Search"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc83d',
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 6,
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
