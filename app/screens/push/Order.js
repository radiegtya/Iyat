import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Content, Text, Header, Left, Body, Right, Icon, List, ListItem} from 'native-base';
import Avatar from '../../components/Avatar';

export default class Order extends Component{

  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  };

  _renderHeader(){
    return (
      <Header style={{backgroundColor: '#FFB55B'}}>
        <Left>
          <TouchableOpacity onPress={()=>this.props.navigator.popToRoot()}>
            <Icon name="arrow-back" style={{color: '#4B515D'}}/>
          </TouchableOpacity>
        </Left>
        <Body>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#4B515D'}}>My Order</Text>
        </Body>
        <Right/>
      </Header>
    )
  }

  render(){
    const {address} = this.props;

    return (
      <Container>
        {this._renderHeader()}
        <Content>

          <List>
            <ListItem avatar style={{marginTop: 10}}>
              <Left>
                <Avatar
                  uri={'https://trello-attachments.s3.amazonaws.com/597867348d5db8c191af9d7d/597867486c3b1aeef7423602/cae1b640705031a599b7a0d63bced56c/batita.png'}
                />
              </Left>
              <Body>
                <Text>{'CV. Sedut Senut Iyat'}</Text>
                <Text note style={{color: "#FFB55B"}}>On Progress</Text>
              </Body>
              <Right>
                <Icon name="call" style={{color: '#678352'}}/>
              </Right>
            </ListItem>

            <ListItem itemDivider>
              <Text note>info</Text>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="pin" style={{color: '#FFB55B'}} />
              </Left>
              <Body>
                <Text>{address.length > 50? address.substr(0, 50) + "...": address}</Text>
              </Body>
              <Right/>
            </ListItem>

          </List>


        </Content>
      </Container>
    );
  }

}
