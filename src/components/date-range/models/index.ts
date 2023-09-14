import { ViewStyle } from "react-native";

export type DateRangeOptions = 'h' | 'd' | 'w' | 'm' | 'y' | 'all';

export type DateRangeProps = {
  range: DateRangeOptions;
  onChangeRange: (range: DateRangeOptions) => void;
  style?: ViewStyle;
};