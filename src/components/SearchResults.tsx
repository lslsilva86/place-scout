import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { List } from '@ant-design/react-native';

interface Place {
  place_id: string;
  description: string;
}

const SearchResults = () => {
  const [data, setData] = useState<Place[]>([
    {
      place_id: '001',
      description: 'Toronto, ON, Canada',
    },
  ]);
  return (
    <View style={styles.searchResults}>
      <ScrollView>
        <List>
          {data.map((item: Place) => (
            <List.Item
              key={item.place_id}
              arrow=""
              multipleLine
            >
              <View>
                <Text style={styles.itemText}>{item.description}</Text>
              </View>
            </List.Item>
          ))}
        </List>
      </ScrollView>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  searchResults: {
    flex: 4,
    fontFamily: 'Lato-Bold',
  },
  itemText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#666666',
  },
});
