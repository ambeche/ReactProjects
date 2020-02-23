import React from 'react';
import {MediaProvider} from './contexts/MediaContexts';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
<MediaProvider>
    <Navigator />
</MediaProvider>
  );
};



export default App;
