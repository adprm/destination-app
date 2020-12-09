// import libraries
import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// import font
import KaushanScriptRegular from './src/assets/fonts/KaushanScript-Regular.otf';

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
      <Stack.Screen name='Destinasi' component={HomeScreenDetail} options={{
        headerTitle: <Text style={{fontFamily: 'KaushanScriptRegular', fontSize: 30, color: '#0266b8'}}>Destinasi</Text>,
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
    <View>
      {/* Scrollable Destinasi */}
      <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 10}}>
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image source={require('./src/assets/images/pura-urun-dalu.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10}}></View>
            </View>
            <View style={{position: 'absolute', marginTop: '70%', marginLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Pura Urun Dalu</Text>
              <View style={{flexDirection: 'row', marginTop: 7}}>
                <Image source={require('./src/assets/icons/location.png')} style={{height: 12, width: 12}} />
                <Text style={{fontSize: 12, fontWeight: 'normal', color: 'white', paddingLeft: 5}}>Bali</Text>
              </View>
            </View>
        </View>
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image source={require('./src/assets/images/candi-borobudur.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10}}></View>
            </View>
            <View style={{position: 'absolute', marginTop: '70%', marginLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Candi Borobudur</Text>
              <View style={{flexDirection: 'row', marginTop: 7}}>
                <Image source={require('./src/assets/icons/location.png')} style={{height: 12, width: 12}} />
                <Text style={{fontSize: 12, fontWeight: 'normal', color: 'white', paddingLeft: 5}}>Yogyakarta</Text>
              </View>
            </View>
        </View>
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image source={require('./src/assets/images/pantai-kuta.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10}}></View>
            </View>
            <View style={{position: 'absolute', marginTop: '70%', marginLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Pantai Kuta</Text>
              <View style={{flexDirection: 'row', marginTop: 7}}>
                <Image source={require('./src/assets/icons/location.png')} style={{height: 12, width: 12}} />
                <Text style={{fontSize: 12, fontWeight: 'normal', color: 'white', paddingLeft: 5}}>Bali</Text>
              </View>
            </View>
        </View>
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image source={require('./src/assets/images/candi-prambanan.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10}}></View>
            </View>
            <View style={{position: 'absolute', marginTop: '70%', marginLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Candi Prambanan</Text>
              <View style={{flexDirection: 'row', marginTop: 7}}>
                <Image source={require('./src/assets/icons/location.png')} style={{height: 12, width: 12}} />
                <Text style={{fontSize: 12, fontWeight: 'normal', color: 'white', paddingLeft: 5}}>Klaten, Jawa Tengah</Text>
              </View>
            </View>
        </View>
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image source={require('./src/assets/images/curug-leuwi-hejo.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} />
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10}}></View>
            </View>
            <View style={{position: 'absolute', marginTop: '70%', marginLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Curug Leuwi Hejo</Text>
              <View style={{flexDirection: 'row', marginTop: 7}}>
                <Image source={require('./src/assets/icons/location.png')} style={{height: 12, width: 12}} />
                <Text style={{fontSize: 12, fontWeight: 'normal', color: 'white', paddingLeft: 5}}>Bogor</Text>
              </View>
            </View>
        </View>
      </ScrollView>

      {/* Categori Section */}
      
    </View>
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
