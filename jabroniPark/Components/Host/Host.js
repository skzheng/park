import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Picker} from 'react-native';
import fire from '../../Firebase/firebase';

export default class Host extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      name: '',
      images: [],
      descriptions: '',
      price: ''
    }
  }

  handleUsername = (username) => {
    this.setState({username});
  }

  handleName = (name) => {
    this.setState({name});
  }

  handleImageUrls = (urls) => {
    this.setState({urls});
  }

  handleDescription = (description) => {
    this.setState({description});
  }

  handlePrice = (price) => {
    this.setState({price});
  }

  handlePost = () => {
    console.log(this.state);
    let spot = this.state;
    fire.database().ref('hostspots').push(spot).then(added => {
      console.log(added);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Host Parking Spot </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter parking location"
          onChangeText={this.handleUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          onChangeText={this.handleName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter image urls"
          onChangeText={this.handleImageUrls}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter descriptions"
          onChangeText={this.handleDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter price"
          onChangeText={this.handlePrice}
        />
        <Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
        <Button
          style={{width: 150, borderRadius: 15}}
          title="Confirm"
          onPress={this.handlePost}
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
    padding: 10
  }
});
