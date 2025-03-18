import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { OtpInput } from 'react-native-otp-entry';
import LottieView from 'lottie-react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const OTP = () => {
   const router = useRouter();
   const [isVerified, setIsVerified] = useState(false);
   return (
      <View className="flex-1">
         {isVerified ? (
            <View className="flex items-center justify-center">
               <LottieView
                  source={require('@/assets/animations/verified.json')}
                  autoPlay
                  loop
                  style={{ width: 400, height: 400 }}
               />
               <Animated.Text
                  entering={FadeInRight.duration(2000).springify().damping(12)}
                  className="text-3xl font-semibold text-blue-400"
               >
                  Successfully Verified
               </Animated.Text>

               <TouchableOpacity
                  onPress={() => router.navigate('/choose-role')}
                  className={`my-4 h-14 items-center justify-center rounded-[12px] bg-blue-800`}
               >
                  <View>
                     <Text>Go next</Text>
                  </View>
               </TouchableOpacity>
            </View>
         ) : (
            <View>
               <Text>OTP</Text>
               <OtpInput
                  numberOfDigits={6}
                  onTextChange={(text) => console.log(text)}
               />
               <OtpInput
                  numberOfDigits={6}
                  focusColor="green"
                  autoFocus={false}
                  hideStick={true}
                  placeholder="******"
                  blurOnFilled={true}
                  disabled={false}
                  type="numeric"
                  secureTextEntry={false}
                  focusStickBlinkingDuration={500}
                  onFocus={() => console.log('Focused')}
                  onBlur={() => console.log('Blurred')}
                  onTextChange={(text) => console.log(text)}
                  onFilled={(text) => console.log(`OTP is ${text}`)}
                  textInputProps={{
                     accessibilityLabel: 'One-Time Password',
                  }}
               />

               <TouchableOpacity
                  onPress={() => setIsVerified(true)}
                  className={`my-4 h-14 items-center justify-center rounded-[12px] bg-blue-800`}
               >
                  <View>
                     <Text>Go next</Text>
                  </View>
               </TouchableOpacity>
            </View>
         )}
      </View>
   );
};

export default OTP;
