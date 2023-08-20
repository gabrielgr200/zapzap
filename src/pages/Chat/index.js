import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function ChatDetailScreen({ route }) {
  const { chatItem } = route.params;
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        id: messages.length.toString(),
        text: messageInput,
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  return (
    <ImageBackground
    source={require('../../../assets/zap.jpg')}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image source={chatItem.avatar} style={styles.avatar} />
        <Text style={styles.headerText}>{chatItem.name}</Text>
      </View>
      </View>
      <View style={styles.chatContainer}>
        {messages.map((message) => (
          <View key={message.id} style={styles.chatBubble}>
            <Text style={styles.message}>{message.text}</Text>
            <Text style={styles.time}>{message.time}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem"
          value={messageInput}
          onChangeText={setMessageInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    height: 90,
    backgroundColor: 'transparent',
    backgroundColor: '#900020',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    paddingStart: 16,
    paddingTop: 22,
  },
  userInfo: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  chatBubble: {
    backgroundColor: '#fa7f72',
    borderRadius: 10,
    padding: 10,
    maxWidth: '100%',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#333',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#900020',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
