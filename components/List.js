import React from 'react';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import ListItem from './ListItem';
const List = (props) => {

  return (
    <View style={{marginTop: 19}}>
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
