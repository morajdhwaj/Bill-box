import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Share,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

const BillsScreen = ({navigation, setTab}) => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    getAllBills();
  }, []);

  const getAllBills = () => {
    const options = {
      method: 'GET',
      url: 'https://billbox.catax.me/image/get-all-images',
      params: {user_id: '66222aa6020a92d53d8566bd'},
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setBills(response?.data?.images);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
        url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error?.message,
        text2: error?.message,
      });
    }
  };

  if (bills.length === 0) {
    return (
      <Text style={tw`text-white bg-black h-full p-5 text-center`}>
        Loading...
      </Text>
    );
  }

  console.log(bills[0].url, 'bills');
  console.log(bills[0].url, 'dsdsdsdsd');

  return (
    <View style={tw`bg-[#000] `}>
      <View
        style={tw`flex flex-row w-full items-center justify-between px-5 mt-5`}>
        <View style={tw`flex flex-row gap-5`}>
          <TouchableOpacity onPress={() => setTab('home')}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex flex-row items-center gap-5`}>
          <TextInput
            style={tw`   text-white  text-xs w-60 border border-[#444] h-9 px-4  rounded-full`}
            placeholder="Search bills"
            placeholderTextColor="#999999"
            maxLength={10}
          />
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name="filter" size={25} color="#00B386" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={tw` mt-5 mb-28 `}>
        {bills?.reverse().map(bill => {
          return (
            <View
              style={tw` py-4 px-5 flex flex-row justify-between border-b border-b-gray-800  `}
              key={bill.id}>
              <View style={tw`flex flex-row gap-4 w-4/6`}>
                <View>
                  <Image
                    source={{uri: bill?.url}}
                    style={tw`h-14 w-14  rounded-full`}
                  />
                </View>
                <View style={tw`flex gap-1`}>
                  <View style={tw`flex `}>
                    <Text style={tw`text-white text-lg font-semibold`}>
                      {bill?.image_name}
                    </Text>
                  </View>
                  <View>
                    <Text style={tw`text-[11px] text-gray-400`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                  </View>
                  <View style={tw`flex flex-row gap-2 items-center`}>
                    <Text style={tw`text-[10px] text-white`}>01/02/2024 </Text>
                    <Text style={tw`text-[10px] text-white`}>10:40 PM </Text>
                    <Text
                      style={tw`text-white bg-[#0C241E] self-start text-[10px]   px-4 py-1 rounded-md  `}>
                      Cash
                    </Text>
                  </View>
                </View>
              </View>
              <View style={tw`flex items-center gap-4`}>
                <TouchableOpacity onPress={onShare}>
                  <Ionicons name="share-social" size={20} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SingleBillScreen', {
                      imageUrl: bill?.url,
                      imageName: bill?.image_name,
                      imageId: bill?.id,
                      getAllBills,
                    })
                  }>
                  <Ionicons name="eye-outline" size={20} color="#444" />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BillsScreen;
