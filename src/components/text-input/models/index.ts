import { FieldError } from "react-hook-form";
import { TextInputProps as ReactNativeTextInputProps } from "react-native";

export type TextInputProps = Omit<
  ReactNativeTextInputProps,
  "secureTextEntry"
> & {
  label: string;
  error?: FieldError | undefined;
} & (
    | {
        secureTextEntry?: undefined;
        onPressPasswordEye?: () => void;
      }
    | {
        secureTextEntry: boolean;
        onPressPasswordEye: () => void;
      }
  );
