import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/lib/icons';
import NavHeader from '@/components/Common/NavHeader';

const ManageAddress = () => {
   return (
      <SafeAreaView className="px-5">
          <NavHeader title="Manage Addresses" />
         <View>
            <Text className="my-3 font-semibold">Saved Addresses</Text>
         </View>
         <View className="w-full gap-4 rounded-xl bg-white p-5 shadow-md">
            <View className="flex w-full flex-row justify-between gap-3">
               <Image source={icons.home} className="size-6" />
               <View className="flex-1 gap-3">
                  <Text className="font-semibold">Home</Text>
                  <Text className="flex-wrap">
                     B2-758, Some society, kuch road, area here, pune, maharashtra, india
                  </Text>
                  <Text>Phone number: 8675840385</Text>
                  <View className="flex flex-row gap-10">
                     <TouchableOpacity>
                        <Text className="font-semibold text-blue-400">Edit</Text>
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Text className="font-semibold text-blue-400">Delete</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View className="flex w-full flex-row justify-between gap-3">
               <Image source={icons.mappin} className="size-6" />
               <View className="flex-1 gap-3">
                  <Text className="font-semibold">Home</Text>
                  <Text className="flex-wrap">
                     B2-758, Some society, kuch road, area here, pune, maharashtra, india
                  </Text>
                  <Text>Phone number: 8675840385</Text>
                  <View className="flex flex-row gap-10">
                     <TouchableOpacity>
                        <Text className="font-semibold text-blue-400">Edit</Text>
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Text className="font-semibold text-blue-400">Delete</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </View>
      </SafeAreaView>
   );
};

export default ManageAddress;
