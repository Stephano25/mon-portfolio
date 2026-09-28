import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  gradient: string;
  image?: string;
  link?: string;
  github?: string;
  category?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      {
        title: 'Application de Gestion Scolaire',
        description: 'Plateforme complète de gestion des étudiants, cours et notes avec Angular et NestJS.',
        technologies: ['Angular', 'NestJS', 'MongoDB', 'TypeScript'],
        icon: 'fa-school',
        gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        image: 'assets/images/projects/gestion-scolaire.jpg',
        link: '#',
        github: 'https://github.com/Stephano25'
      },
      {
        title: 'Marketplace E-commerce',
        description: 'Site e-commerce moderne avec panier, authentification et paiement sécurisé.',
        technologies: ['Angular', 'Express', 'PostgreSQL', 'JWT'],
        icon: 'fa-shopping-cart',
        gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        image: 'assets/images/projects/marketplace.jpg',
        link: '#',
        github: 'https://github.com/Stephano25'
      },
      {
        title: 'Dashboard Analytics',
        description: 'Dashboard interactif pour visualisation de données en temps réel.',
        technologies: ['Angular', 'Chart.js', 'WebSocket', 'MongoDB'],
        icon: 'fa-chart-line',
        gradient: 'linear-gradient(135deg, #10b981 0%, #6366f1 100%)',
        image: 'assets/images/projects/dashboard.jpg',
        link: '#',
        github: 'https://github.com/Stephano25'
      },
      {
        title: 'API REST pour Application Mobile',
        description: 'Backend scalable pour application mobile de livraison de repas.',
        technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis'],
        icon: 'fa-cloud',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
        image: 'assets/images/projects/api-mobile.jpg',
        link: '#',
        github: 'https://github.com/Stephano25'
      },
      {
        title: 'Système de Gestion de Bibliothèque',
        description: 'Application web PHP avec gestion des livres, emprunts, utilisateurs et rapports statistiques. Interface d\'administration complète.',
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
        icon: 'fa-book',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        image: 'assets/images/projects/php-bibliotheque.jpg',
        link: '#',
        github: 'https://github.com/Stephano25',
        category: 'PHP'
      }
    ];
  }
}