import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, ScrollView, Dimensions, Image, Modal} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Header, Left, Body, Right, Icon } from 'native-base';
import Meteor from 'react-native-meteor';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


const { width, height } = Dimensions.get('window');
// const latitudeDelta = 0.04250270688370961;
const latitudeDelta = 0.009;

export default class PickLocation extends Component{

  constructor(){
    super();
    this.state = {
      address: '',
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: latitudeDelta,
        longitudeDelta:  latitudeDelta * (width / height),
      },
    };
  }

  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true,
  };

  componentDidMount(){
    const self = this;
    navigator.geolocation.getCurrentPosition((res)=>{
      const {latitude, longitude} = res.coords;

      self.setState({
        region: {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta:  latitudeDelta * (width / height),
        }
      })
    })
  }

  _renderHeader(){
    const {latitude, longitude} = this.state;
    const validationCondition = latitude != "" && longitude != "";
    return (
      <Header style={{backgroundColor: '#FFB55B'}}>
        <Left>
          <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
            <Icon name="arrow-back" style={{color: '#4B515D'}}/>
          </TouchableOpacity>
        </Left>
        <Body>
          <Text style={{color: '#4B515D'}}>Pick Location</Text>
        </Body>
        <Right/>
      </Header>
    )
  }

  onRegionChange(region){
    this.setState({ region });
  }

  onRegionChangeComplete(region) {
    if(region.latitude != 0){
      let params = {
        key: 'AIzaSyCP80Q20eVfyxuQH1-Walp0jjatku8nvf4',
        latlng: `${region.latitude},${region.longitude}`,
      };

      fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?key='+ params.key+ '&latlng=' + params.latlng)
          .then((res) => res.json())
          .then((json) => {
            if (json.status !== 'OK') {
              throw new Error(`Geocode error: ${json.status}`);
            }
            this.GooglePlacesAutocompleteRef.setAddressText(json.results[0].formatted_address)
          });
    }
  }

  handleSetLocation(res){
    this.props.navigator.push({
      screen: 'push.Finding',
      passProps: {
        latitude: res.coordinate.latitude,
        longitude: res.coordinate.longitude,
      }
    })
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          {this._renderHeader()}
        </View>

        <View style={styles.search}>
          <GooglePlacesAutocomplete
            ref={(ref) => this.GooglePlacesAutocompleteRef = ref}
            placeholder='Enter Location'
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              const {lat, lng} = details.geometry.location;
              this.setState({
                region: {
                  latitude: lat,
                  longitude: lng,
                  latitudeDelta: latitudeDelta,
                  longitudeDelta:  latitudeDelta * (width / height),
                }
              })
            }}
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyB9hkuAlByxQvx4DXuvSKGJnJuB91thFFo',
              language: 'en', // language of the results
              types: '(regions)', // default: 'geocode'
              components: 'country:id'
            }}
            GooglePlacesSearchQuery={{
             // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
             rankby: 'distance',
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
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
          showsUserLocation={true}
          region={this.state.region}
          initialRegion={this.state.region}
        >

            <MapView.Marker
              coordinate={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
              }}
              onPress={(e)=>this.handleSetLocation(e.nativeEvent)}
            >
              <Image
                style={{width: 120, height: 120}}
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
    backgroundColor: '#282C34'
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
