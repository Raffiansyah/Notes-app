import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../component/NoteDetail/NoteDetail";
import { getNote } from "../utils/api";

export default function DetailNote() {
  const { id } = useParams();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getDetailNote = () => {
      getNote(id).then((res) => {
        try {
          setNotes(res.data);
        } catch (error) {
          alert(error)
        }
      });
    };
    getDetailNote();
  }, []);

  return (
    <main>
      <section className="detail-page">
        <NoteDetail
          title={notes.title}
          createdAt={notes.createdAt}
          body={notes.body}
        />
      </section>
    </main>
  );
}
