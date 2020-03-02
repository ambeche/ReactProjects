import React from 'react';
import { View, FlatList} from 'react-native';
import ListItem from './ListItem';
const List = (props) => {

  return (
    <View style={{marginTop: 0}}>
    <FlatList
    data={props.mediaArray}
      renderItem={({item}) => {
        return (
        <ListItem item={item} />
        )
      }}
      />

     </View>
  );
};
export default List;
