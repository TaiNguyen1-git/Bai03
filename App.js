import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CheckboxRadioButton from './CheckboxRadioButton'; 
import FlatlistSection from './FlatlistSection';
import ModalActivityIndicator from './ModalActivityIndicator';

import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Checkbox & RadioButton" component={CheckboxRadioButton} />
                <Tab.Screen name="FlatList & SectionList" component={FlatlistSection} />
                <Tab.Screen name="Modal & ActivityIndicator" component={ModalActivityIndicator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});