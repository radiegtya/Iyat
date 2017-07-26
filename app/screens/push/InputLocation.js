import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, Left, Body, Right, Icon } from 'native-base';

export default class InputLocation extends Component{

  constructor(){
    super();
  }

  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  };

  _renderHeader(){
    return (
      <Header>
        <Left/>
        <Body>
          <Text>Contacts</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={()=>this.handleDone(validationCondition)}>
            <Text style={{color: validationCondition ?'#4285f4':'#d0d0d0', marginRight: 10}}>Done</Text>
          </TouchableOpacity>
        </Right>
      </Header>
    )
  }


  render(){
    return (
      <Container>
        <Content>
          {this._renderHeader()}

          <GooglePlacesAutocomplete
            placeholder='Enter Location'
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              this.setState({displaySearch: false})
              console.log(data);
              console.log(details.geometry.location);
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyB9hkuAlByxQvx4DXuvSKGJnJuB91thFFo',
              language: 'en', // language of the results
              types: '(cities)', // default: 'geocode'
            }}
            styles={{
              textInputContainer: {
                backgroundColor: '#FFF',
                borderTopWidth: 0,
                borderBottomWidth:0
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              },
              listView: {
                backgroundColor: '#FFF',
                position: 'relative',
                height: height / 4,
                width: width,
                top: 40
              }
            }}
            currentLocation={true}
          />
        </Content>
      </Container>
    );
  }

}
