import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext'

function Notecard({ note }) {
  const { deleteNote, updateNote } = useContext(NoteContext)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
  })

  const handleUpdate = () => {
    updateNote(note._id, editData)
    setIsEditing(false)
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                    rounded-xl shadow-md hover:shadow-lg transition-all 
                    p-6 flex flex-col h-auto w-full">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border rounded-lg p-3 w-full mb-4 
                       focus:ring-2 focus:ring-blue-500 outline-none 
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white text-lg font-semibold"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />
          <textarea
            className="border rounded-lg p-3 w-full mb-4 
                       focus:ring-2 focus:ring-blue-500 outline-none 
                       bg-white dark:bg-gray-700 
                       text-gray-900 dark:text-white text-base"
            rows="5"
            value={editData.content}
            onChange={(e) =>
              setEditData({ ...editData, content: e.target.value })
            }
          />
          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {note.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
            {note.content}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span className="italic">
              {new Date(note.createdAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded-lg text-sm transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(note._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm transition"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Notecard
