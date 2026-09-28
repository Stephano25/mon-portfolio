import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  icon: string;
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      lines: ['nirinaremi.s@zurcher.edu.mg', 'dazzremie@gmail.com']
    },
    {
      icon: 'fas fa-phone',
      title: 'Téléphone',
      lines: ['+261 33 66 031 33', '+261 38 74 068 32']
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      lines: ['github.com/Stephano25']
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Localisation',
      lines: ['Toamasina, Madagascar']
    }
  ];

  onSubmit() {
    alert('Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.');
  }
}