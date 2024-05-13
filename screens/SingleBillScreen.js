import React from 'react';
import {Alert, Share, Text, TouchableOpacity, View} from 'react-native';
import ImageZoomViewer from 'react-native-image-zoom-viewer';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const SingleBillScreen = ({route, navigation}) => {
  const {imageUrl, imageName, imageId, getAllBills} = route?.params;

  const deleteBill = () => {
    const options = {
      method: 'DELETE',
      url: 'https://billbox.catax.me/image/delete-image',
      params: {image_id: imageId},
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        navigation.navigate('HomeScreen', 'home');
        getAllBills();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleDelete = () =>
    Alert.alert('Delete file', `Are you want to delete ${imageName} bill`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Delete', onPress: () => deleteBill()},
    ]);

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

  return (
    <View style={tw`bg-black h-full px-5`}>
      <View style={tw`my-5 flex flex-row  items-center justify-between`}>
        <View style={tw`flex flex-row  `}>
          <View style={tw`flex flex-row gap-5 items-center `}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color="white" />
            </TouchableOpacity>
            <Text style={tw`text-white text-lg font-semibold`}>
              {imageName}ss
            </Text>
          </View>
        </View>
        <View style={tw`flex flex-row gap-4 `}>
          <TouchableOpacity onPress={onShare}>
            <Ionicons name="share-social" size={20} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <AntDesign name="delete" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
      <ImageZoomViewer
        imageUrls={[{url: imageUrl}]}
        enableSwipeDown
        enablePreload
        style={{flex: 1}}
        renderIndicator={() => null}
      />
    </View>
  );
};

export default SingleBillScreen;
