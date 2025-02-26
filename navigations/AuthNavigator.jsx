import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/Auth/RegisterScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}