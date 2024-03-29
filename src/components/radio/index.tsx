import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { RadioProps } from './models';

const Radio = ({ children, value, onChange, style }: RadioProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onChange?.(!value)}>
      <View style={[styles.container, style]}>
        <View>
          <View
            style={{
              ...styles.radio,
              borderColor: value ? colors.primary : colors.textInput,
              backgroundColor: value ? colors.primary : undefined,
            }}
          >
            <Feather name="check" size={12} color={colors.textOnPrimary} />
          </View>
        </View>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Radio;
