import { TouchableOpacityProps, ViewStyle } from 'react-native';

export interface CustomButtonProps extends TouchableOpacityProps {
   className?: string;
   onPress?: () => void;
   loading?: boolean;
   children: React.ReactNode;
}
