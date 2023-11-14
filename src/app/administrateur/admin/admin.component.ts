import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  // Affichage des composants
  currentContent: string = 'gestionProfs'; // Initialiser le contenu actuel

  showComponant(contentId: string): void {
    this.currentContent = contentId; // Mettre à jour le contenu actuel
  }

}
