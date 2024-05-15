import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Title from '../components/title';
import Welcome from'../components/welcome'
import Usuario from '../components/usuarios';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Title"
                component={Title}
            />
            <Stack.Screen
                name = "Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name = "Usuario"
                component={Usuario}
            />
        </Stack.Navigator>
    );
}