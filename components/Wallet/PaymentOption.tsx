import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { FC } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';

interface PaymentOptionProps {
   icon?: ImageSourcePropType;
   title: string;
   description?: string;
   onPress: () => void;
}

const PaymentOption: FC<PaymentOptionProps> = ({ icon, title, description, onPress }) => {
   return (
      <TouchableOpacity
         className="flex-row justify-between items-center p-3"
         onPress={onPress}
      >
        <View className='flex-row gap-3 items-center'>
        {icon && (
            <View className="rounded-md border border-[#BCBCBC] p-1">
               <Image source={icon} className="size-7" resizeMode="contain" />
            </View>
         )}
         <View>
            <Text className="text-lg font-semibold">{title}</Text>
            {description && <Text className="text-sm text-gray-500">{description}</Text>}
         </View>
        </View>
         
         <FontAwesome6 name="chevron-right" size={14} color={'black'} className="font-bold" />
      </TouchableOpacity>
   );
};

export default PaymentOption;
