import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaramelAuSelComponent } from './caramel-au-sel/caramel-au-sel.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { SelComponent } from './sel/sel.component';
import { VerreDEauComponentComponent } from './verre-deau-component/verre-deau-component.component';
import { VerreDEauComponent } from './verre-deau/verre-deau.component';

@NgModule({
  declarations: [
    AppComponent,
    CaramelAuSelComponent,
    BonbonComponent,
    SelComponent,
    VerreDEauComponentComponent,
    VerreDEauComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
