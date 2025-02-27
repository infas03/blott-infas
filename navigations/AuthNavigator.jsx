import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import NotificationsScreen from '../screens/Auth/NotificationScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />     
    </Stack.Navigator>
  );
}