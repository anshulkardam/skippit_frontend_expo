import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavHeaderwithAvatar from '@/components/Common/NavHeaderwithAvatar';
import PaymentSection from '@/components/Wallet/PaymentSection';
import PaymentOption from '@/components/Wallet/PaymentOption';
import icons from '@/lib/icons';

const AddMoney = () => {
   return (
      <SafeAreaView className="px-5">
         <NavHeaderwithAvatar name="Jaiswal" />
         <ScrollView contentContainerClassName="pb-40" showsVerticalScrollIndicator={false}>
            <View className="gap-3">
               <Text className="text-lg font-semibold">Pay by any UPI App</Text>
               <View className="rounded-xl bg-white p-3">
                  <PaymentOption icon={icons.gpay} title="Google Pay" onPress={() => {}} />
                  <PaymentOption icon={icons.PhonePe} title="PhonePe" onPress={() => {}} />
                  <PaymentOption icon={icons.amazonPay} title="Amazon Pay" onPress={() => {}} />
                  <PaymentOption icon={icons.upi} title="BHIM UPI" onPress={() => {}} />
               </View>
            </View>

            <View className="mt-4 gap-3">
               <Text className="text-lg font-semibold">Credit & Debit Cards</Text>
               <View className="rounded-xl bg-white p-3">
                  <PaymentOption
                     title="Add New Card"
                     icon={icons.plusIcon}
                     description="Save & Pay Via Cards"
                     onPress={() => {}}
                  />
               </View>
            </View>

            <View className="mt-4 gap-3">
               <Text className="text-lg font-semibold">More Payment Options</Text>
               <View className="rounded-xl bg-white p-3">
                  <PaymentOption
                     title="Wallets"
                     icon={icons.wallet}
                     description="PhonePe, Amazon Pay & more"
                     onPress={() => {}}
                  />
                  <PaymentOption
                     title="Netbanking"
                     icon={icons.netbanking}
                     description="Select from a list of banks"
                     onPress={() => {}}
                  />
                  <PaymentOption
                     title="Pay Later"
                     icon={icons.payLater}
                     description="Credit line cards"
                     onPress={() => {}}
                  />
                  <PaymentOption icon={icons.CRED} title="CRED Pay" onPress={() => {}} />
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default AddMoney;
