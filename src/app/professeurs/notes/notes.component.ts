import { Component, OnInit } from '@angular/core';
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

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.gestionNotesService.getEvaluations().subscribe((evaluations) => {
  //     this.evaluations = evaluations;
  //   });

  //   this.gestionNotesService.getNotes().subscribe((notes) => {
  //     this.notes = notes;
  //   });
  // }
}
