export class Evaluations {
  idEvaluation: number = 0;
  semester: string = '';
  date:  Date = new Date();
  type: string = '';
  year:  Date = new Date();
  status: string = '';
  subject: string = '';
  Classe: any = [];
  grade: number | null = null;

  constructor(
    idEvaluation: number,
    semester: string,
    date:Date = new Date(),
    year: Date = new Date(),
    type: string,
    status: string,
    subject: string,
    Classe: any
  ) {
    this.idEvaluation = idEvaluation;
    this.semester = semester;
    this.date = date;
    this.type = type;
    this.year = year;
    this.status = status;
    this.subject = subject;
    this.Classe = Classe;
    this.grade = null;
  }
}
