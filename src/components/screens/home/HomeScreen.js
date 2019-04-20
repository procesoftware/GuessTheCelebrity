import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  Text,
  Content,
  CardItem,
  Icon,
  Body
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from "./HomeScreen.style";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row style={styles.topRow}>

            </Row>
            <Row style={styles.buttonRow}>
              <Button
                rounded
                style={styles.playButton}
                onPress={() => this.props.navigation.navigate("Game")}
              >
                <Text>New Game</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
