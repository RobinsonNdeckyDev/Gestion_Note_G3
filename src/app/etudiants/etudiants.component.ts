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
  // if (this.showDevoir==this.showSemestre) {
  //   this.showSemestre==this.showDevoir
  // }
 }
 
 
}
