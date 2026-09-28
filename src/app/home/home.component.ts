import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  particles: Particle[] = [];
  technologies = [
    'Angular', 'TypeScript', 'NestJS', 'Node.js', 'MongoDB', 
    'PostgreSQL', 'Docker', 'Git', 'Express', 'HTML5', 'CSS3', 'SCSS'
  ];
  
  private typeTimeout: any;
  private eraseTimeout: any;

  ngOnInit() {
    this.generateParticles();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initTypedText();
    }, 500);
  }

  ngOnDestroy() {
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
    if (this.eraseTimeout) clearTimeout(this.eraseTimeout);
  }

  private generateParticles() {
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 20
      });
    }
  }

  private initTypedText() {
    const texts = [
      'Développeur Full Stack',
      'Expert Angular & NestJS',
      'Créateur d\'expériences web',
      'Innovateur passionné'
    ];
    let index = 0;
    let charIndex = 0;
    const typedElement = document.querySelector('.typed-text');
    
    if (!typedElement) return;

    const type = () => {
      if (charIndex < texts[index].length) {
        typedElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        this.typeTimeout = setTimeout(type, 80);
      } else {
        this.eraseTimeout = setTimeout(erase, 2000);
      }
    };
    
    const erase = () => {
      if (charIndex > 0) {
        typedElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        this.eraseTimeout = setTimeout(erase, 40);
      } else {
        index = (index + 1) % texts.length;
        this.typeTimeout = setTimeout(type, 500);
      }
    };
    
    type();
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToProjects() {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToAbout() {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}