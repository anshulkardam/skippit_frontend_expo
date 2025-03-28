import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavHeaderwithAvatar from '@/components/Common/NavHeaderwithAvatar';
import WalletCard from '@/components/Wallet/WalletCard';
import Button from '@/components/ui/button';
import RecentTransactions from '@/components/Wallet/RecentTransactions';

const Wallet = () => {
   return (
      <SafeAreaView className="px-5">
         <ScrollView contentContainerClassName="pb-40" showsVerticalScrollIndicator={false}>
            <NavHeaderwithAvatar name="Jaiswal" />
            <WalletCard />
            <View className="mt-4">
               <Text className="my-2 font-semibold">Recent Tasks</Text>
               <View className="gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                     <RecentTransactions key={i} />
                  ))}
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default Wallet;
