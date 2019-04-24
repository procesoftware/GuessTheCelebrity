import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  Text,
  Content,
  CardItem,
  Icon,
  Body,
  View
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from "./HomeScreen.style";
import {inject, observer} from "mobx-react/native";

@inject('store') @observer
export default class HomeScreen extends Component {
  render() {
    const store = this.props.store;
    return (
      <Container>
        <Content>
          <Grid>
            <Row style={styles.topRow}>
              <Icon
                name="keypad"  
                style={{
                  color: "red",
                  fontSize: 50
                }}
              />
              <Text style={{ marginTop: 30, fontSize: 26, fontFamily: 'Cochin' }}>Guess The Celebrity</Text>
              <Text style={{top: 50,  fontSize: 16}}> Total coins:  {store.score}</Text>  
            </Row>
            <Row style={styles.buttonRow}>
              <Button
                rounded
                style={styles.playButton}
                onPress={() => this.props.navigation.navigate("Game")}
              >
                <Text>Play Game</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
