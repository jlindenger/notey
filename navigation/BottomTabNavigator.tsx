import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotesScreen from "../screens/NotesScreen";
import TasksScreen from "../screens/TasksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {
  BottomTabParamList,
  NotesParamList,
  TasksParamList,
  SettingsParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Notes"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Notes"
        component={NotesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="sticky-note" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tasks"
        component={TasksNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="tasks" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const NotesStack = createStackNavigator<NotesParamList>();

function NotesNavigator() {
  return (
    <NotesStack.Navigator>
      <NotesStack.Screen
        name="NotesScreen"
        component={NotesScreen}
        options={{ headerTitle: "Notes" }}
      />
    </NotesStack.Navigator>
  );
}

const TasksStack = createStackNavigator<TasksParamList>();

function TasksNavigator() {
  return (
    <TasksStack.Navigator>
      <TasksStack.Screen
        name="TasksScreen"
        component={TasksScreen}
        options={{ headerTitle: "Tasks" }}
      />
    </TasksStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
}
