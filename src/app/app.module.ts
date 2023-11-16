import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './administrateur/admin/admin.component';
import { GestionProfsComponent } from './administrateur/gestion-profs/gestion-profs.component';
import { GestionEtudiantsComponent } from './administrateur/gestion-etudiants/gestion-etudiants.component';
import { ProfsComponent } from './professeurs/profs/profs.component';
import { GestionEvaluationComponent } from './professeurs/gestion-evaluation/gestion-evaluation.component';
import { NotesComponent } from './professeurs/notes/notes.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterAdminComponent } from './header-footer/admin-h-f/footer-admin/footer-admin.component';
import { UserHeaderComponent } from './header-footer/user-h-f/user-header/user-header.component';
import { UserFooterComponent } from './header-footer/user-h-f/user-footer/user-footer.component';
import { SemestreComponent } from './etudiants/semestre/semestre.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GestionProfsComponent,
    GestionEtudiantsComponent,
    ProfsComponent,
    GestionEvaluationComponent,
    NotesComponent,
    EtudiantsComponent,
    LoginComponent,
    FooterAdminComponent,
    UserHeaderComponent,
    UserFooterComponent,
    SemestreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
