import * as React from 'react';
import ScreenFlatList from '../screens/ScreenFlatList'
import ScreenDetail from '../screens/ScreenDetail'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class RoutingFlatList extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator (
  {
    Home: ScreenFlatList,
    Detail: ScreenDetail
  },{
    defaultNavigationOptions:{
      title: 'Reddit Flat List',
      headerStyle: {
        backgroundColor: 'grey'
      },
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);