import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeComponent = ({navigation}) => {
  return (
    <View style={tw`p-5 flex flex-row justify-between`}>
      <View style={tw`flex flex-row items-center gap-4`}>
        <Image
          source={require('../../assets/images/billbox.png')}
          ImageBackground
          style={tw`h-10 w-10 rounded-full`}
        />
        <Text style={tw`text-white text-xl font-semibold`}>Billbox</Text>
      </View>
      <View style={tw`flex flex-row items-center gap-5`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeSearchScreen')}>
          <AntDesign name="search1" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ScannerScreen')}>
          <MaterialIcons name="qr-code-scanner" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <FontAwesome name="user-circle" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeComponent;
