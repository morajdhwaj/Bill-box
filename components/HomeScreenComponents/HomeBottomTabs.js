import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import DocumentScanner from "react-native-document-scanner-plugin";

const svgContent = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98s-74.98-112.64-74.98-181.02 26.629-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.629 181.02 74.98 74.98 112.64 74.98 181.02-26.629 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-482c-132.548 0-240 107.452-240 240s107.452 240 240 240 240-107.452 240-240-107.452-240-240-240z"/><path d="m256 482c-124.617 0-226-101.383-226-226s101.383-226 226-226 226 101.383 226 226-101.383 226-226 226zm0-452c-124.617 0-226 101.383-226 226s101.383 226 226 226 226-101.383 226-226-101.383-226-226-226z"/><path d="m361 271h-60v60c0 16.569-13.431 30-30 30s-30-13.431-30-30v-60h-60c-16.569 0-30-13.431-30-30s13.431-30 30-30h60v-60c0-16.569 13.431-30 30-30s30 13.431 30 30v60h60c16.569 0 30 13.431 30 30s-13.431 30-30 30z"/></g></svg>`;

const HomeBottomTabs = ({ scanDocument, setTab, tab }) => {
  handleAddDocs = () => {
    scanDocument();
    setTab("add");
  };

  return (
    <View
      style={tw`  px-4 bg-[#202020] flex flex-row justify-between w-full  h-full`}
    >
      <View style={tw`flex flex-row w-1/3 `}>
        <TouchableOpacity
          onPress={() => setTab("home")}
          style={tw`h-full flex items-center justify-center  w-1/2    `}
        >
          <View style={tw`flex items-center justify-center gap-2 `}>
            <View>
              {tab === "home" ? (
                <Image
                  source={require("../../assets/images/home-active.png")}
                  ImageBackground
                  style={tw`h-6 w-6 `}
                />
              ) : (
                <Image
                  source={require("../../assets/images/home.png")}
                  ImageBackground
                  style={tw`h-6 w-6 `}
                />
              )}
            </View>
            <Text style={tw`${tab == "home" && "text-white"} text-xs`}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab("bills")}
          style={tw`h-full flex items-center justify-center w-1/2  `}
        >
          <View style={tw`flex items-center justify-center gap-2`}>
            <View>
              {tab === "bills" ? (
                <Image
                  source={require("../../assets/images/bills-active.png")}
                  ImageBackground
                  style={tw`h-6 w-6 `}
                />
              ) : (
                <Image
                  source={require("../../assets/images/bills.png")}
                  ImageBackground
                  style={tw`h-6 w-6 `}
                />
              )}
            </View>
            <Text style={tw`${tab == "bills" && "text-white"} text-xs`}>
              Bills
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`w-1/3 flex  items-center mt-1 `}>
        <TouchableOpacity onPress={handleAddDocs}>
          <View style={tw`flex  items-center justify-center  `}>
            <View>
              {tab === "add" ? (
                <Image
                  source={require("../../assets/images/add-active.png")}
                  ImageBackground
                  style={tw`h-16 w-16 rounded-full`}
                />
              ) : (
                <Image
                  source={require("../../assets/images/add.png")}
                  ImageBackground
                  style={tw`h-16 w-16 rounded-full`}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row w-1/3`}>
        <TouchableOpacity
          onPress={() => setTab("reward")}
          style={tw`h-full flex items-center justify-center w-1/2 `}
        >
          <View style={tw`flex items-center justify-center gap-2`}>
            <View>
              {tab === "reward" ? (
                <Image
                  source={require("../../assets/images/reward-active.png")}
                  ImageBackground
                  style={tw`h-6 w-6 `}
                />
              ) : (
                <Image
                  source={require("../../assets/images/reward.png")}
                  ImageBackground
                  style={tw`h-6 w-6 `}
                />
              )}
            </View>
            <Text style={tw`${tab == "reward" && "text-white"} text-xs`}>
              Reward
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab("warrant")}
          style={tw`h-full flex items-center justify-center  w-1/2 `}
        >
          <View style={tw`flex items-center justify-center gap-2`}>
            <View>
              {tab === "warrant" ? (
                <Image
                  source={require("../../assets/images/warranty-active.png")}
                  ImageBackground
                  style={tw`h-6 w-6 `}
                />
              ) : (
                <Image
                  source={require("../../assets/images/warranty.png")}
                  ImageBackground
                  style={tw`h-6 w-6 `}
                />
              )}
            </View>
            <Text style={tw`${tab == "warrant" && "text-white"} text-xs`}>
              Warranty
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeBottomTabs;
