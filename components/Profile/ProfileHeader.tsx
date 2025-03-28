import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import icons from '@/lib/icons';

const ProfileHeader = () => {
   return (
      <View className="mt-14">
         <View className="relative rounded-3xl bg-white p-3 shadow-md">
            <Avatar alt="OM" className="absolute -top-10 left-6 h-20 w-20">
               <AvatarImage source={require('@/assets/images/om.jpg')} />
               <AvatarFallback>
                  <Text>OJ</Text>
               </AvatarFallback>
            </Avatar>
            <TouchableOpacity className="absolute right-4 top-4">
               <Image source={icons.edit} className="size-6" />
            </TouchableOpacity>
            <View className="mb-6 mt-10 flex-row items-start justify-between">
               <View className="flex-row items-center">
                  <View className="ml-4">
                     <Text className="text-3xl font-bold text-gray-800">Om Jaiswal</Text>
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
