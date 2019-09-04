import React,{Component} from 'react'
import { View, StyleSheet, ScrollView} from 'react-native'
import Axios from 'axios';
import AlbumDetails from './AlbumDetails'

class AlbumList extends Component {
    state = {album:[]};

   componentDidMount(){
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({album:response.data}));   
    
   }

   renderAlbum(){
       return this.state.album.map(album => 
        <AlbumDetails key={album.title} album={album} />
        );

   }
    render() {
        const {viewStyle,textStyle} = style;
        return (
            <ScrollView>
               {this.renderAlbum()}
            </ScrollView>
        )
    }
}

export default AlbumList

const style = StyleSheet.create({
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
    },
    textStyle:{
        fontSize:10,
    }
});
