import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-black h-full`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg font-semibold`}>
            Notifications
          </Text>
        </View>
      </View>
      <View style={tw` mt-10 `}>
        <View
          style={tw` py-4 px-5 flex flex-row justify-between border-b border-b-gray-800  `}
        >
          <View style={tw`flex flex-row gap-2 w-4/6`}>
            <View>
              <View style={tw`bg-[#1d1d1d] p-2 rounded-full`}>
                <MaterialIcons name="receipt" size={25} color="white" />
              </View>
            </View>
            <View style={tw`flex gap-1`}>
              <Text style={tw`text-white text-lg font-semibold`}>
                Panasonic-electronic
              </Text>
              <Text style={tw`text-[11px] text-white`}>
                Lorem Ipsum is simply dummy text
              </Text>

              <Text style={tw`text-[11px] text-white`}>12 days ago </Text>
            </View>
          </View>
          <View style={tw`flex items-center `}>
            <Text style={tw`text-white text-xs `}>12:42 PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
