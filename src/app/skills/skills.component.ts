import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'fa-code',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'SCSS', level: 88 }
      ]
    },
    {
      title: 'Backend',
      icon: 'fa-server',
      skills: [
        { name: 'NestJS', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'RESTful API', level: 90 }
      ]
    },
    {
      title: 'PHP & Frameworks',
      icon: 'fa-php',
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'Laravel', level: 75 },
        { name: 'MySQL / PDO', level: 85 },
        { name: 'Composer', level: 70 }
      ]
    },
    {
      title: 'Base de Données',
      icon: 'fa-database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 70 }
      ]
    }
  ];

  techTags = [
    'Git/GitHub', 'Docker', 'JWT', 'Agile/Scrum', 
    'Postman', 'VS Code', 'Figma', 'Swagger', 'UML',
    'PHP', 'Laravel', 'PDO', 'Composer', 'XAMPP'
  ];

  softSkills = [
    { icon: 'fa-mobile-alt', name: 'Responsive Design' },
    { icon: 'fa-chart-line', name: 'Optimisation Performance' },
    { icon: 'fa-shield-alt', name: 'Sécurité Web' },
    { icon: 'fa-users', name: 'Travail d\'Équipe' },
    { icon: 'fa-comments', name: 'Communication Technique' },
    { icon: 'fa-lightbulb', name: 'Résolution de Problèmes' }
  ];
}