import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeSearchScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <View style={tw`bg-black h-full`}>
      <View
        style={tw`flex flex-row w-full items-center px-5 border-b border-gray-300`}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
        <TextInput
          style={tw` px-5  text-white text-[4] w-full  `}
          placeholder="Search bills"
          placeholderTextColor="#999999"
          onChangeText={setSearchInput}
          value={searchInput}
          maxLength={10}
        />
      </View>
      <View style={tw`p-5 flex gap-2`}>
        <View style={tw`flex flex-row justify-between`}>
          <View style={tw`flex flex-row items-center gap-2 `}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="receipt" size={15} color="white" />
            </View>
            <Text style={tw`text-white text-lg font-semibold`}>
              Company Name 1
            </Text>
          </View>
          <View style={tw`flex flex-row items-center `}>
            <Text style={tw`text-white`}>Bills</Text>
          </View>
        </View>
        <View style={tw`flex flex-row justify-between`}>
          <View style={tw`flex flex-row items-center gap-2 `}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="receipt" size={15} color="white" />
            </View>
            <Text style={tw`text-white text-lg font-semibold`}>
              Company Name 2
            </Text>
          </View>
          <View style={tw`flex flex-row items-center `}>
            <Text style={tw`text-white`}>Bills</Text>
          </View>
        </View>
        <View style={tw`flex flex-row justify-between`}>
          <View style={tw`flex flex-row items-center gap-2 `}>
            <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
              <MaterialIcons name="receipt" size={15} color="white" />
            </View>
            <Text style={tw`text-white text-lg font-semibold`}>
              Company Name 3
            </Text>
          </View>
          <View style={tw`flex flex-row items-center `}>
            <Text style={tw`text-white`}>Bills</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeSearchScreen;
