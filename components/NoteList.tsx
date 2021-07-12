import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { View, ScrollView } from "../components/Themed";
import NoteCard from "../components/NoteCard";
import { Note } from "../types";

type NoteListProps = {
    notes: Note[];
    onSelectNote: (note: Note | null) => void
}

export default function NoteList(props: NoteListProps) {
  const {notes, onSelectNote} = props;  
  return (
      <ScrollView style={styles.scrollView}>
        {notes.map((note, i) => (
          <>
            <TouchableOpacity onPress={() => {onSelectNote(note)}}>
              <NoteCard key={i} note={note}></NoteCard>
            </TouchableOpacity>
            {i !== notes.length - 1 ? (
              <View
                key={`{i}sep`}
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            ) : null}
          </>
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  separator: {
    height: 1,
    width: "80%",
  },
});
