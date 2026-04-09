import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent {
  onSubmit() {
    alert('Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.');
  }
}