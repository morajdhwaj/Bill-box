import { View, Text, TextInput, TouchableOpacity, Share } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const UserScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-black h-full`}>
      <View style={tw`flex flex-row w-full items-center px-5 mt-5`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={tw` flex gap-2 mt-5`}>
        <View
          style={tw`flex  justify-between  border-b border-[#1d1d1d] px-5 gap-4 py-2`}
        >
          <Text style={tw`text-white text-sm font-medium`}>Username</Text>
          <Text style={tw`text-white text-lg font-medium`}>Sunil123</Text>
        </View>
        <View
          style={tw`flex  justify-between  border-b border-[#1d1d1d] px-5 gap-4 py-2`}
        >
          <Text style={tw`text-white text-sm font-medium`}>First Name</Text>
          <Text style={tw`text-white text-lg font-medium`}>Sunil</Text>
        </View>
        <View
          style={tw`flex  justify-between  border-b border-[#1d1d1d] px-5 gap-4 py-2`}
        >
          <Text style={tw`text-white text-sm font-medium`}>Last Name</Text>
          <Text style={tw`text-white text-lg font-medium`}>Kumar</Text>
        </View>
        <View
          style={tw`flex  justify-between  border-b border-[#1d1d1d] px-5 gap-4 py-2`}
        >
          <Text style={tw`text-white text-sm font-medium`}>Date of Birth</Text>
          <Text style={tw`text-white text-lg font-medium`}>10-09-09</Text>
        </View>
        <View
          style={tw`flex  justify-between  border-b border-[#1d1d1d] px-5 gap-4 py-2`}
        >
          <Text style={tw`text-white text-sm font-medium`}>Mobile Number</Text>
          <Text style={tw`text-white text-lg font-medium`}>8493438893</Text>
        </View>
        <View
          style={tw`flex  justify-between  border-b border-[#1d1d1d] px-5 gap-4 py-2`}
        >
          <Text style={tw`text-white text-sm font-medium`}>Email</Text>
          <Text style={tw`text-white text-lg font-medium`}>
            sunil@gmail.com
          </Text>
        </View>
        <View
          style={tw`flex  justify-between  border-b border-[#1d1d1d] px-5 gap-4 py-2`}
        >
          <Text style={tw`text-white text-sm font-medium`}>Billbox Code</Text>
          <Text style={tw`text-white text-lg font-medium`}>code123</Text>
        </View>
      </View>
    </View>
  );
};

export default UserScreen;
