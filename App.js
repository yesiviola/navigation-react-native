import React from 'react';
import {Image, View, Text, StyleSheet, Pressable, Button} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';

function HomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <View style={styles.button}>
        <Pressable onPress={()=> navigation.navigate('Details', {info: 'informacion de la imagen la promesa de Dios un paraiso'})}>
          <Image
            style={styles.image}
            source={require('./assets/paraiso.jpg')}
          />
          <Text>El paraiso muy cercano</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
      <Pressable onPress={()=> navigation.navigate('Details')}>
          <Image
            style={styles.image}
            source={require('./assets/arca-noe.jpg')}
          />
          <Text>El arca de noe, historia para recordar</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
      <Pressable onPress={()=> navigation.navigate('Details')}>
          <Image
            style={styles.image}
            source={require('./assets/rey-salomon.jpg')}
          />
          <Text>El rey salomon</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Details"
          onPress={()=> navigation.navigate('Details')}
        />
      </View>
      <View style={styles.button}>
        <Pressable onPress={()=> navigation.navigate('Settings')}>
          <Image
            style={styles.image}
            source={require('./assets/moises.jpg')}
          />
          <Text>Moises</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
      <Pressable onPress={()=> navigation.navigate('Details')}>
          <Image
            style={styles.image}
            source={require('./assets/paraiso.jpg')}
          />
          <Text>El paraiso muy cercano </Text>
        </Pressable>
        <Button
          title="Go to Profile"
          onPress={()=> navigation.navigate('Profile')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Settings"
          onPress={()=> navigation.navigate('Settings')}
          
        />
      </View>
    </View>
  );
}

function DetailsScreen({route}){
  const info = route.params ? route.params.info : 'Historia de Noe';
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center', justifyContent: 'center'}}>
      <Text style={styles.Text}>Detalles</Text>
      <Text>{info}</Text>
      <Text>Había un hombre que era diferente porque amaba a Jehová. Se llamaba Noé. Tenía una esposa y tres hijos: Sem, Cam y Jafet. Cada hijo tenía su esposa.
         Jehová le mandó a Noé construir un arca, que era una gran caja de madera que podía flotar en el agua. Así, Noé y su familia podrían sobrevivir al Diluvio. 
         Además, Jehová le mandó meter en el arca muchos animales para que también se salvaran.
         Noé se puso a construir el arca enseguida. Él y su familia tardaron unos 50 años en construirla, y la hicieron como Jehová les dijo. Durante esos años, Noé avisó a la gente de que iba a venir el Diluvio, pero nadie le hizo caso.</Text>
      </View>
  );
}

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 150,
    marginBottom: 20,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    transform: 'scaleX(2) rotateX(15deg)'
  }
});

export default App;