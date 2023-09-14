import { ViewStyle } from "react-native";

export type RadioProps = {
  children: React.ReactNode;
  value: boolean;
  onChange?: (newValue: boolean) => void;
  style?: ViewStyle;
};
