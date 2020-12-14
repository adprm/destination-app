import React from 'react';
import { View, Text, Image } from 'react-native';

const TitlePlace = (props) => {
    return (
        <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', flex: 1}}>{props.title}</Text>
            <Image source={require('../../assets/icons/right-arrow.png')} style={{height: 20, width: 20}} />
        </View>
    )
}

export default TitlePlace;
