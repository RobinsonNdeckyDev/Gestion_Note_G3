// gestion-notes.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluations } from './models/evaluation';
import{Note} from './models/note'


@Injectable({
  providedIn: 'root',
})
export class GestionNotesService {
  private apiUrl = 'evaluation';

  constructor(private http: HttpClient) {}

  getEvaluations(): Observable<Evaluations[]> {
    return this.http.get<Evaluations[]>(`${this.apiUrl}/evaluations`);
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }
}
