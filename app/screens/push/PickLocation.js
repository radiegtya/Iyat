import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, ScrollView, Dimensions, Image, Modal} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, Left, Body, Right, Icon } from 'native-base';
import Meteor from 'react-native-meteor';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


const { width, height } = Dimensions.get('window');

export default class PickLocation extends Component{

  constructor(){
    super();
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  };

  _renderHeader(){
    const {latitude, longitude} = this.state;
    const validationCondition = latitude != "" && longitude != "";
    return (
      <Header>
        <Left>
          <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
            <Icon name="arrow-back" style={{color: '#4285f4'}}/>
          </TouchableOpacity>
        </Left>
        <Body>
          <Text>Pick Location</Text>
        </Body>
        <Right/>
      </Header>
    )
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render(){
    const {displaySearch} = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          {this._renderHeader()}
        </View>

        <View style={styles.search}>
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
                fontSize: 16,
                borderRadius: 0
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              listView: {
                backgroundColor: '#FFF',
                position: 'absolute',
                height: height / 4,
                width: width,
                top: 40,
              }
            }}
            currentLocation={true}
          />
        </View>

        <MapView
          style={styles.map}
          onRegionChange={this.onRegionChange.bind(this)}
          region={this.state.region}
        >

            <MapView.Marker
              coordinate={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
              }}
            >
              <Image
                style={{width: 40, height: 40}}
                source={require('../../img/map-marker.png')}
              />
            </MapView.Marker>

        </MapView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFB55B'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  search: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    height: 120,
  },
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    top: 190
  }
});
