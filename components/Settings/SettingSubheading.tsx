import { Image, ImageSourcePropType, Text } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsSubHeadings({
   icon,
   title,
}: {
   title: string;
   icon: ImageSourcePropType;
}) {
   return (
      <View className="flex flex-row justify-between items-center">
         <View className="flex flex-row gap-3 items-center">
            <Image source={icon} className="size-7" />
            <Text className='font-semibold text-base'>{title}</Text>
         </View>
         <Icon name="chevron-down" size={16} className='pr-1' />
      </View>
   );
}
