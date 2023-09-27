import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from "@angular/animations";
import { bounce, shake } from "ng-animate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('bounce', [transition(':increment', useAnimation(bounce, {
      params: { timing: 3, delay: 0 } // Modifier le délai à 0
    }))]),
    trigger('shake', [transition(':decrement', useAnimation(shake))])
  ]
})
export class AppComponent {

  mavariable = 0;
  shake = false;
  bounce = false;

  constructor() {
  }

  shakeMe() {
    this.shake = true;
    setTimeout(() => { this.shake = false; }, 1000);
  }

  bounceMe() {
    this.bounce = true;
    setTimeout(() => { this.bounce = false; }, 1000);
  }

  shakeThenBounce() {
    // Activer d'abord l'animation shake pendant 3 secondes
    this.shake = true;
    setTimeout(() => {
      this.shake = false;
      
      // Ensuite, activer l'animation bounce pendant 3 secondes
      this.bounce = true;
      setTimeout(() => { this.bounce = false; }, 3000); // Changer la durée à 3 secondes
    }, 3000); // Changer la durée à 3 secondes
  }
  shakeThenBounceAngular() {
    // Activer d'abord l'animation shake pendant 3 secondes
    this.mavariable = this.mavariable -1 ;
    setTimeout(() => {
      this.mavariable = this.mavariable +1 ;
      
      // Ensuite, activer l'animation bounce pendant 3 secondes
      this.mavariable = this.mavariable +1 ;
      setTimeout(() => {  this.mavariable = this.mavariable -1 ; }, 3000); // Changer la durée à 3 secondes
    }, 3000); // Changer la durée à 3 secondes
  }
}
