// notes.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Evaluation } from './evaluation.model';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private evaluations: Evaluation[] = [];
  private notes: Note[] = [];
  private evaluationsSubject = new BehaviorSubject<Evaluation[]>([]);

  evaluations$ = this.evaluationsSubject.asObservable();

  constructor() {}

  saveEvaluation(evaluation: Evaluation) {
    this.evaluations.push(evaluation);
    this.updateEvaluations();
  }

  getEvaluations(): Evaluation[] {
    return [...this.evaluations];
  }

  getNotes(): Note[] {
    return [...this.notes];
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  private updateEvaluations() {
    this.evaluationsSubject.next([...this.evaluations]);
  }
}
