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
          <Text subtitle style={{color: '#4B515D'}}>Pilih Layanan</Text>
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
            {this.props.services.map((service, i) => <Service key={i} service={service} {...this.props} />)}
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
      {name: "Sedot Iyat Batita", price: "IDR 100.000", imageUri: 'https://trello-attachments.s3.amazonaws.com/597867348d5db8c191af9d7d/597867486c3b1aeef7423602/cae1b640705031a599b7a0d63bced56c/batita.png'},
      {name: "Sedot Iyat Balita", price: "IDR 120.000", imageUri: 'https://trello-attachments.s3.amazonaws.com/597867348d5db8c191af9d7d/597867486c3b1aeef7423602/2d3e15b5da4c61ade72eb4db0b409a15/balita.png'},
      {name: "Sedot Iyat Remaja", price: "IDR 130.000", imageUri: 'https://trello-attachments.s3.amazonaws.com/597867348d5db8c191af9d7d/597867486c3b1aeef7423602/29ee6f9d07b7c31233a381974339d8cf/remaja.png'},
      {name: "Sedot Iyat Dewasa", price: "IDR 150.000", imageUri: 'https://trello-attachments.s3.amazonaws.com/597867348d5db8c191af9d7d/597867486c3b1aeef7423602/9b9526234efa17bf0ee4035b364e1251/dewasa.png'},
    ]
  }
}, Home);

export default HomeContainer;
