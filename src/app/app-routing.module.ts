import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonService } from './PokemonService';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { VerifyAuthService } from './verify-auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service'; 
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
