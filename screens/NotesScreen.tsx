import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { Note } from "../types";
import NoteList from "../components/NoteList";

const testNote: Note = {
  title: "Note title",
  content: "Content",
  created: new Date(),
  updated: new Date(),
};

const notes: Note[] = [];
for (let i = 0; i < 20; i += 1) {
  notes.push(testNote);
}

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <NoteList notes={notes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
