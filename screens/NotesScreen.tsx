import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { Note } from "../types";
import NoteList from "../components/NoteList";
import NoteDetail from "../components/NoteDetail";

const testNote: Note = {
  title: "Note title",
  content: "Content",
  created: new Date(),
  updated: new Date(),
};

const notes: Note[] = [];
for (let i = 0; i < 20; i += 1) {
  const newNote = {...testNote, title: `Note #${i}`};
  notes.push(newNote);
}

export default function NotesScreen() {
  const [selectedNote, setSelectedNote] = React.useState<Note | null>(null);
  const closeNote = () => setSelectedNote(null);

  return (
    <View style={styles.container}>
      {selectedNote ?
        <NoteDetail note={selectedNote} onCloseNote={closeNote}/> :
        <NoteList notes={notes} onSelectNote={setSelectedNote} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
