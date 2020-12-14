import React from 'react';
import { ScrollView, View } from 'react-native';
import ImageScrollDestination from './ImageScrollDestination';
import TitlePlace from './TitlePlace';

const Destination = () => {
    return (
        <ScrollView>
            <View style={{marginVertical: 5, marginHorizontal: 10, backgroundColor: '#fff', borderRadius: 8}}>
                <TitlePlace title='Candi' />
                <View style={{height: 2, backgroundColor: '#e8e8e8', marginBottom: 3}}></View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 10, marginRight: 10}}>
                    <ImageScrollDestination title='Pura Urun Dalu' location='Bali' img={require('../../assets/images/pura-urun-dalu.jpg')} />
                    <ImageScrollDestination title='Candi Prambanan' location='Yogyakarta' img={require('../../assets/images/candi-prambanan.jpg')} />
                    <ImageScrollDestination title='Candi Borobudur' location='Magelang' img={require('../../assets/images/candi-borobudur.jpg')} />
                    <ImageScrollDestination title='Candi Dieng' location='Wonosobo' img={require('../../assets/images/candi-dieng.jpg')} />
                    <ImageScrollDestination title='Candi Gedong Songo' location='Semarang' img={require('../../assets/images/candi-gedong-songo.jpg')} />
                </ScrollView>
            </View>
            <View style={{marginVertical: 5, marginHorizontal: 10, backgroundColor: '#fff', borderRadius: 8}}>
                <TitlePlace title='Pantai' />
                <View style={{height: 2, backgroundColor: '#e8e8e8', marginBottom: 3}}></View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 10, marginRight: 10}}>
                    <ImageScrollDestination title='Pantai Kuta' location='Bali' img={require('../../assets/images/pantai-kuta.jpg')} />
                    <ImageScrollDestination title='Pantai Nihiwatu' location='Sumba' img={require('../../assets/images/pantai-nihiwatu.jpg')} />
                    <ImageScrollDestination title='Pantai Ora' location='Maluku' img={require('../../assets/images/pantai-ora.jpg')} />
                    <ImageScrollDestination title='Pantai Weh Aceh' location='Aceh' img={require('../../assets/images/pantai-weh.jpg')} />
                </ScrollView>
            </View>
            <View style={{marginVertical: 5, marginHorizontal: 10, backgroundColor: '#fff', borderRadius: 8}}>
                <TitlePlace title='Curug' />
                <View style={{height: 2, backgroundColor: '#e8e8e8', marginBottom: 3}}></View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 10, marginRight: 10}}>
                    <ImageScrollDestination title='Curug Madakaripura' location='Probolinggo' img={require('../../assets/images/curug-madakaripura.jpg')} />
                    <ImageScrollDestination title='Curug Banyumala' location='Bali' img={require('../../assets/images/curug-banyumala.jpg')} />
                    <ImageScrollDestination title='Curug Sipiso-piso' location='Sumatera Utara' img={require('../../assets/images/curug-sipiso-piso.jpg')} />
                    <ImageScrollDestination title='Benang Kelambu' location='Lombok' img={require('../../assets/images/curug-benang-kelambu.jpg')} />
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default Destination;
