import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const ProfileHeader = () => {
   return (
      <View className="mt-14">
         <View className="relative rounded-3xl bg-white p-3 shadow-md">
            <Image
               source={{ uri: 'https://placekitten.com/200/200' }} // Replace with your image
               className="absolute -top-10 left-6 h-20 w-20 rounded-full bg-yellow-400"
            />
            <TouchableOpacity className="absolute right-4 top-4">
               <Feather name="edit-2" size={24} color="#666" />
            </TouchableOpacity>
            <View className="mb-6 mt-10 flex-row items-start justify-between">
               <View className="flex-row items-center">
                  <View className="ml-4">
                     <Text className="text-3xl font-bold text-gray-800">Anshul Kardam</Text>
                     <Text className="mt-1 text-gray-600">+91 8473947590</Text>
                     <Text className="text-gray-600">name@gmail.com</Text>
                  </View>
               </View>
            </View>
         </View>
      </View>
   );
};

export default ProfileHeader;
