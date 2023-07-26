import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SplashScreen from './components/SplashScreen';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';
import Profil from './components/Home/Profil';
import ProfilEdit from './components/Home/ProfilEdit';
import Detail from './components/Widgets/Detail';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen
          name='Profil'
          component={Profil}
          options={({ navigation }) => ({
            title:'Profil',
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('ProfilEdit')} > 
                <FontAwesome5 name='pencil-alt' size={20} color={'#F5F5F5'} />
              </TouchableOpacity>       
            ),
            headerStyle: {
              backgroundColor: '#3A835F',
            },
            headerTintColor: '#F5F5F5',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          })} />
        <Stack.Screen
          name='ProfilEdit' 
          component={ProfilEdit}
          options={{
            title:'Edit Profil',
            headerStyle: {
              backgroundColor: '#3A835F',
            },
            headerTintColor: '#F5F5F5',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }} />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={{
            title:'Detail',
            headerStyle: {
              backgroundColor: '#3A835F',
            },
            headerTintColor: '#F5F5F5',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
