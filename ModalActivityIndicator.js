import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, ActivityIndicator, StyleSheet, Alert, BackHandler } from 'react-native';

const ModalActivityIndicator = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleButtonPress = () => {
        setModalVisible(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const hideModal = () => {
        setModalVisible(false);
        Alert.alert(
            "Thông báo",
            "Bạn đã tắt modal",
            [{ text: "OK" }]
        );
    };

    const handleBackPress = () => {
        hideModal();
        return true;
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackPress
        );
        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.container}>
            <Button title="Mở Modal" onPress={handleButtonPress} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleBackPress}
            >
                <View style={styles.modalView}>
                    {loading && <ActivityIndicator size="large" color="#0000ff" />}
                    <Text>Đang chờ...</Text>
                    <Button title="Ẩn Modal" onPress={hideModal} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default ModalActivityIndicator;
