import { TextProps as ReactNativeTextProps } from "react-native";

export type TextProps = ReactNativeTextProps & {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bold?: boolean;
  type?: "regular" | "info" | "warn" | "error" | "success" | "accent" | "ghost";
};
