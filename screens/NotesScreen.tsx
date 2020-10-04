import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View, ScrollView } from "../components/Themed";
import NoteCard from "../components/NoteCard";
import { Note } from "../types";

const testNote: Note = {
  title: "Note title",
  content: "Content",
  created: new Date(),
  updated: new Date(),
};

const noteList: Note[] = [];
for (let i = 0; i < 20; i += 1) {
  noteList.push(testNote);
}

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {noteList.map((note, i) => (
          <>
            <NoteCard key={i} note={note}></NoteCard>
            {i !== noteList.length - 1 ? (
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  separator: {
    // marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
