import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent {
showDevoir: boolean = true;
showSemestre: boolean = true;
Semestre1!: string ;
buttontext!: string;
 Afficher(){
  this.showDevoir=!this.showDevoir;
 }
 
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
   }
   
}
