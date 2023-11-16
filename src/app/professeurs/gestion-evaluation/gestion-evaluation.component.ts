import { Component, OnInit } from '@angular/core';
import { GestionNotesService } from 'src/app/gestion-notes.service';
import { Evaluations } from 'src/app/models/evaluation';

@Component({
  selector: 'app-gestion-evaluation',
  templateUrl: './gestion-evaluation.component.html',
  styleUrls: ['./gestion-evaluation.component.css']
})
export class GestionEvaluationComponent implements OnInit {
  i: number = 0;
  semester: string = '';
  date: Date = new Date();
  year: Date = new Date();
  type: string = '';
  status: string = '';
  subject: string = '';
  evaluations: Evaluations[] = [];
  grade:any;
  constructor(private evaluationService: GestionNotesService) {}

  private saveToLocalStorage() {
    localStorage.setItem('evaluations', JSON.stringify(this.evaluations));
  }

  ngOnInit() {
    this.evaluationService.evaluations$.subscribe((evaluations) => {
      this.evaluations = evaluations;
    });
  }

  saveEvaluation() {
    const evaluation: Evaluations = {
      idEvaluation: 0,
      semester: this.semester,
      date: this.date,
      type: this.type,
      year: this.year,
      status: this.status,
      subject: this.subject,
      Classe: [],
      grade: null
    };

    // this.evaluationService.saveEvaluation(evaluation).subscribe(() => {
    //   this.evaluationService.getEvaluations().subscribe((evaluations) => {
    //     this.evaluations = evaluations;
    //   });
    // });
  }

  deleteEvaluation(index: number) {
    if (this.evaluations[index].status === 'faite') {
      alert("Impossible de supprimer une évaluation déjà faite.");
      return;
    }

    this.evaluations.splice(index, 1);
    this.saveToLocalStorage();
  }

  assignGrade(index: number, gradeInput: string | null) {
    if (gradeInput !== null) {
      const grade = parseFloat(gradeInput.toString());
      if (!isNaN(grade) && grade >= 0 && grade <= 20) {
        this.evaluations[index].grade = grade;
      } else {
        alert("Veuillez entrer une note valide entre 0 et 20.");
      }
    } else {
      alert("La note est nulle.");
    }
  }
}
