// import libraries
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
// import font
import KaushanScriptRegular from './src/assets/fonts/KaushanScript-Regular.otf';
// import components
import ScrollableDestination from './src/components/ScrollableDestination';
import CategorySection from './src/components/CategorySection';
import MostVisited from './src/components/MostVisited';

// Variable createStackNavigator()
const Stack = createStackNavigator();

// Stack HomeScreen
function HomeScreen() {
  const [loaded] = useFonts({
    KaushanScriptRegular,
  })

  if (!loaded) {
    return <Text>Loading...</Text>
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name='DitDestinasi' component={HomeScreenDetail} options={{
        headerTitle: <Text style={{fontFamily: 'KaushanScriptRegular', fontSize: 30, color: '#0266b8'}}>DitDestinasi</Text>,
        headerRight: () => (
          <Ionicons style={{ fontSize: 30, paddingRight: 10 }} name="ios-search" color='#0266b8' />
        ),
      }} />
    </Stack.Navigator>
  );
}

// View HomeScreen
function HomeScreenDetail() {
  return (
    <ScrollView style={{backgroundColor: '#e8e8e8'}}>
      {/* Scrollable Destinasi */}
      <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 10, paddingVertical: 10, backgroundColor: '#fff'}}>
        <ScrollableDestination title="Pura Urun Dalu" location="Bali" img={require('./src/assets/images/pura-urun-dalu.jpg')} />
        <ScrollableDestination title="Pantai Nihiwatu" location="Sumba" img={require('./src/assets/images/pantai-nihiwatu.jpg')} />
        <ScrollableDestination title="Pantai Kuta" location="Bali" img={require('./src/assets/images/pantai-kuta.jpg')} />
        <ScrollableDestination title="Candi Borobudur" location="Magelang" img={require('./src/assets/images/candi-borobudur.jpg')} />
        <ScrollableDestination title="Candi Prambanan" location="Yogyakarta" img={require('./src/assets/images/candi-prambanan.jpg')} />
      </ScrollView>

      {/* Categori Section */}
      <View style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Kategori</Text>
        <View style={{flexDirection: 'row'}}>
          <CategorySection img={require('./src/assets/icons/menu.png')} title="Semua" />
          <CategorySection img={require('./src/assets/icons/candi.png')} title="Candi" />
          <CategorySection img={require('./src/assets/icons/beach.png')} title="Pantai" />
          <CategorySection img={require('./src/assets/icons/hotel.png')} title="Hotel" />
        </View>
      </View>

      {/* List item destionation */}
      <View style={{paddingHorizontal: 10, height: 35, justifyContent: 'center', backgroundColor: '#fff'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Paling Banyak Dikunjungi</Text>
      </View>
      <MostVisited title="Candi Borobudur" location="Magelang" price="250.000" rate="4.5" category="candi" img={require('./src/assets/images/candi-borobudur.jpg')} icon={require('./src/assets/icons/candi.png')} />
      <MostVisited title="Pura Urun Dalu" location="Bali" price="1000.000" rate="4.2" category="candi" img={require('./src/assets/images/pura-urun-dalu.jpg')} icon={require('./src/assets/icons/candi.png')} />
      <MostVisited title="Pantai Nihiwatu" location="Sumba" price="100.000" rate="4.0" category="curug" img={require('./src/assets/images/pantai-nihiwatu.jpg')} icon={require('./src/assets/icons/beach.png')} />
      <MostVisited title="Candi Prambanan" location="Yogyakarta" price="100.000" rate="5.0" category="candi" img={require('./src/assets/images/candi-prambanan.jpg')} icon={require('./src/assets/icons/candi.png')} />
      <MostVisited title="Pantai Kuta" location="Bali" price="100.000" rate="5.0" category="pantai" img={require('./src/assets/images/pantai-kuta.jpg')} icon={require('./src/assets/icons/beach.png')} />

    </ScrollView>
  );
}

function DestinationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Destinasi!</Text>
    </View>
  );
}

function BookmarkScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tersimpan!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Halaman Utama') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Destinasi') {
              iconName = focused ? 'ios-locate' : 'ios-locate';
            } else if (route.name === 'Tersimpan') {
              iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'ios-contact' : 'ios-contact';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0266b8',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Halaman Utama" component={HomeScreen} />
        <Tab.Screen name="Destinasi" component={DestinationScreen} />
        <Tab.Screen name="Tersimpan" component={BookmarkScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
