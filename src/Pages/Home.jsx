import React, { useContext, useEffect, useState } from "react";
import NoteList from "../component/NoteList/NoteList";
import { getActiveNotes } from "../utils/api";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = () => {
      getActiveNotes().then((res) => {
        try {
          setNotes(res.data);
        } catch (error) {
          alert(error)
        }
      });
    };
    getNotes();
  }, []);
  return (
    <main>
      <h2>Active Note</h2>
      <NoteList notes={notes} />
    </main>
  );
}
