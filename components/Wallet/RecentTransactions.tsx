import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../ui/button';
import { EllipsisVertical } from 'lucide-react-native';
import icons from '@/lib/icons';

const RecentTransactions = () => {
   return (
      <View className="rounded-2xl bg-white p-6">
         <View className="flex-row items-center justify-between">
            <View className='flex-row gap-2 items-center'>
               <Image
                  source={require('../../assets/images/default-runner.png')}
                  className="h-16 w-14 rounded-lg"
               />
               <View>
                  <Text className="font-semibold">Pick up Groceries</Text>
                  <Text className="text-sm text-gray-500">Runner name</Text>
                  <Text className="text-xs mt-1">22 Jan, 15:34 | ₹ 240.00</Text>
               </View>
            </View>

            <Button className="bg-green-500 px-3">
               <View className="flex-row items-center gap-1">
                  <Image
                     source={icons.reccuring}
                     tintColor={'white'}
                     className="size-6 text-white"
                  />
                  <Text className="font-medium text-white">Rebook</Text>
               </View>
            </Button>
         </View>
      </View>
   );
};

export default RecentTransactions;
