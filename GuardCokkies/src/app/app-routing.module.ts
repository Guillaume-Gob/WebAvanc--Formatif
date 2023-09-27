import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaramelAuSelComponent } from './caramel-au-sel/caramel-au-sel.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { SelComponent } from './sel/sel.component';
import { VerreDEauComponent } from './verre-deau/verre-deau.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/page-principale', pathMatch: 'full' },
  { path: 'page-principale', component: AppComponent },
  { path: 'caramelAuSel', component: CaramelAuSelComponent },
  { path: 'bonbon', component: BonbonComponent },
  { path: 'sel', component: SelComponent },
  { path: 'verreDEau', component: VerreDEauComponent },
  { path: '**', redirectTo: '/page-principale' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }