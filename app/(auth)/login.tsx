import {
   Image,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6';
import BreakerText from '@/components/ui/breaker-text';
import { useRouter } from 'expo-router';
import BackButton from '@/components/ui/back-button';

export default function Login() {
   const router = useRouter();
   const [phoneNumber, setPhoneNumber] = useState('');
   const [isloading, setIsloading] = useState(false);

   const handleClear = () => {
      setPhoneNumber('');
   };

   const handleOTP = () => {
      router.navigate('/otp');
   };
   return (
      <SafeAreaView className="flex-1">
         <BackButton />
         <Animated.View
            entering={FadeInDown.duration(1000).springify().damping(12)}
            className="flex-1 justify-center px-5"
         >
            <Text className="font-roboto items-start text-4xl">
               Login to Skippit!
            </Text>
            <Text className="items-start text-base font-normal">
               To continue please enter your number below
            </Text>
            <View className="mt-8 flex h-16 flex-row items-center justify-center rounded-[12px] border border-neutral-500 px-4">
               <Image
                  source={require('../../assets/icons/india-flag.png')}
                  className="h-5 w-5"
               />
               <Text className="px-3 text-lg font-semibold">+91</Text>
               <View className="h-5 w-[1px] bg-neutral-400" />
               {/* Border with custom height */}
               <TextInput
                  keyboardType="numeric"
                  inputMode="numeric" // Ensures numeric keyboard on both Android and iOS
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  maxLength={10}
                  placeholder="Enter mobile number"
                  placeholderTextColor="black"
                  className="flex-1 items-center px-3 text-lg font-semibold"
               />
               {phoneNumber.length > 0 && (
                  <Animated.View>
                     <TouchableOpacity
                        onPress={handleClear}
                        activeOpacity={0.7}
                     >
                        <Icon name="close-circle" size={18} color="#000000" />
                     </TouchableOpacity>
                  </Animated.View>
               )}
            </View>
            <TouchableOpacity
               onPress={handleOTP}
               disabled={phoneNumber.length < 10}
               className={`my-6 h-14 items-center justify-center rounded-[12px] bg-[#007BFF] disabled:bg-[#DBDBDB]`}
            >
               <Text
                  disabled={phoneNumber.length < 10}
                  className="text-lg font-medium text-white disabled:text-[#747474]"
               >
                  Get Verification Code
               </Text>
            </TouchableOpacity>

            <BreakerText text="or" />

            <TouchableOpacity
               className={`relative my-4 flex h-14 flex-row items-center justify-center rounded-[12px] border border-neutral-500`}
            >
               <Image
                  source={require('../../assets/icons/google-icon.png')}
                  className="absolute left-6 h-6 w-6"
               />
               <Text className="text-center text-lg font-medium">
                  Log in with Google
               </Text>
            </TouchableOpacity>

            <TouchableOpacity
               className={`relative my-4 h-14 items-center justify-center rounded-[12px] border border-neutral-500`}
            >
               <FontAwesome6Brands
                  name="apple"
                  size={27}
                  className="absolute left-6" // Fix at the start
               />
               <Text className="text-center text-lg font-medium">
                  Log in with Apple
               </Text>
            </TouchableOpacity>
         </Animated.View>
      </SafeAreaView>
   );
}
