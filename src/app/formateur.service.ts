import { Injectable } from '@angular/core';
import { Evaluation } from './evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private evaluations: Evaluation[] = [];

  constructor() {}

  getEvaluations(): Evaluation[] {
    // pour reccuperer la liste des évaluations depuis le localStorage 
    const evaluationsData = localStorage.getItem('evaluations');
    this.evaluations = evaluationsData ? JSON.parse(evaluationsData) : [];
    return this.evaluations;
  }

  programmerEvaluation(evaluation: Evaluation): void {
    // Ajouter une nouvelle évaluation à la liste
    this.evaluations.push(evaluation);
    // Mettre à jour le localStorage
    localStorage.setItem('evaluations', JSON.stringify(this.evaluations));
  }

  supprimerEvaluation(id: number): void {
    // Supprimer une évaluation de la liste
    this.evaluations = this.evaluations.filter(e => e.id !== id);
    // Mettre à jour le localStorage
    localStorage.setItem('evaluations', JSON.stringify(this.evaluations));
  }
}
