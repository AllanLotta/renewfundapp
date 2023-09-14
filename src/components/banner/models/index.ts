import { ViewStyle } from "react-native";

export interface BannerProps {
    title: string;
    subtitle: string;
    image: React.ReactNode;
    style?: ViewStyle;
}