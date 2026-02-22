import { Note } from '../models/notes.js';

// ====== GET NOTES ======
export const getNotes = async (_req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};

// ====== GET NOTES BY ID ======
export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);

  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  res.status(200).json(note);
};

// ====== CREATE NOTES ======
export const createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.status(201).json(note);
};

// ====== DELETE NOTES ======
