import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import { Note } from "../types";

type NoteCardProps = {
  note: Note;
};

export default function NoteCard(props: NoteCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.note.title}</Text>
      <Text style={styles.content}>{props.note.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 14,
  },
});
