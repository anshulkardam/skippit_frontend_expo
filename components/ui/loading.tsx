import { View, ActivityIndicatorProps, ActivityIndicator } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = ({
   size = 'large',
   color = '#ffffff',
}: ActivityIndicatorProps) => {
   return (
      <View className="flex-1 items-center justify-center">
         <LottieView
            source={require('@/assets/animations/loading.json')}
            autoPlay
            loop
            style={{ width: 100, height: 100 }}
         />
      </View>
   );
};

export default Loading;
