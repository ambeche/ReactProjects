import React, {useContext} from 'react';
import {List as BaseList} from 'native-base';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContexts';
import {getAllMedia} from '../hooks/APIHooks';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [data] = getAllMedia();
  setMedia(data);
  return (
    <BaseList
      dataArray={media}
      keyExtractor={(item, index) => index.toString()}
      renderRow={({item}) => <ListItem
        navigation={props.navigation}
        item={item}
      />}
    />
  );
};

export default List;
