import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import icons from '@/lib/icons';
import { useRouter } from 'expo-router';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const NavHeaderwithAvatar = ({ name }: { name: string }) => {
   const router = useRouter();
   return (
      <View className="flex flex-row items-center justify-between py-5">
         <View className="flex flex-row items-center gap-3">
            <TouchableOpacity onPress={() => router.push('/requester/profile')} className="">
               <Avatar alt="OM" className="h-12 w-12">
                  <AvatarImage source={require('@/assets/images/om.jpg')} />
                  <AvatarFallback>
                     <Text>OJ</Text>
                  </AvatarFallback>
               </Avatar>
            </TouchableOpacity>
            <View className='leading-tight'>
               <Text className="text-base font-semibold ">Hello,</Text>
               <Text className="text-base font-semibold leading-tight">{name}</Text>
            </View>
         </View>
         <TouchableOpacity onPress={() => router.push('/requester/notifications')}>
            <Image source={icons.notifications} className="size-7" resizeMode="contain" />
         </TouchableOpacity>
      </View>
   );
};

export default NavHeaderwithAvatar;
