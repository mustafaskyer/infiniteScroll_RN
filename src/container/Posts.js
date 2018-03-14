import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
//@styles
import styles from './Styles'
export default class ListAvatarExample extends Component {
  render() {
    return (
     
        
            <ListItem style={styles.listItemContainer} avatar>
              <Left>
                <Thumbnail source={{ uri: this.props.uri}} />
              </Left>
              <Body>
                <Text style={styles.listItemName}>{this.props.name}</Text>
                <Text note>{this.props.desc}</Text>
              </Body>
              <Right>
                <Text style={styles.listItemDate} note>{this.props.date}</Text>
              </Right>
            </ListItem>

    );
  }
}
