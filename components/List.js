import React from 'react';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContexts';¨
import {useFetch} from '../hooks/APIHooks';
const List = (props) => {
 const [media, setMedia] = useContext(MediaContext);
 const [data, loading] = useFetch('https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json');
 console.log('List', data, loading);
 setMedia(data);
  return (
    <View style={{marginTop: 19}}>
    <FlatList
    data={media}
    keyExtractor={(item, index) => index.toString()}

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
