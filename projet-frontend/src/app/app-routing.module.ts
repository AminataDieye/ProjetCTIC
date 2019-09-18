import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { LoginComponent } from './component/login/login.component';
import { ArchivesComponent } from './component/archives/archives.component';
import { EditionComponent } from './component/edition/edition.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProposerContenusComponent } from './component/proposer-contenus/proposer-contenus.component';
import { AuthGuard } from './auth/auth.guard';
import { AccueilAdminComponent } from './component/accueil-admin/accueil-admin.component';

const routes: Routes = [
  { path: "accueil", component: AccueilComponent },
  { path: "edition", component: EditionComponent },
  { path: "archives", component: ArchivesComponent },
  { path: "proposer-contenus", component: ProposerContenusComponent },
  /*{
    path: "login",
    component: AccueilComponent,
    canActivate: [AuthGuard]
  },*/
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/accueil", pathMatch: "full" },
  { path : "accueil-admin", component: AccueilAdminComponent},
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
