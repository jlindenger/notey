import { DatePickerIOSProps } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Notes: undefined;
  Tasks: undefined;
  Settings: undefined;
};

export type NotesParamList = {
  NotesScreen: undefined;
};

export type TasksParamList = {
  TasksScreen: undefined;
};

export type SettingsParamList = {
  SettingsScreen: undefined;
};

export type Note = {
  title: string;
  content: string;
  created: Date;
  updated: Date;
};
