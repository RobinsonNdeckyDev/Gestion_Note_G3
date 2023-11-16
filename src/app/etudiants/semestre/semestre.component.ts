import { Component } from '@angular/core';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent {
  showSemestre: boolean = true;
  Semestre1!: string ;
buttontext!: string;
  ngOnInit(): void{
    this.buttontext="Semestre1"
    
     }
     affichesem(){
      if (this.buttontext=="Semestre1") {
        this.buttontext="Semestre2"
      }
      else{
        this.buttontext="Semestre1"
      }
      this.showSemestre=!this.showSemestre
  
     }



    //  ;;;;;;
  //   constructor(private SemestreService: SemestreService) {}

  // ngOnInit(): void {
  //   this.semestreService.getetudiants().subscribe((etudiants) => {
  //     this.semestreService = etudiants;
  //   });

  //   this.semestreService.getsemestre().subscribe((semestre) => {
  //     this.Semestre1 = this.semestreService;
  //   });
  // }

}
