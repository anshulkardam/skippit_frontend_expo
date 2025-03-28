import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import icons from '@/lib/icons';
import { useRouter } from 'expo-router';

const NavHeader = ({ title }: { title: string }) => {
   const router = useRouter();
   return (
      <View className="flex flex-row items-center justify-between py-5">
         <View className="flex flex-row items-center gap-3">
            <TouchableOpacity onPress={() => router.back()} className="">
               <Icon name="chevron-back" size={24} />
            </TouchableOpacity>
            <Text className="text-lg font-semibold">{title}</Text>
         </View>
         <TouchableOpacity onPress={()=> router.push('/requester/notifications')}>
            <Image source={icons.notifications} className="size-6" resizeMode="contain" />
         </TouchableOpacity>
      </View>
   );
};

export default NavHeader;
