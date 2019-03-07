import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Timestamp from 'react-timestamp';
import { dateConverter } from '../utils/utils';

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.props.title}
        </Text>
        <Text style={styles.paragraph}>
          {`Creation date: ${dateConverter(this.props.created)}`}
        </Text>
        <Text style={styles.paragraph}>
          <Timestamp style={styles.paragraph} time={this.props.created} component={Text} />
        </Text>
        <Text style={styles.paragraph}>
          {`Author: ${this.props.author}`}
        </Text>
        <Image style={styles.picture} source={{uri: this.props.thumbnail}} />
        <Text style={styles.paragraph}>
          {`Score: ${this.props.score}`}
        </Text>
        <Text style={styles.paragraph}>
          {`Nº Comments: ${this.props.num_comments}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 18,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picture: {
    height: 200,
    width: 200,
  }
});