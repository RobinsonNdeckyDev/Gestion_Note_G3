import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
import { Users } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Notre tableau tabAdmin
  tabAdmin: Users[] = [];

  
  // autres tableaux
  tabUsers: any;
  currentUser: any;



  // Notre constructeur
  constructor(private route: Router){}

  // Nos attributs

  emailLogin: string = "azerty@gmail.com";
  passwordLogin: string = "12345678";


  // Méthode d'initialisation
  ngOnInit() {
    if (!localStorage.getItem("tabAdmin")) {
      localStorage.setItem("tabAdmin", JSON.stringify(this.tabAdmin));
    }

    this.tabAdmin = JSON.parse(localStorage.getItem("tabAdmin") || '[]');

    // Notre objet compteAdmin
    let compteAdmin = {
      emailAdminLogin : this.emailLogin,
      passwordAdminLogin: this.passwordLogin
    }

    this.tabAdmin.push(compteAdmin)
  }

  



  // Nos méthodes

  connexion(){
    // alert(this.emailLogin);
    // alert(this.passwordLogin);

    // EmailRegex
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    if(this.emailLogin == "" || this.passwordLogin == "" ){
      this.alertMessage("error", "Attention", "Veillez renseigner tous les champs", timer);
    }else if(!this.emailLogin.match(emailPattern)){
      this.alertMessage("error", "Attention", "Veillez revoir votre email", timer);
    }else if(this.passwordLogin.length < 8){
      this.alertMessage("error", "Attention", "Le mot de passe doit contenir plus de huit caractéres", timer);
    }else{

      this.alertMessage("success", "Bravo", "Vous etes connecté avec succés", timer);
      this.route.navigate(['admin']);
    }

    }


  // sweetAlert
  alertMessage(icon: any, title: any, text: any, timer: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500
    });
  }
}
