import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ContactScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Contact!</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ContactScreen;
