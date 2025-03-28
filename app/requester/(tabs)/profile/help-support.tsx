import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/lib/icons';
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';
import NavHeader from '@/components/Common/NavHeader';

const HelpAndSupport = () => {
   return (
      <SafeAreaView className="px-5">
         <NavHeader title="Help & Support" />
         <ScrollView contentContainerClassName="pb-40" showsVerticalScrollIndicator={false}>
            <View>
               <Text className="my-3 font-semibold">Frequently Asked Questions (FAQs)</Text>
            </View>
            <View className="w-full rounded-xl bg-white px-4 py-1 shadow-md">
               <Accordion type="multiple" collapsible className="native:max-w-md w-full max-w-sm">
                  <AccordionItem value="item-1">
                     <AccordionTrigger>
                        <Text className="font-bold">Is it accessible?</Text>
                     </AccordionTrigger>
                     <AccordionContent>
                        <Text className="text-sm">
                           Yes. It adheres to the WAI-ARIA design pattern.
                        </Text>
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                     <AccordionTrigger>
                        <Text className="font-bold">What are universal components?</Text>
                     </AccordionTrigger>
                     <AccordionContent>
                        <Text className="text-sm">
                           In the world of React Native, universal components are components that
                           work on both web and native platforms.
                        </Text>
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                     <AccordionTrigger>
                        <Text className="font-bold">What are universal components?</Text>
                     </AccordionTrigger>
                     <AccordionContent>
                        <Text className="text-sm">
                           In the world of React Native, universal components are components that
                           work on both web and native platforms.
                        </Text>
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </View>

            <View className="mt-2">
               <Text className="my-3 font-semibold">Contact Support</Text>
            </View>
            <View className="w-full gap-4 rounded-xl bg-white p-5 shadow-md">
               <View className="flex w-full flex-row justify-between gap-3">
                  <Image source={icons.phone} className="size-6" />
                  <View className="flex-1 gap-1">
                     <Text className="items-center text-base font-semibold">Phone Support</Text>
                     <Text className="flex-wrap text-sm">+91 7847390847</Text>
                     <Text className="text-xs"> (Available 9 AM - 6 PM)</Text>
                  </View>
               </View>
               <View className="flex w-full flex-row justify-between gap-3">
                  <Image source={icons.email} className="size-6" />
                  <View className="flex-1 gap-1">
                     <Text className="font-semibold">Email Support</Text>
                     <Text className="text-sm">support@skipit.com</Text>
                  </View>
               </View>
            </View>

            <View className="mt-2">
               <Text className="my-3 font-semibold">Report an Issue</Text>
            </View>
            <View className="w-full gap-4 rounded-xl bg-white p-5 shadow-md">
               <View className="flex w-full flex-row items-center gap-3">
                  <Image source={icons.report} className="size-6" />
                  <Text className="text-lg font-semibold">Report a Runner</Text>
               </View>
               <View className="flex w-full flex-row items-center gap-3">
                  <Image source={icons.alertSMS} className="size-6" />
                  <Text className="text-lg font-semibold">Other Concerns</Text>
               </View>
            </View>

            <View className="mt-2">
               <Text className="my-3 font-semibold">Terms & Policies</Text>
            </View>
            <View className="w-full rounded-xl bg-white px-4 py-1 shadow-md">
               <Accordion type="multiple" collapsible className="native:max-w-md w-full max-w-sm">
                  <AccordionItem value="item-1">
                     <AccordionTrigger>
                        <Text className="font-bold">Is it accessible?</Text>
                     </AccordionTrigger>
                     <AccordionContent>
                        <Text className="text-sm">
                           Yes. It adheres to the WAI-ARIA design pattern.
                        </Text>
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                     <AccordionTrigger>
                        <Text className="font-bold">What are universal components?</Text>
                     </AccordionTrigger>
                     <AccordionContent>
                        <Text className="text-sm">
                           In the world of React Native, universal components are components that
                           work on both web and native platforms.
                        </Text>
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                     <AccordionTrigger>
                        <Text className="font-bold">What are universal components?</Text>
                     </AccordionTrigger>
                     <AccordionContent>
                        <Text className="text-sm">
                           In the world of React Native, universal components are components that
                           work on both web and native platforms.
                        </Text>
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default HelpAndSupport;
