/* eslint-disable security/detect-object-injection */
import { useTheme } from "@react-navigation/native";
import { useMemo } from "react";
import { Text as ReactNativeText } from "react-native";

import styles from "./styles";
import { TextProps } from "./models";

const Text = ({
  size = "h5",
  style,
  type = "regular",
  bold = false,
  ...props
}: TextProps) => {
  const { colors } = useTheme();

  const fontSize = useMemo(
    () =>
      ({
        h1: 28,
        h2: 24,
        h3: 18,
        h4: 16,
        h5: 14,
        h6: 12,
      }[size]),
    [size]
  );

  const fontFamily = useMemo(
    () => (bold ? "Montserrat-Bold" : "Montserrat-Medium"),
    [bold]
  );

  const color = useMemo(() => colors.texts[type], [colors.texts, type]);

  return (
    <ReactNativeText
      style={[styles.text, { fontSize, fontFamily, color }, style]}
      {...props}
    />
  );
};

export default Text;
