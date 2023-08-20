import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const chatsData = [
    {
    id: '1',
    name: 'Leirbag',
    message: '',
    time: '10:30',
    avatar: require('../../../assets/batman.jpg'),
    },
    {
        id: '2',
        name: 'Jorge',
        message: '',
        time: '11:00',
        avatar: require('../../../assets/mc_poze.jpg'),
    }
]

export default function Home() {
    const navigation = useNavigation();
    const handleChatPress = (chatItem) => {
        navigation.navigate('ChatDetail', { chatItem });
      };

    return (
        <View style={styles.container}>
          <Header />
          <FlatList
            data={chatsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.chatsItem}
                onPress={() => handleChatPress(item)}
              >
                <Image source={item.avatar} style={styles.avatar} />
                <View style={styles.TexteContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.message}>{item.message}</Text>
                </View>
                <Text style={styles.time}>{item.time}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    chatsItem:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    TexteContainer:{
        flex: 1,
        marginLeft: 15,
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    message:{
        fontSize: 14,
        color: '#888',
    },
});
