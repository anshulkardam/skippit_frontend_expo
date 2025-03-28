import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../ui/button';
import icons from '@/lib/icons';

const PopularTaskCard = ({ title, description }: { title: string; description: string }) => {
   return (
      <View className="flex h-44 w-36 mr-3 flex-col justify-between gap-4 rounded-3xl bg-white p-3">
         <View className='gap-2'>
            <Text className="text-lg font-semibold leading-tight">{title}</Text>
            <Text className="text-xs">{description}</Text>
         </View>
         <TouchableOpacity className="h-10 items-center justify-center rounded-[12px] bg-[#28A745]">
            <View className="flex-row items-center gap-2">
               <Text className="text-sm font-semibold text-white">Customize</Text>
               <Image source={icons.edit} tintColor={'white'} className="size-4" />
            </View>
         </TouchableOpacity>
      </View>
   );
};

export default PopularTaskCard;
