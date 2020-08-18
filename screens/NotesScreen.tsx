import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import NoteCard from "../components/NoteCard";
import { Note } from "../types";

const testNote: Note = {
  title: "Note title",
  content: "Content",
  created: new Date(),
  updated: new Date(),
};

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <NoteCard note={testNote}></NoteCard>
      <NoteCard note={testNote}></NoteCard>
      <NoteCard note={testNote}></NoteCard>
      <NoteCard note={testNote}></NoteCard>
      <NoteCard note={testNote}></NoteCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
