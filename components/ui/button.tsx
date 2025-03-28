import React from 'react';
import { CustomButtonProps } from '@/lib/types';
import { TouchableOpacity, View } from 'react-native';
import Loading from './loading';

const Button = ({
   className,
   onPress,
   loading = false,
   children,
}: CustomButtonProps) => {
   if (loading) {
      return (
         <View className="h-12 items-center justify-center rounded-[12px] bg-neutral-600">
            <Loading />
         </View>
      );
   }
   return (
      <TouchableOpacity
         onPress={onPress}
         className={`h-12 items-center justify-center rounded-[12px] bg-[#007BFF] ${className}`}
      >
         {children}
      </TouchableOpacity>
   );
};

export default Button;