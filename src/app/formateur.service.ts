import { Injectable } from '@angular/core';
import { Evaluations } from './models/evaluation';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private evaluations: Evaluations[] = [];

  constructor() {}

  getEvaluations(): Evaluations[] {
    // Récupérer la liste des évaluations depuis le localStorage ou une API
    const evaluationsData = localStorage.getItem('evaluations');
    this.evaluations = evaluationsData ? JSON.parse(evaluationsData) : [];
    return this.evaluations;
  }

  programmerEvaluation(evaluation: Evaluations): void {
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
