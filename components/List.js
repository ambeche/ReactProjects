import React, {useContext} from 'react';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';


import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContexts';
import {getAllMedia} from '../hooks/APIHooks';
const List = () => {
 const [media, setMedia] = useContext(MediaContext);
 const [data, loading] = getAllMedia();

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
