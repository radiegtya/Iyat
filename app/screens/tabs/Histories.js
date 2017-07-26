import React, {Component} from 'react';
import {Container, Content, Header, Left, Body, Right, Text, Title, ListItem, List, Thumbnail, Item, Input, Icon, Form} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default class Histories extends Component {

  _renderHeader(){
    return (
      <Header>
        <Left/>
        <Body>
          <Text>Iyat</Text>
        </Body>
        <Right/>
      </Header>
    )
  }

  handlePickLocation(){
    this.props.navigator.push({
      screen: 'push.PickLocation'
    });
  }

  render(){
    return (
      <Container>
        {this._renderHeader()}
        <Content>
          <TouchableOpacity onPress={()=>this.handlePickLocation()}>
            <Text>Pick Location</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }

}
