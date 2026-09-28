import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { number: '4+', label: 'Projets réalisés' },
    { number: '12+', label: 'Technologies' },
    { number: '2', label: 'Langues' },
    { number: '2026', label: 'Diplômé' }
  ];

  cards = [
    {
      icon: 'fa-user-graduate',
      title: 'Parcours Académique',
      description: 'Étudiant en dernière année de Licence à l\'Université Adventiste Zurcher'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Localisation',
      description: 'Né le 19 Octobre 2000 à Tamatave, Madagascar'
    },
    {
      icon: 'fa-heart',
      title: 'Passions',
      description: 'Développement web, innovation, et apprentissage continu'
    },
    {
      icon: 'fa-bullseye',
      title: 'Objectifs',
      description: 'Devenir expert Full Stack et créer des solutions innovantes'
    }
  ];

  timeline = [
    {
      date: '2022-2023',
      title: 'Début en développement',
      description: 'Premiers projets web et apprentissage des bases du développement'
    },
    {
      date: '2023-2024',
      title: 'Maîtrise des frameworks',
      description: 'Apprentissage d\'Angular, NestJS, et bases de données'
    },
    {
      date: '2024-2026',
      title: 'Projets professionnels',
      description: 'Réalisation de projets full stack pour des clients'
    }
  ];
}