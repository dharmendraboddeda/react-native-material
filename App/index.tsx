import React from 'react';
import {GlobalProvider} from './providers';
import {Navigation} from './navigation';
import HomeScreen from './screens/homeScreen';

const App = () => {
  return (
    <GlobalProvider>
      <Navigation
        navigators={[
          {
            name: 'Home',
            component: HomeScreen,
          },
        ]}
      />
    </GlobalProvider>
  );
};

export default App;
