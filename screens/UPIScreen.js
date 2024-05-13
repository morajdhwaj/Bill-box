import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const UPIScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-black h-full`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg font-semibold`}>UPI </Text>
        </View>
      </View>
      <View style={tw` mt-10 m-5 flex justify-between h-[85%] `}>
        <View style={tw`  flex gap-2 `}>
          <View>
            <Text style={tw`text-white text-lg font-semibold`}>
              UPI and Number
            </Text>
          </View>
          <View
            style={tw`flex flex-row justify-between border-b border-b-gray-700 pb-1`}
          >
            <Text style={tw`text-white text-sm font-semibold`}>
              12332323@upi
            </Text>
            <View style={tw`flex flex-row gap-1 items-center`}>
              <MaterialIcons name="verified" size={15} color="#00B386" />
              <Text style={tw`text-white text-sm font-semibold`}>Verified</Text>
            </View>
          </View>
        </View>
        {/* <View style={tw` w-full`}>
          <TouchableOpacity
            style={tw`border border-[#00B386] rounded-lg mx-5`}
            onPress={() => navigation.navigate("ContactUsScreen")}
          >
            <Text style={tw`text-center p-2 text-white text-lg font-semibold`}>
              Add UPI
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default UPIScreen;
