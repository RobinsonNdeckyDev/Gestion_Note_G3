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

  addEvaluation(evaluation: any) {
    this.evaluations.push(evaluation);
    this.saveToLocalStorage();
  }

  deleteEvaluation(index: number) {
    if (this.evaluations[index].status !== 'done') {
      this.evaluations.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  assignGrade(index: number, grade: number) {
    if (this.evaluations[index].status === 'done') {
      // You can handle grade assignment logic here
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
