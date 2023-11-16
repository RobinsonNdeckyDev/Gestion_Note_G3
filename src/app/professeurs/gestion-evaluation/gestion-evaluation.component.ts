import { Evaluations } from './../../models/evaluation';
import { FormateurService } from './../../formateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-evaluation',
  templateUrl: './gestion-evaluation.component.html',
  styleUrls: ['./gestion-evaluation.component.css']
})
export class GestionEvaluationComponent implements OnInit {
  evaluations: Evaluations[] = [];
  nouvelleEvaluation: Evaluations = {
    id:0,
    semestre: '',
    date: new Date(),
    type: '',
    anneeScolaire: '',
    etat: '',
    matiere: '',

  };
  imageUrl:String="assets/logo.png";

  constructor(private profService: FormateurService ) {}

  ngOnInit(): void {
    console.log("CC");
    this.evaluations = JSON.parse(localStorage.getItem("evaluations") || "[]")
    // this.evaluations = this.profService.getEvaluations();
    console.log(this.evaluations);
  }
  // showprogrammerEvaluation: boolean=true;
  programmerEvaluation(): void {

    this.profService.programmerEvaluation(this.nouvelleEvaluation);
    this.nouvelleEvaluation = {
      id: 0,
      semestre: '',
      date: new Date(),
      type: '',
      anneeScolaire: '',
      etat: '',
      matiere: '',
  
    };
  }

  supprimerEvaluation(id: number): void {
    this.profService.supprimerEvaluation(id);
  }
}