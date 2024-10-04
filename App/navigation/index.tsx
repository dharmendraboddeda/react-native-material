import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {NavigationContainerProps} from '@react-navigation/native';

const Stack = createStackNavigator();

interface NavigatorProps {
  name: string;
  component: React.ComponentType<any>;
  options?: object;
}

interface NavigationProps extends Omit<NavigationContainerProps, 'children'> {
  navigators: NavigatorProps[];
}

export const Navigation = ({navigators, ...props}: NavigationProps) => {
  return (
    <NavigationContainer {...props}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {navigators.map((navigator, index) => (
          <Stack.Screen
            key={navigator.name}
            name={navigator.name}
            component={navigator.component}
            options={navigator.options || {}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
