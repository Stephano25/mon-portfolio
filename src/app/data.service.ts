import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProjects(): Project[] {
    return [
      {
        title: 'Application de Gestion Scolaire',
        description: 'Plateforme complète de gestion des étudiants, cours et notes avec Angular et NestJS.',
        technologies: ['Angular', 'NestJS', 'MongoDB', 'TypeScript'],
        icon: 'fa-school'
      },
      {
        title: 'Marketplace E-commerce',
        description: 'Site e-commerce moderne avec panier, authentification et paiement sécurisé.',
        technologies: ['Angular', 'Express', 'PostgreSQL', 'JWT'],
        icon: 'fa-shopping-cart'
      },
      {
        title: 'Dashboard Analytics',
        description: 'Dashboard interactif pour visualisation de données en temps réel.',
        technologies: ['Angular', 'Chart.js', 'WebSocket', 'MongoDB'],
        icon: 'fa-chart-line'
      },
      {
        title: 'API REST pour Application Mobile',
        description: 'Backend scalable pour application mobile de livraison de repas.',
        technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis'],
        icon: 'fa-cloud'
      }
    ];
  }
}