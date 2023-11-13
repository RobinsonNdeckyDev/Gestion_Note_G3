import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  // Notre constructeur
  constructor(private route: Router){}

  // Nos attributs

  emailLogin: string = "";
  passwordLogin: string = "";


  // Nos méthodes

  connexion(){
    // alert(this.emailLogin);
    // alert(this.passwordLogin);

    // EmailRegex
     const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    if(this.emailLogin == "" || this.passwordLogin == "" ){
      this.alertMessage("error", "Attention", "Veillez renseigner tous les champs");
    }else if(!this.emailLogin.match(emailPattern)){
      this.alertMessage("error", "Attention", "Veillez revoir votre email");
    }else if(this.passwordLogin.length < 8){
      this.alertMessage("error", "Attention", "Le mot de passe doit contenir plus de huit caractéres");
    }else{
      this.alertMessage("success", "Bravo", "Vous etes connecté avec succés");
      this.route.navigate(['admin']);
    }

    }


  // sweetAlert
  alertMessage(icon: any, title: any, text: any){
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }
}
