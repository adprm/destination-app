import React from 'react';
import { Image, Text, View } from 'react-native';

const CategorySection = (props) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{borderColor: 'grey', borderWidth: 1, height: 64, width: 64, marginTop: 10, borderRadius: 32, alignItems: 'center', borderColor: '#dbd9d9', justifyContent: 'center'}}>
              <Image source={props.img} style={{width: 30, height: 30}} />
            </View>
            <Text style={{fontSize: 13, paddingTop: 10, marginBottom: 15}}>{props.title}</Text>
        </View>
    )
}

export default CategorySection;
