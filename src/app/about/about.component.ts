import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent {
  // Ajoutez cette ligne pour déboguer
  constructor() {
    console.log('AboutComponent chargé !');
  }
}