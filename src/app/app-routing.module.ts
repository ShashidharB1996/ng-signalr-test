import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';

//import { PalyerComponent } from './palyer.component';
const routes: Routes = [
  {path:'', redirectTo:'player', pathMatch: 'full'},
{path:'player', component:PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlayerComponent]
