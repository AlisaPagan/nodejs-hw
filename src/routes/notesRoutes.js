import { Router } from 'express';
import {
  createNote,
  getNoteById,
  getNotes,
} from '../controllers/notesController.js';

const notesRouter = Router();

notesRouter.get('/notes', getNotes);
notesRouter.get('/notes:noteId', getNoteById);
notesRouter.post('/notes', createNote);

export default notesRouter;
