import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-classes',
  templateUrl: './gestion-classes.component.html',
  styleUrls: ['./gestion-classes.component.css']
})
export class GestionClassesComponent {

  // Gestion bouton
  boutonActif = 1;

  currentContent: string = 'apercuForm'; // Initialiser le contenu actuel

  showContent(contentId: string): void {
    this.currentContent = contentId; // Mettre à jour le contenu actuel
  }

  // Initialisation du contenu actuel
  
}
