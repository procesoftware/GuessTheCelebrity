import React from 'react';
import { Container, Header, Content, Icon } from 'native-base';


export default class SettingsScreen extends React.Component {
    render() {
      return (
      <Container>
        <Header />
        <Content>
          <Icon name='film' />
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
          <Icon type="FontAwesome" name="home" />
        </Content>
      </Container>
      );
    }
}
  