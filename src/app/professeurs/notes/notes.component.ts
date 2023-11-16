// notes.component.ts
import { Component, OnInit } from '@angular/core';
import { NotesService, Evaluation, Note } from './path-to-your-service-and-models';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  evaluations: Evaluation[] = [];
  notes: Note[] = [];
  selectedEvaluationId: number | null = null;
  noteValue: number | null = null;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.evaluations = this.notesService.getEvaluations();
    this.notes = this.notesService.getNotes();
  }

  saveEvaluation() {
    const newEvaluation: Evaluation = { id: this.evaluations.length + 1, nom: `Evaluation ${this.evaluations.length + 1}` };
    this.notesService.saveEvaluation(newEvaluation);
    this.evaluations = this.notesService.getEvaluations();
  }

  addNote() {
    if (this.selectedEvaluationId !== null && this.noteValue !== null) {
      const newNote: Note = { evaluationId: this.selectedEvaluationId, value: this.noteValue };
      this.notesService.addNote(newNote);
      this.notes = this.notesService.getNotes();
    }
  }
}
