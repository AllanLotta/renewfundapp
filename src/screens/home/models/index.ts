import { HomeTabBarParamList } from "@app/routes/home-tabbar";
import { MainStackParamList } from "@app/routes/main-navigator";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeProps = CompositeScreenProps<
BottomTabScreenProps<HomeTabBarParamList, 'Home'>,
NativeStackScreenProps<MainStackParamList, 'HomeTabBar'>
>;