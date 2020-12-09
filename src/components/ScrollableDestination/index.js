import React from 'react';
import { Image, Text, View } from 'react-native';

const ScrollableDestination = (props) => {
    return (
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image source={props.img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.20, borderRadius: 10}}></View>
            </View>
            <View style={{position: 'absolute', marginTop: '70%', marginLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>{props.title}</Text>
              <View style={{flexDirection: 'row', marginTop: 7}}>
                <Image source={require('../../assets/icons/location.png')} style={{height: 12, width: 12}} />
                <Text style={{fontSize: 12, fontWeight: 'normal', color: 'white', paddingLeft: 5}}>{props.location}</Text>
              </View>
            </View>
        </View>
    )
}

export default ScrollableDestination;
