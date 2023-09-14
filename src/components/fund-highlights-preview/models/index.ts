import { FundHighlight } from "@app/models/fund";
import { ViewStyle } from "react-native";

export type FundHighlightsPreviewProps = {
  highlights?: FundHighlight[];
  style?: ViewStyle;
};
