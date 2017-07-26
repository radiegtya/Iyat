import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Content, Header, Left, Body, Right, Text, Title, ListItem, List, Thumbnail, Item, Input, Icon, Button} from 'native-base';
import Meteor, {createContainer} from 'react-native-meteor';
import {MO} from '../../MO';
import Service from '../../components/Service';


class Home extends Component {

  _renderHeader(){
    return (
      <Header style={{backgroundColor: '#FFB55B'}}>
        <Left/>
        <Body>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#4B515D'}}>Iyat</Text>
        </Body>
        <Right/>
      </Header>
    )
  }

  render(){
    return (
      <Container>

        {this._renderHeader()}

        {/* === Content Start === */}
        <Content>

          {/* List */}
          <List>
            {this.props.services.map((service, key) => <Service key={key} service={service} {...this.props} />)}
          </List>
          {/* List End */}

        </Content>
        {/* === Content End === */}

      </Container>
    )
  }

}

const HomeContainer = createContainer((props) => {
  return {
    services: [
      {name: "Tai Batita"},
      {name: "Tai Imyut"},
      {name: "Tai Terong/Cabe"},
      {name: "Tai Gaban"},
    ]
  }
}, Home);

export default HomeContainer;
