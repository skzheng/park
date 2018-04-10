import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class Host extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername = (username) => {
    this.setState({username});
  }

  handlePassword = (e) => {
    this.setState({password});
  }

  handleLogin = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Log In </Text>
        <TextInput
          style={styles.input}
          type="text"
          placeholder="Enter username"
          onChange={this.handleUsername}
        />
        <TextInput
          style={styles.input}
          type="password"
          placeholder="Enter password"
          onChange={this.handlePassword}
        />
        <Button
          style={{width: 150, borderRadius: 15}}
          title="Log In"
          onPress={this.handleLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    // width: '',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 150,
    padding: 5
  }
});
