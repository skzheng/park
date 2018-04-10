import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import fire from '../../Firebase/firebase';
console.disableYellowBox = true;
export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      signup: false,
      username: '',
      password: ''
    }
  }

  changeToLogin = () => {
    this.setState({signup: false});
  }

  changeToSignup = () => {
    this.setState({signup: true});
  }

  handleUsername = (username) => {
    this.setState({username});
  }

  handlePassword = (password) => {
    this.setState({password});
  }

  handleLogin = () => {
    // console.log(this.state);
    return fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(err);
    })
  }

  handleSignup = () => {
    return fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginChange}>
          <Text onPress={this.changeToLogin}> Log In </Text>
          <Text onPress={this.changeToSignup}> Sign Up </Text>
        </View>

        <TextInput
          style={styles.input}
          type="text"
          placeholder="Enter username"
          onChangeText={this.handleUsername}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter password"
          onChangeText={this.handlePassword}
        />
        {
          !this.state.signup 
          ? <Button
                style={{width: 150, borderRadius: 15}}
                title="Log In"
                onPress={this.handleLogin}
              />
          : <Button
              style={{width: 150, borderRadius: 15}}
              title="Sign Up"
              onPress={this.handleSignup}
            />
        }
        
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
    padding: 10
  },
  loginChange: {
    flexDirection: 'row'
  }
});
