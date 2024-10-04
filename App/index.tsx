import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GlobalProvider} from './providers';
import {Navigation} from './navigation';
import HomeScreen from './screens/homeScreen';
import ContactScreen from './screens/contactScreen';

const App = () => {
  return (
    <GlobalProvider>
      <SafeAreaView style={{flex: 1}}>
        <Navigation
          navigators={[
            {
              name: 'Home',
              component: HomeScreen,
            },
            {
              name: 'Contact',
              component: ContactScreen,
            },
          ]}
        />
      </SafeAreaView>
    </GlobalProvider>
  );
};

export default App;
