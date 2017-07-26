import React, {Component} from 'react';
import {Text, ListItem, Left, Thumbnail, Body, Right} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import {MO} from '../MO';
import Avatar from './Avatar';

class Service extends Component{

  handleOrder(){
    this.props.navigator.push({screen: 'push.PickLocation'})
  }

  render(){
    const {key, service} = this.props;

    return (
      <ListItem key={key} onPress={()=>this.handleOrder()}>
          <Left/>
          <Body>
            <Text>{service.name}</Text>
          </Body>
          <Right/>
      </ListItem>
    )
  }

}

export default createContainer((props) => {
  return {
  }
}, Service);
