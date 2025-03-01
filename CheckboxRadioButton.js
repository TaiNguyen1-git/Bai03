import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; 
import { Checkbox, RadioButton } from 'react-native-paper'; 

const CheckboxRadioImageScreen = () => {
    const [checked, setChecked] = useState(false); 
    const [selectedValue, setSelectedValue] = useState('option1'); 

    const handleImagePress = () => {
        alert('Bạn đã nhấn vào hình ảnh!'); 
    };

    return (
        <View style={styles.container}> 
            <Text style={styles.header}>Checkbox và RadioButton</Text>

            <View style={styles.checkboxContainer}> 
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'} 
                    onPress={() => setChecked(!checked)}
                />
                <Text style={styles.label}>Chọn tùy chọn này</Text> 
            </View>

            <View style={styles.radioContainer}> 
                <RadioButton
                    value="option1"
                    status={selectedValue === 'option1' ? 'checked' : 'unchecked'} 
                    onPress={() => setSelectedValue('option1')} 
                />
                <Text style={styles.label}>Tùy chọn 1</Text> 
            </View>

            <View style={styles.radioContainer}> 
                <RadioButton
                    value="option2"
                    status={selectedValue === 'option2' ? 'checked' : 'unchecked'} 
                    onPress={() => setSelectedValue('option2')} 
                />
                <Text style={styles.label}>Tùy chọn 2</Text> 
            </View>

            <Text style={styles.header}>ImageButton và ImageView</Text> 

            <TouchableOpacity onPress={handleImagePress}> 
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/27168459/pexels-photo-27168459/free-photo-of-anh-sang-thanh-ph-binh-minh-hoang-hon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
                    style={styles.image} 
                />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
    flex: 1, 
        padding: 16, 
    },
    header: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginTop: 16, 
        marginBottom: 8, 
    },
    checkboxContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 16, 
    },
    radioContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 8, 
    },
    label: {
        marginLeft: 8, 
    },
    image: {
        width: 150, 
        height: 150, 
        marginTop: 16, 
    },
});

export default CheckboxRadioImageScreen;