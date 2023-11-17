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
import { UserHeaderComponent } from './header-footer/user-h-f/user-header/user-header.component';
import { UserFooterComponent } from './header-footer/user-h-f/user-footer/user-footer.component';
import { HeaderAdminComponent } from './header-footer/admin-h-f/header-admin/header-admin.component';
import { FooterAdminComponent } from './header-footer/admin-h-f/footer-admin/footer-admin.component';
import { EvaluationListComponent } from './professeurs/notes/evaluation-list/evaluation-list.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    UserHeaderComponent,
    UserFooterComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    EvaluationListComponent,
    EvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
