import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material';



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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NouvelleEditionComponent } from './component/nouvelle-edition/nouvelle-edition.component';
import { NouveauArticleComponent } from './component/nouveau-article/nouveau-article.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


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
    AccueilAdminComponent,
    NouvelleEditionComponent,
    NouveauArticleComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
