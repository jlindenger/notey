import React from "react";

import { Text, View } from "./Themed";
import { Note } from "../types";

type NoteCardProps = {
  note: Note;
};

export default function NoteCard(props: NoteCardProps) {
  return (
    <View>
      <Text>{props.note.title}</Text>
      <Text>{props.note.content}</Text>
    </View>
  );
}
