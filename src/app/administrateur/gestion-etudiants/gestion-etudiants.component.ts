import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-etudiants',
  templateUrl: './gestion-etudiants.component.html',
  styleUrls: ['./gestion-etudiants.component.css']
})
export class GestionEtudiantsComponent {
  selectedNavItem: string = 'apprenants'; // Default selected item

  changeNavItem(item: string): void {
    this.selectedNavItem = item;
  }
}
