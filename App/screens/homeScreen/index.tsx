import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the React Native!</Text>

      <Button
        title="Go to Contact Screen"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
};

export default HomeScreen;
