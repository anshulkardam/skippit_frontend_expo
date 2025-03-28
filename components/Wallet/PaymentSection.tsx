import { View, Text } from 'react-native';
import { FC, ReactNode } from 'react';

interface PaymentSectionProps {
  title: string;
  children: ReactNode;
}

const PaymentSection: FC<PaymentSectionProps> = ({ title, children }) => {
  return (
    <View className="mb-6">
      <Text className="text-gray-600 text-sm font-semibold mb-2">{title}</Text>
      <View className="bg-gray-100 p-3 rounded-lg">{children}</View>
    </View>
  );
};

export default PaymentSection;
