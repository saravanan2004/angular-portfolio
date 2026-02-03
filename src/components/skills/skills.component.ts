import { Component, OnInit, signal, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-header fade-in-up" [class.visible]="isVisible()">
          <h2 class="section-title">My <span class="gradient-text">Skills</span></h2>
          <p class="section-subtitle">Technologies I work with</p>
        </div>
        
        <div class="skills-grid">
          <div class="skill-category fade-in-up" [class.visible]="isVisible()" *ngFor="let category of skillCategories">
            <h3>{{ category.title }}</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of category.skills; let i = index">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" 
                       [style.width.%]="isVisible() ? skill.level : 0"
                       [style.animation-delay.ms]="i * 100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="tools-section fade-in-up" [class.visible]="isVisible()">
          <h3>Tools & Technologies</h3>
          <div class="tools-grid">
            <div class="tool-item" *ngFor="let tool of tools" 
                 [style.animation-delay.ms]="tools.indexOf(tool) * 100">
              <div class="tool-icon">
                <ng-container [ngSwitch]="tool.name">
                  <!-- VS Code -->
                  <svg *ngSwitchCase="'VS Code'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3L11.5 21L2 12.5L22 3Z"></path></svg>
                  <!-- Git -->
                  <svg *ngSwitchCase="'Git & GitHub'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <!-- Local LLM -->
                  <svg *ngSwitchCase="'Local LLM'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8z"></path><path d="M12 6a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4z"></path></svg>
                  <!-- FastAPI -->
                  <svg *ngSwitchCase="'FastAPI'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                  <!-- Arduino -->
                  <svg *ngSwitchCase="'Arduino IDE'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h12M12 6v12"></path><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="12" r="3"></circle><path d="M12 9a3 3 0 0 1 3 3"></path></svg>
                  <!-- Netlify -->
                  <svg *ngSwitchCase="'Netlify'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <span *ngSwitchDefault>{{ tool.icon }}</span>
                </ng-container>
              </div>
              <span>{{ tool.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      padding: 6rem 0;
      background: var(--background);
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .section-subtitle {
      color: var(--text-secondary);
      font-size: 1.1rem;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .skill-category {
      background: var(--glass);
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid var(--border);
      backdrop-filter: blur(10px);
    }
    
    .skill-category h3 {
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      color: var(--primary);
    }
    
    .skill-item {
      margin-bottom: 1.5rem;
    }
    
    .skill-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .skill-name {
      font-weight: 500;
    }
    
    .skill-percentage {
      color: var(--primary);
      font-weight: 600;
    }
    
    .skill-bar {
      height: 8px;
      background: var(--border);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 4px;
      transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
      animation: skillFill 1s ease-out forwards;
    }
    
    @keyframes skillFill {
      from { width: 0%; }
    }
    
    .tools-section {
      text-align: center;
    }
    
    .tools-section h3 {
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
    
    .tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .tool-item {
      background: var(--glass);
      padding: 1.5rem 1rem;
      border-radius: 1rem;
      border: 1px solid var(--border);
      text-align: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: toolFadeIn 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    
    @keyframes toolFadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .tool-item:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
      box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
    }
    
    .tool-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
      
      .tools-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class SkillsComponent implements OnInit, AfterViewInit {
  isVisible = signal(false);

  constructor(private el: ElementRef) { }

  skillCategories = [
    {
      title: 'Language Skills',
      skills: [
        { name: 'C', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'R', level: 75 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'React.js', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5/CSS3', level: 95 }
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 }
      ]
    }
  ];

  tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'Local LLM', icon: '🧠' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'Arduino IDE', icon: '🔌' },
    { name: 'Netlify', icon: '☁️' }
  ];

  ngOnInit() { }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const section = this.el.nativeElement.querySelector('#skills');
    if (section) {
      observer.observe(section);
    }
  }
}