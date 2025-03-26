import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const ProfileButtons = ({ title, Icon }: { title: string; Icon: React.ElementType }) => {
   return (
      <TouchableOpacity className="w-[48%] rounded-2xl bg-white p-4 shadow-sm">
         <View className="items-center">
            <View className="mb-2 h-12 w-12 items-center justify-center rounded-lg">
               <Icon size={14} color="black" />
            </View>
            <Text className="text-xl font-semibold text-gray-800">{title}</Text>
         </View>
      </TouchableOpacity>
   );
};

export default ProfileButtons;
