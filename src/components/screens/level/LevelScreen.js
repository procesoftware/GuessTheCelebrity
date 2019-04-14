import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Button } from 'native-base';

class LevelScreen extends Component {
  render () {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.tile} >
                  <TouchableOpacity  style={styles.text}>
                      <Animatable.Text animation="pulse" iterationCount="infinite" direction="alternate-reverse">Level 1</Animatable.Text>
                      <Animatable.Text animation="pulse" iterationCount="infinite" style={{ textAlign: 'center' }}><Icon name="unlock" size={50} color="red" /></Animatable.Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 2</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 3</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 2</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 2</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 3</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 2</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 2</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 3</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 2</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 2</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
              <View style={styles.tileLock} >
                  <TouchableOpacity >
                      <Text>Level 3</Text>
                      <Icon name="lock" size={50} color="gray" />
                  </TouchableOpacity>
              </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: "space-between"
  },
  tile: {
    width: 30 + "%", 
    height: 20 + "%", 
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  tileLock:{
    borderBottomColor: "gray",
    width: 30 + "%", 
    height: 20 + "%", 
    borderWidth: 1,
    color: "gray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  text:{
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LevelScreen;