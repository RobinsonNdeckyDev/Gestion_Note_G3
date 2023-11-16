import { Evaluations } from './../../models/evaluation';
import { FormateurService } from './../../formateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-evaluation',
  templateUrl: './gestion-evaluation.component.html',
  styleUrls: ['./gestion-evaluation.component.css']
})
export class GestionEvaluationComponent {
  evaluations: Evaluations[] = [];
  nouvelleEvaluation: Evaluations = {
    id:0,
    semestre: '',
    date: new Date(),
    type: '',
    anneeScolaire: '',
    etat: 'En cours',
    matiere: ''

  };
  imageUrl:String="assets/logo.png";

  constructor(private profService: FormateurService ) {}

  ngOnInit(): void {
    this.evaluations = this.profService.getEvaluations();
  }
  // showprogrammerEvaluation: boolean=true;
  programmerEvaluation(): void {

    this.profService.programmerEvaluation(this.nouvelleEvaluation);
    this.nouvelleEvaluation = {
      id: 0,
      semestre: '1',
      date: new Date(),
      type: '',
      anneeScolaire: '',
      etat: 'En cours',
      matiere: 'anglais'
    };
  }

  supprimerEvaluation(id: number): void {
    this.profService.supprimerEvaluation(id);
  }
}
