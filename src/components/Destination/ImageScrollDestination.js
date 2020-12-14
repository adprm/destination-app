import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageScrollDestination = (props) => {
    return (
        <View style={{marginRight: 10}}>
            <View style={{width: 120, height: 120, borderRadius: 10}}>
                <Image source={props.img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.20, borderRadius: 10}}></View>
            </View>
            <View style={{position: 'absolute', marginTop: '70%', marginLeft: 10}}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white'}}>{props.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/icons/location.png')} style={{height: 10, width: 10}} />
                    <Text style={{fontSize: 10, fontWeight: 'normal', color: 'white', paddingLeft: 5}}>{props.location}</Text>
                </View>
            </View>
        </View>
    )
}

export default ImageScrollDestination;
