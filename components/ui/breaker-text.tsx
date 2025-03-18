import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BreakerText = ({ text }: { text: string }) => {
   return (
      <View className="my-4 flex-row items-center justify-center">
         {/* Left fading line */}
         <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 1, width: 100, marginRight: 12 }} // Added gap on right side
         />

         {/* Text */}
         <Text className="text-lg font-medium">{text}</Text>

         {/* Right fading line */}
         <LinearGradient
            colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 1, width: 100, marginLeft: 12 }} // Added gap on left side
         />
      </View>
   );
};

export default BreakerText;
