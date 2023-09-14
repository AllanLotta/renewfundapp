import { MainStackParamList } from "@app/routes/main-navigator";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export type FundDetailsProps = NativeStackScreenProps<
  MainStackParamList,
  "FundDetails"
>;

export type FundDetailsNavigationProps = NativeStackNavigationProp<
  MainStackParamList,
  "FundDetails"
>;
