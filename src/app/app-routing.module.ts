import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// composants importés
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './administrateur/admin/admin.component';
import { ProfsComponent } from './professeurs/profs/profs.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { NotesComponent } from './professeurs/notes/notes.component';




const routes: Routes = [
  { path: '', redirectTo : 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  {path:'note', component: NotesComponent},
  { path: 'formateur', component: ProfsComponent},
  { path: 'etudiant', component: EtudiantsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
