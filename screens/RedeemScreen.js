import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";

const RedeemScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-black h-full`}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}
      >
        <View style={tw`flex flex-row gap-5 items-center `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg font-semibold`}>Redeem</Text>
        </View>
      </View>
      <View style={tw` mt-10 flex  items-center    w-full  `}>
        <View style={tw` h-[85%] flex items-center justify-center`}>
          <Text style={tw`text-[#00B386] text-5xl `}>₹ 56.0</Text>
          <Text style={tw`text-white  text-center `}>Reward Balance</Text>
        </View>
        <View style={tw`mx-5 w-full`}>
          <TouchableOpacity
            style={tw`bg-[#00B386] rounded-lg mx-5`}
            onPress={() => navigation.navigate("ContactUsScreen")}
          >
            <Text style={tw`text-center p-2 text-white text-lg font-semibold`}>
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RedeemScreen;
