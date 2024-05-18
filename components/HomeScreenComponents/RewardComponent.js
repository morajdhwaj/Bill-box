import {View, Text, TouchableOpacity, ScrollView, Button} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {clearEvents} from '../../database/database';

const RewardComponent = ({setTab, navigation, events, setEvents}) => {
  const handleClearData = async () => {
    try {
      await clearEvents();
      setEvents([]);
    } catch (error) {
      console.error('Error clearing events:', error);
    }
  };

  return (
    <View style={tw`bg-black mb-28`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}>
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => setTab('home')}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg font-semibold`}>Reward</Text>
        </View>
      </View>
      <Button title="Clear Data" onPress={handleClearData} />

      <ScrollView style={tw`mt-5`}>
        {events.map((event, index) => (
          <Text key={index} style={tw`text-white`}>
            {event.event_name} - {event.event_data.button} - {event.timestamp}
          </Text>
        ))}
      </ScrollView>

      <View style={tw` mt-10`}></View>
    </View>
  );
};

export default RewardComponent;
