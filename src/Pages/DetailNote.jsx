import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonAction from "../component/ButtonAction/ButtonAction";
import NoteDetail from "../component/NoteDetail/NoteDetail";
import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/api";

export default function DetailNote() {
  const { id } = useParams();
  const [notes, setNotes] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDetailNote = () => {
      getNote(id).then((res) => {
        try {
          setNotes(res.data);
          setLoading(false);
        } catch (error) {
          alert(error);
        }
      });
    };
    getDetailNote();
  }, []);

  return (
    <main>
      <section className="detail-page">
        {!loading ? (
          <>
            <NoteDetail
              title={notes.title}
              createdAt={notes.createdAt}
              body={notes.body}
            />
            <ButtonAction
              id={notes.id}
              archived={notes.archived}
              archiveNote={archiveNote}
              unarchiveNote={unarchiveNote}
              deleteNote={deleteNote}
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
}
