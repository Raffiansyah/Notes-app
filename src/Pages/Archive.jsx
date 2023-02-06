import React, { useContext, useEffect, useState } from "react";
import NoteList from "../component/NoteList/NoteList";
import { getArchivedNotes } from "../utils/api";

export default function Archive() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getNotes = () => {
      getArchivedNotes().then((res) => {
        try {
          setNotes(res.data);
          setLoading(false)
        } catch (error) {
          alert(error)
        }
      });
    };
    getNotes();
  }, []);
  return (
    <main>
      <h2>Archive Note</h2>
      {!loading ? <NoteList notes={notes} /> : <p>Loading...</p>}
    </main>
  );
}
