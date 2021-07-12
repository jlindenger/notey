import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import { Note } from "../types";
import { TouchableOpacity } from "react-native-gesture-handler";

type NoteDetailProps = {
  note: Note;
  onCloseNote: () => void;
};

export default function NoteDetail(props: NoteDetailProps) {
  const {note, onCloseNote} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <TouchableOpacity onPress={onCloseNote}>
        <Text>CLOSE</Text>
      </TouchableOpacity>
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
