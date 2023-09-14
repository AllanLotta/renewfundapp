import { TextStyle, TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  textStyle?: TextStyle;
};
