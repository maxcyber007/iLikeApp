import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#e91e63',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'หน้าแรก') {
              iconName = focused ? 'md-home' : 'md-home-outline';
            } else if (route.name === 'เกี่ยวกับเรา') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'บริการของเรา') {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'ติดต่อเรา') {
              iconName = focused ? 'ios-call' : 'ios-call-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"green"} />;
          },
          //tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',

        })}

    >
          <Tab.Screen name="หน้าแรก" component={TabA} options={{ headerShown: false }}/>
          <Tab.Screen name="เกี่ยวกับเรา" component={TabB} options={{ headerShown: false }}/>
          <Tab.Screen name="บริการของเรา" component={TabC} options={{ headerShown: false }}/>
          <Tab.Screen name="ติดต่อเรา" component={TabD} options={{ headerShown: false }}/>
    </Tab.Navigator>
);
}

function TabA({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Welcome To Home
      </Text>
    </View>
  );
}


function TabB({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
      Welcome To About
      </Text>
    </View>
  );
}

function TabC({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
      Welcome To Service
      </Text>
    </View>
  );
}

function TabD({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Welcome To Contact
      </Text>
    </View>
  );
}

function Register({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'ชื่อ-นามสกุล'}
    />

    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'Password'}
    />
    </View>
  );
}

function Login({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'Username'}
    />

    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={""}
      placeholder={'Password'}
    />

    <Button
          title={'เข้าสู่ระบบ'}
          style={styles.input}
          onPress={""}
    />

    </View>
  );
}

export default function App() {

return(

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="หน้าแรก" component={HomeScreen}/>
        <Drawer.Screen name="เกี่ยวกับเรา" component={""} />
        <Drawer.Screen name="บริการของเรา" component={""} />
        <Drawer.Screen name="ติดต่อเรา" component={""} />
        <Drawer.Screen name="สมัครสมาชิก" component={Register} />
        <Drawer.Screen name="เข้าสู่ระบบ" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>

  /*
    <NavigationContainer>
    <HomeScreen />
  </NavigationContainer>
  */
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
});