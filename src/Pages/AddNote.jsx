import React from 'react'
import NoteInput from '../component/NoteInput/NoteInput'
import { addNote } from '../utils/api'

export default function AddNote() {
  return (
    <main>
      <section className='add-new-page'>
        <NoteInput addNote={addNote} />
      </section>
    </main>
  )
}
