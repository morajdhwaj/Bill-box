import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import axios from "axios";
import Toast from "react-native-toast-message";

const UploadImage = ({ scannedImage, setScannedImage, setTab }) => {
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: scannedImage,
        name: "image.jpg",
        type: "image/jpeg",
      });
      formData.append("user_id", "66222aa6020a92d53d8566bd");
      formData.append("file_name", "image");

      const options = {
        method: "POST",
        url: "https://billbox.catax.me/image/upload-image",
        params: { user_id: "66222aa6020a92d53d8566bd", file_name: imageName },
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      };
      setLoading(true);

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data, "success");
          setScannedImage("");
          Toast.show({
            type: "success",
            text1: response?.data?.message,
            visibilityTime: 2000,
          });
          setLoading(false);
          setTab("bills");
        })
        .catch(function (error) {
          console.error(error?.response?.data?.detail?.message, "error");
          setScannedImage("");
          Toast.show({
            type: "error",
            text1: error?.response?.data?.detail?.message,
            visibilityTime: 2000,
          });
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log();

  return (
    <View style={tw`m-5`}>
      <View>
        {scannedImage && (
          <View style={tw` h-80% mt-10`}>
            <Image source={{ uri: scannedImage }} style={tw` h-100%`} />
            <View style={tw``}>
              <TextInput
                style={tw`border-b-2 border-b-gray-400 text-2xl  text-white  font-bold  px-5`}
                placeholder="Image Name"
                value={imageName}
                onChangeText={setImageName}
              />
            </View>
          </View>
        )}
      </View>
      <View style={tw`m-5`}>
        {loading ? (
          <View style={tw`bg-[#00B386]  rounded-xl`}>
            <Text style={tw`text-black text-2xl self-center font-bold py-2 `}>
              Uploading...
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={tw`bg-[#00B386]  rounded-xl`}
            onPress={uploadFile}
          >
            <Text style={tw`text-black text-2xl self-center font-bold py-2 `}>
              Upload
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default UploadImage;
