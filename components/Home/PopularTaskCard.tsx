import { View, Text, Image } from 'react-native';
import React from 'react';
import Button from '../ui/button';
import icons from '@/lib/icons';

const PopularTaskCard = () => {
   return (
      <View className="h-40 w-36 rounded-3xl bg-white p-3">
         <Text className="text-lg font-semibold">Pick Up the groceries</Text>
         <Text className="text-xs">
            Need someone to pick up groceries from store nearby location
         </Text>
         <Button>
            <View>
               <Text>Customize</Text>
               <Image source={icons.edit} className="size-6" />
            </View>
         </Button>
      </View>
   );
};

export default PopularTaskCard;
