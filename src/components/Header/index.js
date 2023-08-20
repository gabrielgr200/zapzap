import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
 return (
   <View style={styles.container}>
    <View style={styles.content}>
    <Text style={styles.title}>WhatsApp 2</Text>
    <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.menssage}>Conversas</Text>
    </TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#900020',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingBottom: 50,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    menssage:{
        top: 35,
        right: 160,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});