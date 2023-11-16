import { Component } from '@angular/core';
import { Classe } from '../../models/classe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-etudiants',
  templateUrl: './gestion-etudiants.component.html',
  styleUrls: ['./gestion-etudiants.component.css']
})
export class GestionEtudiantsComponent {
  // Déclaration du tableau pour ajouter les classes
  classes: Classe[] = [];

  // Déclaration de l'attribut
  nom: String = "";

  valeur: string = "";
  image: string = "";
  password: string = "";
  email: string = "";
  prenom: string = "";
  name: string = "";

  // Attribut qui stock la classe selectionner
  selectValue: any;
 

  // Notre tableau d'objets classes récupéré à partir du localstorage
  tabClasses: any;
  idLastClasse: number = 0;

  tabApprenants: any;
  idLastApprenant: number = 0;


  // Appel de la methode ngOnInit de l'interface oninit 
  ngOnInit() {
    // console.log(this.users);
    if (!localStorage.getItem("Classes")) {
      localStorage.setItem("Classes", JSON.stringify(this.classes));
    }

    // Renvoie un tableau de valuers ou un tableau vide 
    this.tabClasses = JSON.parse(localStorage.getItem("Classes") || "[]");
    console.log(this.tabClasses);   
  }

  // Méthode pour changer le contenu principale 
  selectedNavItem: string = 'apprenants';
  changeNavItem(item: string): void {
    this.selectedNavItem = item;
  }

  // Méthode pour afficher un sweetalert2 apres vérification 
  sweet(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }

  // Methode pour valider l'ajout de classes
  ajoutClassesValider() {
    alert(this.nom);

    // On vérifie si le tableau n'est pas vide 
    if (this.tabClasses.length) {
      console.warn("taille du tab");
      this.idLastClasse = this.tabClasses[this.tabClasses.length - 1].idClasse;
      console.log(this.idLastClasse)
    }
    else {
      this.idLastClasse = 0;
      console.warn("idLastClasse = 0")
    }

    // Verification du nom
    // Si le champ est remplit, on ajoute la classe dans le tableau localStorage
    if (this.nom == "") {
      this.sweet('error', 'Erreur!', 'Veuillez remplir le champ');
    } else {
      let classe = {
        idClasse: this.idLastClasse + 1,
        nom: this.nom,
        apprenants: []
      }
      let userExist = this.tabClasses.find((elemt: any) => elemt.nom == this.nom);

      if (userExist) {
        // Est executé que si l'on trouve un compte avce le meme email que celui qui a été renseigné
        this.sweet('error', 'Erreur!', 'Cette classe est déjà ajoutée');
      }
      else {
        // On crée le compte 
        this.tabClasses.push(classe);
        localStorage.setItem("Classes", JSON.stringify(this.tabClasses));
        this.sweet('success', 'Felicitation!', 'Ajout Classe reuissie');
        this.nom = '';
      }
    }
  }

  // Methode pour valider l'ajout de l'apprenants
  ajoutApprenantsValider() {
    alert(this.prenom);
    alert(this.name);
    alert(this.email);
    alert(this.password);
    alert(this.valeur);
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    if (this.name == "" || this.prenom == "" || this.email == "" || this.password == "" || this.image == "" || this.valeur == "") {
      this.sweet("error", "Erreur!", "Vueillez renseigner les champs");
    } else if (!this.email.match(emailPattern)) {
      this.sweet("error", "Erreur!", "Email invalide");
    } else {
      // On récupère la classe qui a été selectioner
      this.selectValue = this.tabClasses.find((element: any) => element.idClasse == this.valeur);
      console.log(this.selectValue);
      // On stock la liste des apprenants dans le tableau 
      this.tabApprenants = this.selectValue.apprenants;
      // On vérifie si le tableau n'est pas vide 
      if (this.tabApprenants.length) {
        console.warn("taille du tab");
        this.idLastApprenant = this.tabApprenants[this.tabApprenants.length - 1].idContact;
        console.log(this.idLastApprenant)
      }
      else {
        this.idLastApprenant = 0;
        console.warn("idLastUser = 0")
      }
      // Création de l'objet apprenant
      let apprenant = {
        idApprenant: this.idLastApprenant + 1,
        nomApprenant: this.name,
        prenomApprenant: this.prenom,
        emailApprenant: this.email,
        passwordApprenant: this.password,
        imageApprenant: this.image,
        etatApprenant: 1,
        anneeScolaire: new Date(),
        role: 'apprenant',
      }
      this.tabApprenants.push(apprenant);
      localStorage.setItem("Classes", JSON.stringify(this.tabClasses));
      this.sweet('success', 'Felicitation!', 'Ajout Classe reuissie');
      this.name = '';
      this.prenom = '';
      this.email = '';
      this.password = '';
      this.image = '';
      this.valeur = '';
    }

  }
}
