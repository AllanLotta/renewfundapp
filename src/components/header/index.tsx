import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { HeaderProps } from './models';

const Header = ({ navigation, children }: HeaderProps) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      edges={['top']}
      style={{ backgroundColor: colors.background }}
    >
      <View style={styles.header}>
        <View style={styles.children}>{children}</View>
        {navigation.canGoBack() ? (
          <Pressable onPress={navigation.goBack}>
            <Ionicons
              style={styles.icon}
              name="ios-arrow-back"
              size={28}
              color={colors.text}
            />
          </Pressable>
        ) : (
          <View style={styles.container} />
        )}
      </View>

      <View
        style={{ ...styles.separator, backgroundColor: colors.textInput }}
      />
    </SafeAreaView>
  );
};

export default Header;
