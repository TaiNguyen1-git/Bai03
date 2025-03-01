import React from 'react';
import { View, Text, FlatList, SectionList, StyleSheet } from 'react-native';

const menuData = [
    {
        title: 'Món chính',
        data: ['Phở', 'Bún chả', 'Cơm tấm'],
    },
    {
        title: 'Món tráng miệng',
        data: ['Chè', 'Bánh flan', 'Kem'],
    },
];

export default function FlatlistSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>FlatList:</Text>
            <FlatList
                data={['Item 1', 'Item 2', 'Item 3']}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text style={styles.header}>SectionList:</Text>
            <SectionList
                sections={menuData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',
        padding: 5,
        marginTop: 10,
    },
    item: {
        padding: 10,
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
