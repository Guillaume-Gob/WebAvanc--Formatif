import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { BonbonComponent } from './bonbon/bonbon.component';
import { CaramelAuSelComponent } from './caramel-au-sel/caramel-au-sel.component';
import { SelComponent } from './sel/sel.component';
import { VerreDEauComponent } from './verre-deau/verre-deau.component';

@NgModule({
  declarations: [
    AppComponent,
    BonbonComponent,
    CaramelAuSelComponent,
    SelComponent,
    VerreDEauComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
