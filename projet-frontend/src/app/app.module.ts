import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ArchivesComponent } from './component/archives/archives.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { EditionComponent } from './component/edition/edition.component';
import { ProposerContenusComponent } from './component/proposer-contenus/proposer-contenus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilAdminComponent } from './component/accueil-admin/accueil-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ArchivesComponent,
    ContactComponent,
    LoginComponent,
    EditionComponent,
    ProposerContenusComponent,
    AccueilAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
