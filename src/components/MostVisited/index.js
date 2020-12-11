import React from 'react';
import { View, Text, Image } from 'react-native';

const MostVisited = (props) => {
    return (
        <View style={{backgroundColor: '#fff', borderRadius: 10, marginTop: 10, marginHorizontal: 10}}>
          <View style={{paddingLeft: 10, marginVertical: 10, flexDirection: 'row'}}>
            <Image source={props.img} style={{width: 80, height: 80, borderRadius: 10}} />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>{props.title}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
                <Image source={require('../../assets/icons/location-red.png')} style={{height: 12, width: 12, marginRight: 6}} />
                <Text style={{fontSize: 14, color: '#a8a8a8'}}>{props.location}</Text>
              </View>
              <Text style={{fontSize: 16, color: '#0266b8', fontWeight: 'bold'}}>Rp{props.price}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../../assets/icons/star.png')} style={{height: 12, width: 12, marginRight: 6}} />
                <Text style={{fontSize: 14, color: '#a8a8a8'}}>{props.rate}</Text>
                <Image source={props.icon} style={{height: 12, width: 12, marginRight: 6, marginLeft: 20}} />
                <Text style={{fontSize: 14, color: '#a8a8a8'}}>{props.category}</Text>
              </View>
            </View>
          </View>
        </View>
    )
}

export default MostVisited;
