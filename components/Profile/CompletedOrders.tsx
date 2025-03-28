import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../ui/button';
import { EllipsisVertical } from 'lucide-react-native';

const OrderCard = ({ type }: { type: string }) => {
   return (
      <View className="rounded-2xl bg-white p-6 ">
         <View className="flex-row items-start gap-4">
            <Image
               source={require('../../assets/images/default-runner.png')}
               className="h-16 w-14 rounded-lg"
            />
            <View>
               <Text className="text-lg font-semibold">Pick up Groceries</Text>
               <Text className="text-sm text-gray-500">Runner name</Text>
               <Text className="text-sm text-gray-400">22 Jan, 15:34 | ₹ 240.00</Text>
            </View>
            <Image
               source={require('../../assets/images/dummyMap.png')}
               className="ml-2 h-[53px] w-[80px] rounded-lg"
            />
         </View>
         {type === 'completed' && (
            <View className="mt-8 flex-row items-center gap-4">
               <Button className="flex-row items-center rounded-xl bg-gray-700 px-6 py-2">
                  <FontAwesome name="star" size={16} color="white" />
                  <Text className="ml-2 text-white">Rate Runner</Text>
               </Button>

               <Button className="flex-row items-center rounded-xl bg-green-600 px-6 py-2">
                  <FontAwesome name="refresh" size={16} color="white" />
                  <Text className="ml-2 text-white">Rebook</Text>
               </Button>
               <EllipsisVertical
                  size={26}
                  color={'black'}
                  className="flex items-end justify-end place-self-end"
               />
            </View>
         )}
         {type === 'recurring' && (
            <View className="mt-8 flex-row justify-between items-center gap-4">
               <Button className="flex-row items-center rounded-xl bg-black ">
                  <Text className="w-[117px] text-center font-medium text-white">Modify</Text>
               </Button>

               <Button className="flex-row items-center rounded-xl bg-[#DCDCDC] ">
                  <Text className="w-[117px] text-center font-medium text-black">Pause</Text>
               </Button>
               <EllipsisVertical
                  size={26}
                  color={'black'}
                  className="flex items-end justify-end place-self-end"
               />
            </View>
         )}
      </View>
   );
};

export default OrderCard;
