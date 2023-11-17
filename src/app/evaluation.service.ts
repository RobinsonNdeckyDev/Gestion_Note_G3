import { Injectable } from '@angular/core';
import { Evaluations } from './models/evaluation';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private evaluations: Evaluations[] = [];

  constructor() {}

  getEvaluations() {
    return this.evaluations;
  }

  addEvaluation(evaluation: Evaluations) {
    this.evaluations.push(evaluation);
    this.saveToLocalStorage();
  }

  deleteEvaluation(index: number) {
    if (this.evaluations[index].etat !== 'done') {
      this.evaluations.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  assignGrade(index: number, grade: number) {
    if (this.evaluations[index].etat === 'done') {
      // Vous pouvez gérer la logique d'attribution de note ici
      this.evaluations[index].grade = grade;
      this.saveToLocalStorage();
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('evaluations', JSON.stringify(this.evaluations));
  }

  private loadFromLocalStorage() {
    const storedEvaluations = localStorage.getItem('evaluations');
    this.evaluations = storedEvaluations ? JSON.parse(storedEvaluations) : [];
  }
}
