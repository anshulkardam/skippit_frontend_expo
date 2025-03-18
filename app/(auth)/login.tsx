import Button from '@/components/ui/Button';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6';
import BreakerText from '@/components/ui/breaker-text';
import { useRouter } from 'expo-router';

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
      <SafeAreaView className="flex-1 bg-neutral-800">
         <Animated.View
            entering={FadeInDown.duration(1000).springify().damping(12)}
            className="flex-1 justify-center bg-neutral-800 px-5"
         >
            <Text className="items-start text-4xl font-bold text-white">
               Login to Skippit!
            </Text>
            <Text className="mt-1 items-start text-base font-medium text-slate-200">
               To continue please enter your number below
            </Text>
            <View className="mt-8 flex h-16 flex-row items-center justify-center rounded-[12px] border border-neutral-200 px-2">
               <Text className="px-2 text-base font-semibold text-white">
                  +91
               </Text>
               <TextInput
                  keyboardType="numeric"
                  inputMode="numeric" // Ensures numeric keyboard on both Android and iOS
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  placeholder="Enter mobile number"
                  placeholderTextColor="white"
                  className="flex-1 px-1 text-base font-semibold text-white"
               />
               {phoneNumber.length > 0 && (
                  <Animated.View>
                     <TouchableOpacity
                        onPress={handleClear}
                        activeOpacity={0.7}
                     >
                        <Icon name="close-circle" size={18} color="#ffffff" />
                     </TouchableOpacity>
                  </Animated.View>
               )}
            </View>
            <Button onPress={handleOTP} loading={isloading} className="my-4">
               <View>
                  <Text className="text-lg font-semibold text-slate-200">
                     Get Verification Code
                  </Text>
               </View>
            </Button>
            <BreakerText text="or" />
            <Button className="relative my-4 bg-neutral-700">
               <FontAwesome6Brands
                  name="google"
                  size={22}
                  color="#ffffff"
                  className="absolute left-12" // Fix at the start
               />
               <Text className="text-center text-lg font-semibold text-slate-200">
                  Log in with Google
               </Text>
            </Button>
            <Button className="relative my-4 bg-neutral-700">
               <FontAwesome6Brands
                  name="apple"
                  size={26}
                  color="#ffffff"
                  className="absolute left-12" // Fix at the start
               />
               <Text className="text-center text-lg font-semibold text-slate-200">
                  Log in with Apple
               </Text>
            </Button>
         </Animated.View>
      </SafeAreaView>
   );
}
