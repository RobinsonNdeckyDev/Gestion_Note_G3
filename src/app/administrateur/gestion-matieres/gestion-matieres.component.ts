import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-matieres',
  templateUrl: './gestion-matieres.component.html',
  styleUrls: ['./gestion-matieres.component.css']
})
export class GestionMatieresComponent {

  
  // Gestion bouton
  boutonActif = 1;

  currentContent: string = 'apercuForm'; // Initialiser le contenu actuel

  showContent(contentId: string): void {
    this.currentContent = contentId; // Mettre à jour le contenu actuel
  }

  // Initialisation du contenu actuel
  
}
