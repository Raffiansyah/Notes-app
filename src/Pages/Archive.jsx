import React, { useContext, useEffect, useState } from "react";
import NoteList from "../component/NoteList/NoteList";
import { getArchivedNotes } from "../utils/api";

export default function Archive() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = () => {
      getArchivedNotes().then((res) => {
        setNotes(res.data);
      });
    };
    getNotes();
  });
  return (
    <main>
      <h2>Archive Note</h2>
      <NoteList notes={notes} />
    </main>
  );
}
