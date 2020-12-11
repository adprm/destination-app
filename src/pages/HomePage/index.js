import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import CategorySection from '../../components/CategorySection';
import MostVisited from '../../components/MostVisited';
import ScrollableDestination from '../../components/ScrollableDestination';


const HomePage = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor: '#e8e8e8'}}>
            {/* Scrollable Destinasi */}
            <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 10, paddingVertical: 10, backgroundColor: '#fff'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Destinasi')}>
                    <ScrollableDestination title="Pura Urun Dalu" location="Bali" img={require('../../assets/images/pura-urun-dalu.jpg')} />
                </TouchableOpacity>
                <ScrollableDestination title="Pantai Nihiwatu" location="Sumba" img={require('../../assets/images/pantai-nihiwatu.jpg')} />
                <ScrollableDestination title="Pantai Kuta" location="Bali" img={require('../../assets/images/pantai-kuta.jpg')} />
                <ScrollableDestination title="Candi Borobudur" location="Magelang" img={require('../../assets/images/candi-borobudur.jpg')} />
                <ScrollableDestination title="Candi Prambanan" location="Yogyakarta" img={require('../../assets/images/candi-prambanan.jpg')} />
            </ScrollView>

            {/* Categori Section */}
            <View style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Kategori</Text>
                <View style={{flexDirection: 'row'}}>
                <CategorySection img={require('../../assets/icons/menu.png')} title="Semua" />
                <CategorySection img={require('../../assets/icons/candi.png')} title="Candi" />
                <CategorySection img={require('../../assets/icons/beach.png')} title="Pantai" />
                <CategorySection img={require('../../assets/icons/hotel.png')} title="Hotel" />
                </View>
            </View>

            {/* List item destionation */}
            <View style={{paddingHorizontal: 10, height: 35, justifyContent: 'center', backgroundColor: '#fff'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Paling Banyak Dikunjungi</Text>
            </View>
            <MostVisited title="Candi Borobudur" location="Magelang" price="250.000" rate="4.5" category="candi" img={require('../../assets/images/candi-borobudur.jpg')} icon={require('../../assets/icons/candi.png')} />
            <MostVisited title="Pura Urun Dalu" location="Bali" price="1000.000" rate="4.2" category="candi" img={require('../../assets/images/pura-urun-dalu.jpg')} icon={require('../../assets/icons/candi.png')} />
            <MostVisited title="Pantai Nihiwatu" location="Sumba" price="100.000" rate="4.0" category="curug" img={require('../../assets/images/pantai-nihiwatu.jpg')} icon={require('../../assets/icons/beach.png')} />
            <MostVisited title="Candi Prambanan" location="Yogyakarta" price="100.000" rate="5.0" category="candi" img={require('../../assets/images/candi-prambanan.jpg')} icon={require('../../assets/icons/candi.png')} />
            <MostVisited title="Pantai Kuta" location="Bali" price="100.000" rate="5.0" category="pantai" img={require('../../assets/images/pantai-kuta.jpg')} icon={require('../../assets/icons/beach.png')} />

        </ScrollView>
    )
}

export default HomePage;
