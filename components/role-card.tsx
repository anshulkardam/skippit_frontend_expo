import { View, Text, Pressable } from 'react-native';

type RoleCardProps = {
   title: string;
   description: string;
   isSelected: boolean;
   onSelect: () => void;
};

export default function RoleCard({
   title,
   description,
   isSelected,
   onSelect,
}: RoleCardProps) {
   return (
      <View className="w-[136px]">
         <Pressable
            onPress={onSelect}
            className={`h-[170px] w-full items-center rounded-[12px] bg-white p-4 shadow-md ${
               isSelected ? ' border-2 border-blue-500' : 'border-none'
            } active:opacity-90`}
         >
            <View
               className={`h-[118px] w-[116px] rounded-[12px] bg-gray-200`}
            />
            <Text className={`text-lg mt-1 font-bold`}>{title}</Text>
         </Pressable>
         <Text className={`mt-6 text-center text-gray-500`}>{description}</Text>
      </View>
   );
}
