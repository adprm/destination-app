import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const DetailDestination = (props) => {
    return (
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                <View style={{backgroundColor: '#fff', borderRadius: 10}}>
                    <View style={{}}>
                        <Image source={props.img} style={{height: 250, width: '100%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderRadius: 10}} />
                    </View>
                    <View style={{marginHorizontal: 20, marginVertical: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.title}</Text>
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                                <Image source={require('../../assets/icons/location-red.png')} style={{height: 12, width: 12, marginRight: 6}} />
                                <Text>{props.location}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                                <Image source={require('../../assets/icons/star.png')} style={{height: 12, width: 12, marginRight: 6}} />
                                <Text>{props.rate}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                                <Image source={props.imgcategory} style={{height: 12, width: 12, marginRight: 6}} />
                                <Text>{props.category}</Text>
                            </View>
                        </View>
                        <View style={{paddingTop: 10}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Deskripsi</Text>
                            <Text style={{marginTop: 5, color: '#6e6e6e'}}>{props.desc}</Text>
                        </View>
                        {/* <View style={{paddingTop: 10}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Foto Destinasi</Text>
                            <ScrollView horizontal style={{flexDirection: 'row', paddingTop: 5}}>
                                <Image source={require('../../assets/images/image-destination/candi-borobudur1.jpg')} style={{width: 60, height: 60, flex: 1, marginRight: 10, borderRadius: 10}} />
                                <Image source={require('../../assets/images/image-destination/candi-borobudur2.jpg')} style={{width: 60, height: 60, flex: 1, marginRight: 10, borderRadius: 10}} />
                                <Image source={require('../../assets/images/image-destination/candi-borobudur3.jpg')} style={{width: 60, height: 60, flex: 1, marginRight: 10, borderRadius: 10}} />
                                <Image source={require('../../assets/images/image-destination/candi-borobudur4.jpg')} style={{width: 60, height: 60, flex: 1, marginRight: 10, borderRadius: 10}} />
                                <Image source={require('../../assets/images/image-destination/candi-borobudur5.jpg')} style={{width: 60, height: 60, flex: 1, marginRight: 10, borderRadius: 10}} />
                            </ScrollView>
                        </View> */}
                        <View style={{paddingTop: 10}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Harga Trip</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
                                <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0266b8'}}>Rp{props.price}</Text>
                                    <Text>/orang</Text>
                                </View>
                                <View style={{height: 35, backgroundColor: '#ccd9ed', borderRadius: 8, justifyContent: 'center', alignItems: 'center'}}>
                                    <View style={{paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={require('../../assets/icons/clock.png')} style={{width: 12, height: 12}} />
                                        <Text style={{paddingLeft: 6, color: '#0266b8'}}>{props.time}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={{marginTop: 10, alignItems: 'center', height: 40, backgroundColor: '#0266b8', justifyContent: 'center', borderRadius: 8}}>
                                <Text style={{color: '#fff'}}>Booking Sekarang</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}

export default DetailDestination;
