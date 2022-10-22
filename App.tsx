import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as RDProvider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import {store} from './app/store';

import CustomDrawer from './app/navigation/CustomDrawer';
import AuthNavigation from './app/navigation/AuthNavigation';

export type StackNavigatorParamList = {
  Main: undefined;
};

const StackNavigator = createNativeStackNavigator<StackNavigatorParamList>();

export default function App() {
  const [authenticated] = React.useState<boolean>(true);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <React.Fragment>
      <RDProvider store={store}>
        <NavigationContainer>
          {authenticated ? (
            <StackNavigator.Navigator
              initialRouteName="Main"
              screenOptions={{headerShown: false}}>
              <StackNavigator.Screen name="Main" component={CustomDrawer} />
            </StackNavigator.Navigator>
          ) : (
            <AuthNavigation />
          )}
        </NavigationContainer>
      </RDProvider>
    </React.Fragment>
  );
}
