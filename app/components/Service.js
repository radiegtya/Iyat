import React, {Component} from 'react';
import {Text, ListItem, Left, Thumbnail, Body, Right} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';

export default class Service extends Component{

  handleOrder(){
    this.props.navigator.push({screen: 'push.PickLocation'})
  }

  render(){
    const {service} = this.props;

    return (
      <ListItem onPress={()=>this.handleOrder()}>
        <Body>
          <Text title>{service.name}</Text>
        </Body>
        <Thumbnail style={{width: 120, height: 120}} source={{uri: service.imageUri}} />
      </ListItem>
    )
  }

}
