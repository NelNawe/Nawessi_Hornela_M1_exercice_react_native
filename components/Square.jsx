import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

class Square extends React.Component {
    render() {
        
         return (
           <View style={[{backgroundColor: this.props.color }, styles.firstcontainer]}>
            <Text >{this.props.title}</Text>
           </View>
         )
    }     
} 
const styles = StyleSheet.create({ 
    firstcontainer:{height:50, width:50}
})

export default Square
