import React from 'react'
import {
    View, TouchableOpacity, Text
} from 'react-native'

// @styles
import styles from './Styles'

export default class Button extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.props.onPress}  style={[styles.buttonContainer, { backgroundColor: this.props.color }]}>
                    {this.props.children}
                </TouchableOpacity>
            </View>
        )
    }
}