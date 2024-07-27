import { StyleSheet } from 'react-native';
import Input from '@ant-design/react-native/lib/input-item/Input';
import { View } from '@ant-design/react-native';

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <Input
        placeholder="Search"
        style={styles.searchBox}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
