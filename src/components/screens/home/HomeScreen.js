import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HomeScreen extends Component {
    render() {
      return (
        <Container>
          <Header />
          <Content>
            <Grid>
                <Row style={{ height: 400 }}>

                </Row>
                <Row         style={{justifyContent: "center",
        alignItems: "center"}} >

                <Button rounded info style={{width: 300,
                justifyContent: "center",
                alignItems: "center"}}>
                        <Text>Start Game</Text>
                    </Button>
                </Row>
            </Grid>
            
          </Content>
        </Container>
      );
    }
  }