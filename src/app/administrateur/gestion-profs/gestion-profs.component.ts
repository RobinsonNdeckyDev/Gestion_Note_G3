import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-profs',
  templateUrl: './gestion-profs.component.html',
  styleUrls: ['./gestion-profs.component.css']
})
export class GestionProfsComponent {

  currentContent: string = 'apercuForm'; // Initialiser le contenu actuel

  showContent(contentId: string): void {
    this.currentContent = contentId; // Mettre à jour le contenu actuel
  }

}
