import * as React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Button,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

// You can import from local files
import ListItem from '../components/ListItem';
import { sortTypeConstants, urls } from '../const/const'
import { listActions } from '../actions/list'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class CustomFlatList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <Button
          onPress={() => params.handleRefresh.dispatch(listActions.getList())}
          title="Refresh"
          color="#000"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleRefresh: this.props});
    this.props.dispatch(listActions.getList());
  }

  render() {
    const {navigate} = this.props.navigation;
    if (this.props.loading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <View style={styles.stickyBarButtons}>
          <Button
            onPress={() => this.props.dispatch(listActions.sortList(sortTypeConstants.SCORE))}
            title="Top"
            color="#000"
          />
          <Button
            onPress={() => this.props.dispatch(listActions.sortList(sortTypeConstants.CREATED))}
            title="News"
            color="#000"
          />
          <Button
            onPress={() => this.props.dispatch(listActions.sortList(sortTypeConstants.CONTROVERSIAL))}
            title="Controversial"
            color="#000"
          />
        </View>
        <FlatList style={{ top: 50 }}
          data={this.props.items}
          renderItem={({ item }) => (
            <Card onPress={() => navigate('Detail', {url: urls.DOMAIN+item.data.permalink})}>
              <ListItem 
                title={item.data.title} 
                thumbnail={item.data.thumbnail}
                created={item.data.created}
                author={item.data.author}
                score={item.data.score}
                num_comments={item.data.num_comments}
              />
            </Card>
          )}
          keyExtractor={item => item.data.id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.flatList.items,
    loading: state.flatList.loading
  }
}

export default connect(mapStateToProps)(CustomFlatList);

const styles = StyleSheet.create({
  stickyBarButtons: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    height: 50, 
    position: 'absolute', 
    backgroundColor: 'grey', 
    width: '100%',
  },
});