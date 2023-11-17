import { Component, OnInit } from '@angular/core';
import 'select2';

declare var $: any;
@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.css']
})
export class ProfsComponent implements OnInit {

  classes: string[] = ['L1', 'L2', 'L3']; // Remplacez ceci par les classes réelles de votre modèle
  selectedClasses: string[] = [];

  ngOnInit() {
    // Initialisez Select2 pour l'élément avec l'ID 'selectClasses'
    $('#selectClasses').select2();

    // Réagissez aux changements de sélection
    $('#selectClasses').on('change', (event: { target: any; }) => {
      this.selectedClasses = $(event.target).val();
    });
  }

}
