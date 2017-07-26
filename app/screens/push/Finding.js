import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { H2, Spinner, Text, Button } from 'native-base';

export default class Finding extends Component{

  constructor(){
    super();
    this.state = {
      isLoading: true,
      isFound: false
    };
  }

  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  };

  componentDidMount(){
    const self = this;
    // alert(self.props.address)
    setTimeout(()=>{
      self.props.navigator.push({
        screen: 'push.Order',
        passProps: {...self.props}
      })
    }, 2000);
  }

  render(){
    const {isLoading, isFound} = this.state;

    return (
      <View style={styles.container}>
        <H2 style={{marginBottom: 50}}>{"Finding Iyat's Truck"}</H2>

        <Image style={{width: 150, height: 100}} source={require('../../img/map-marker.png')}/>

        {isLoading?
          (
            <View>
              <Spinner color='#FFB55B'/>
              <Text subtitle>Please Wait...</Text>
            </View>
          ):
          null
        }
      </View>
    );
  }

}

Finding.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  address: PropTypes.string
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});
