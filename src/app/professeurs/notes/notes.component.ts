import { Component, OnInit } from '@angular/core';
import { GestionNotesService } from 'src/app/gestion-notes.service';
import {  Evaluations } from 'src/app/models/evaluation';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  evaluations: Evaluations[] = [];
  notes: Note[] = [];

  constructor(private gestionNotesService: GestionNotesService) {}

  ngOnInit(): void {
    this.gestionNotesService.getEvaluations().subscribe((evaluations) => {
      this.evaluations = evaluations;
    });

    this.gestionNotesService.getNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }
}
