import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getEvents, initDatabase, insertEvent} from '../database/database';

const HomeSearchScreen = ({navigation}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await initDatabase();
        const initialEvents = await getEvents();
        setEvents(initialEvents);
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    initializeDatabase();
  }, []);

  const handleButtonClick = async buttonName => {
    await insertEvent('ButtonClick', {button: buttonName});
    const eventList = await getEvents();
    setEvents(eventList);
  };

  console.log(events);

  return (
    <View style={tw`flex-1 p-5 bg-black`}>
      <Button title="Home" onPress={() => handleButtonClick('Home')} />
      <Button title="Settings" onPress={() => handleButtonClick('Settings')} />
      <ScrollView style={tw`mt-5`}>
        {events.map((event, index) => (
          <Text key={index} style={tw`text-white`}>
            {event.event_name} - {event.event_data.button} - {event.timestamp}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeSearchScreen;
