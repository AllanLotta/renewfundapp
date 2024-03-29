import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { forwardRef } from "react";
import {
  TextInput as ReactNativeTextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Text from "@components/text";

import styles from "./styles";
import { TextInputProps } from "./models";

const TextInput = forwardRef<ReactNativeTextInput, TextInputProps>(
  (
    { label, style, error, secureTextEntry, onPressPasswordEye, ...props },
    ref
  ) => {
    const { colors } = useTheme();

    const renderEye = () =>
      secureTextEntry ? (
        <Feather style={styles.eye} name="eye" size={20} color={colors.text} />
      ) : (
        <Feather
          style={styles.eye}
          name="eye-off"
          size={20}
          color={colors.text}
        />
      );

    return (
      <View style={styles.container}>
        <Text style={{ color: colors.ghostedText }}>{label}</Text>
        <View
          style={[
            styles.textInputContainer,
            { backgroundColor: colors.textInput },
          ]}
        >
          <ReactNativeTextInput
            ref={ref}
            style={[styles.textInput, style]}
            numberOfLines={1}
            {...props}
            secureTextEntry={secureTextEntry}
          />
          {secureTextEntry !== undefined ? (
            <TouchableOpacity activeOpacity={0.7} onPress={onPressPasswordEye}>
              {renderEye()}
            </TouchableOpacity>
          ) : null}
        </View>
        {error ? (
          <Text size="h5" type="error">
            {error.message}
          </Text>
        ) : null}
      </View>
    );
  }
);

export default TextInput;
