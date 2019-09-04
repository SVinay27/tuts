import React from 'react'
import {Text ,View ,Image,StyleSheet} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetails = ({album}) => {
    const {title, artist, thumbnail_image,image} = album
    const {thumbnailStyle,heaerContentStyle,
        thumbnailContainerStyle,headerText,imageStyle
    } =styles
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>   
                <View style={heaerContentStyle}>
                <Text style={headerText}>{title}</Text>
                <Text>{artist}</Text>
                </View>
            
            </CardSection>
            <CardSection>
                <Image 
                style={imageStyle}
                source={{uri:image}} />
            </CardSection>
            <CardSection>
                <Button onPress={()=> console.log(title)} />
            </CardSection>
            
        </Card>
    )
}
const styles = StyleSheet.create({
    heaerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        width:50,
        height:50
    },
    thumbnailContainerStyle:{
     justifyContent:'center'   ,
     alignItems:'center',
     marginLeft:10,
     marginRight:10
    },
    headerText:{
        fontSize:18,
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
});
export default AlbumDetails
