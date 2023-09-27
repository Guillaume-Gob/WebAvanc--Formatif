import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  aimeLesChosesSucrees: boolean = false;
  aimeLesChosesSalees: boolean = false;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    // Récupérez l'état des cookies
    this.aimeLesChosesSucrees = this.cookieService.get('aimeLesChosesSucrees') === 'true';
    this.aimeLesChosesSalees = this.cookieService.get('aimeLesChosesSalees') === 'true';
  }

  sauvegarderEtat(): void {
    // Sauvegardez l'état des checkboxes dans les cookies
    this.cookieService.set('aimeLesChosesSucrees', this.aimeLesChosesSucrees.toString());
    this.cookieService.set('aimeLesChosesSalees', this.aimeLesChosesSalees.toString());
  }

  jaiFaim(): void {
    // Redirigez vers la page /caramelAuSel en fonction des préférences
    if (this.aimeLesChosesSucrees && this.aimeLesChosesSalees) {
      // L'utilisateur aime le sucre et le sel
      window.location.href = '/caramelAuSel';
    } else if (this.aimeLesChosesSucrees && !this.aimeLesChosesSalees) {
      // L'utilisateur aime le sucre, mais pas le sel
      window.location.href = '/bonbon';
    } else if (!this.aimeLesChosesSucrees && this.aimeLesChosesSalees) {
      // L'utilisateur aime le sel, mais pas le sucre
      window.location.href = '/sel';
    } else {
      // L'utilisateur n'aime ni le sucre ni le sel
      window.location.href = '/verreDEau';
    }
  }
}