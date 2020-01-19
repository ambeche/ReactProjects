import React from 'react';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import List from './components/List';
import {MediaProvider} from './contexts/MediaContexts';




const App = () => {
  return (
<MediaProvider>
    <List />
    </MediaProvider>
  );
};



export default App;
