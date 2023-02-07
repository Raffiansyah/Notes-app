import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteList from "../component/NoteList/NoteList";
import { getActiveNotes } from "../utils/api";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getNotes = () => {
      getActiveNotes().then((res) => {
        try {
          setNotes(res.data);
          setLoading(false);
        } catch (error) {
          alert(error);
        }
      });
    };
    getNotes();
  }, []);
  return (
    <main>
      <h2>Active Note</h2>
      {!loading ? <NoteList notes={notes} /> : <p>Loading...</p>}
      <div className="homepage__action">
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => navigate("/notes/new")}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
      </div>
    </main>
  );
}
