import { View, Text, TouchableOpacity, ImageSourcePropType, Image } from 'react-native';
import React, { ReactNode } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const ProfileButtons = ({
   title,
   icon,
   onPress,
}: {
   title: string;
   icon: ImageSourcePropType;
   onPress: () => void;
}) => {
   return (
      <TouchableOpacity onPress={onPress} className="w-[48%] rounded-2xl bg-white p-6 shadow-sm">
         <View className="items-start gap-1.5">
            <Image source={icon} className="size-8" />
            <Text className="text-lg font-semibold text-gray-800">{title}</Text>
         </View>
      </TouchableOpacity>
   );
};

export default ProfileButtons;
