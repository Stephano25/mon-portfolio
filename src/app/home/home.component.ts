import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initTypedText();
  }

  initTypedText() {
    const texts = [
      'Développeur Full Stack',
      'Expert Angular & NestJS',
      'Créateur d\'expériences web',
      'Innovateur passionné'
    ];
    let index = 0;
    let charIndex = 0;
    const typedElement = document.querySelector('.typed-text');
    
    if (typedElement) {
      const type = () => {
        if (charIndex < texts[index].length) {
          typedElement.textContent += texts[index].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(erase, 2000);
        }
      };
      
      const erase = () => {
        if (charIndex > 0) {
          typedElement.textContent = texts[index].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50);
        } else {
          index = (index + 1) % texts.length;
          setTimeout(type, 500);
        }
      };
      
      type();
    }
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
}