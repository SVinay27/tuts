import React,{Component, Fragment} from 'react'
import { View, Text , StyleSheet} from 'react-native'

const Header = (props) => {
    const {viewStyle,textStyle} =style;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

export default Header

const style = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#9754F9',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:10,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'

    },
    textStyle:{
        color:'#fff',
        fontSize:20
    }
});