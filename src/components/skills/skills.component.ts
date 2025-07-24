import { Component, OnInit, signal } from '@angular/core';
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
              <div class="tool-icon">{{ tool.icon }}</div>
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
export class SkillsComponent implements OnInit {
  isVisible = signal(false);
  
  skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'ReactJS', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap', level: 80 },
        { name: 'JavaScript', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Appscript', level: 75 },
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'R', level: 70 },
        { name: 'Java', level: 80 }
      ]
    }
  ];
  
  tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git', icon: '🔧' },
    { name: 'Arduino IDE', icon: '🔌' },
    { name: 'Netlify', icon: '☁️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Google Colab', icon: '📊' }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }
}