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

// import components
import ScrollableDestination from './src/components/ScrollableDestination';

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
        <ScrollableDestination title="Pura Urun Dalu" location="Bali" img={require('./src/assets/images/pura-urun-dalu.jpg')} />
        <ScrollableDestination title="Curug Leuwi Hejo" location="Bogor" img={require('./src/assets/images/curug-leuwi-hejo.jpg')} />
        <ScrollableDestination title="Pantai Kuta" location="Bali" img={require('./src/assets/images/pantai-kuta.jpg')} />
        <ScrollableDestination title="Candi Borobudur" location="Magelang" img={require('./src/assets/images/candi-borobudur.jpg')} />
        <ScrollableDestination title="Candi Prambanan" location="Yogyakarta" img={require('./src/assets/images/candi-prambanan.jpg')} />
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
