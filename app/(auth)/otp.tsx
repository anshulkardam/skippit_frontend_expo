import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { OtpInput } from 'react-native-otp-entry';
import LottieView from 'lottie-react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/ui/back-button';

const OTP = () => {
   const router = useRouter();
   const [isVerified, setIsVerified] = useState(false);

   useEffect(() => {
      if (isVerified) {
         const timeout = setTimeout(() => {
            router.replace('/choose-role'); // Redirect after 3 seconds
         }, 3000);

         return () => clearTimeout(timeout); // Cleanup to avoid memory leaks
      }
   }, [isVerified, router]);

   return (
      <SafeAreaView className="flex-1">
         <BackButton />
         {isVerified ? (
            <View className="flex items-center justify-center">
               <LottieView
                  source={require('@/assets/animations/verified.json')}
                  autoPlay
                  loop
                  style={{ width: 200, height: 400 }}
               />
               <Animated.Text
                  entering={FadeInLeft.duration(4000).springify()}
                  className="font-roboto text-5xl text-blue-400"
               >
                  Verified!
               </Animated.Text>

               {/* <TouchableOpacity
                  onPress={() => router.navigate('/choose-role')}
                  className={`my-6 h-14 w-full items-center justify-center rounded-[12px] bg-[#007BFF] disabled:bg-[#DBDBDB]`}
               >
                  <Text className="text-lg font-medium text-white disabled:text-[#747474]">
                     force next
                  </Text>
               </TouchableOpacity> */}
            </View>
         ) : (
            <View className="mt-6 px-5">
               <Text className="font-roboto items-start text-4xl">
                  OTP Verification
               </Text>
               <View className="flex flex-row items-center gap-1">
                  <Text className="items-start text-base font-normal">
                     OTP has been sent to{' '}
                  </Text>
                  <Text className="font-semibold">+91 9211379856</Text>
               </View>
               <Text className="mb-6 mt-1 text-lg font-semibold underline">
                  Change Number
               </Text>

               <OtpInput
                  numberOfDigits={6}
                  focusColor="#007BFF"
                  autoFocus={true}
                  hideStick={true}
                  blurOnFilled={true}
                  disabled={false}
                  type="numeric"
                  secureTextEntry={false}
                  focusStickBlinkingDuration={500}
                  onFocus={() => console.log('Focused')}
                  onBlur={() => console.log('Blurred')} //check what more we can do with this
                  onFilled={(text) => console.log(`OTP is ${text}`)}
                  textInputProps={{
                     accessibilityLabel: 'One-Time Password',
                  }}
               />
               <View className="mt-5 flex flex-row gap-1">
                  <Text className="">Resend OTP in </Text>
                  <Text className="font-semibold">00:26</Text>
               </View>
               <TouchableOpacity
                  onPress={() => setIsVerified(true)}
                  className={`my-6 h-14 items-center justify-center rounded-[12px] bg-[#007BFF] disabled:bg-[#DBDBDB]`}
               >
                  <Text className="text-lg font-medium text-white disabled:text-[#747474]">
                     Verify
                  </Text>
               </TouchableOpacity>
            </View>
         )}
      </SafeAreaView>
   );
};

export default OTP;
