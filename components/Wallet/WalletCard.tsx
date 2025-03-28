import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Ionicons';
import Button from '../ui/button';
import { useRouter } from 'expo-router';

const WalletCard = () => {
   const router = useRouter();
   return (
      <View className="w-full rounded-xl bg-white p-6 shadow-md">
         <View className="flex flex-row items-center justify-between">
            <View>
               <Text className="text-xl font-bold">Total Balance</Text>
               <View className="mt-3 flex flex-row items-center gap-2">
                  <FontAwesome name="inr" size={23} color={'black'} className="font-bold" />
                  <Text className="text-3xl font-bold">240.00</Text>
               </View>
            </View>
            <FontAwesome6 name="chevron-right" size={14} color={'black'} className="font-bold" />
         </View>

         <View className="mt-2 flex flex-row items-center gap-1">
            <Icon name="alert-circle" size={18} color={'black'} className="font-bold" />
            <Text className="text-sm">Auto Refill is Off</Text>
         </View>
         <View className="mt-4 flex flex-row gap-4">
            <Button className="flex-1 bg-[#DCDCDC]">
               <Text className="font-semibold text-black">Enable Auto-Refill</Text>
            </Button>
            <Button
               onPress={() => router.push('/requester/wallet/add-money')}
               className="flex-1 bg-green-500"
            >
               <Text className="font-semibold text-white">Add Money</Text>
            </Button>
         </View>
      </View>
   );
};

export default WalletCard;
