import { useTheme } from '@react-navigation/native';
import {
  TouchableOpacity,
} from 'react-native';

import Text from '@components/text';

import styles from './styles';
import { ButtonProps } from './models';



const Button = ({
  title,
  style,
  disabled,
  textStyle,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        { backgroundColor: disabled ? colors.inactive : colors.primary },
        style,
      ]}
      {...props}
      disabled={disabled}
    >
      <Text size="h4" style={[{ color: colors.textOnPrimary }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
