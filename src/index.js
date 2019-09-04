import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from './components/Header'
import AlbumList from './components/AlbumList'
export class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header headerText={'Albums'} />
                <AlbumList />
            </View>
        )
    }
}

export default App
