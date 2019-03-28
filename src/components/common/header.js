// Import libraries for making components
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

//make a component

const album = 'ALBUMS HITS'

const Header = (props) =>{
    const { textStyle,viewStyle} = styles;
    

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle:{
        backgroundColor : '#F8F8F8',
        justifyContent: 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 15,
        shadowColor : '#000',
        shadowOffset : {width: 0, height: 2},
        shadowOpacity : 0.2,
        elevation : 2,
        position : 'relative'

    },
    textStyle :{
        fontSize : 20
    }
};


// Make the component avilabila to others parts of app
export  {Header};
