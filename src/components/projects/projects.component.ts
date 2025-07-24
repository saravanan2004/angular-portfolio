import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-header fade-in-up" [class.visible]="isVisible()">
          <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
          <p class="section-subtitle">Some of my recent work</p>
        </div>
        
        <div class="projects-grid">
          <div class="project-card fade-in-up" [class.visible]="isVisible()" 
               *ngFor="let project of projects; let i = index"
               [style.animation-delay.ms]="i * 200">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-links">
                  <a [href]="project.demo" class="project-link" target="_blank">
                    <span class="icon">👁️</span>
                    Demo
                  </a>
                  <a [href]="project.github" class="project-link" target="_blank">
                    <span class="icon">📂</span>
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 6rem 0;
      background: var(--surface);
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
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .project-card {
      background: var(--glass);
      border-radius: 1rem;
      overflow: hidden;
      border: 1px solid var(--border);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: projectFadeIn 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
    }
    
    @keyframes projectFadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    
    .project-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.1);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-links {
      display: flex;
      gap: 1rem;
    }
    
    .project-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--primary);
      color: white;
      text-decoration: none;
      border-radius: 0.5rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .project-link:hover {
      background: var(--secondary);
      transform: translateY(-2px);
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-content h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    .project-content p {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tag {
      background: var(--primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .project-links {
        flex-direction: column;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  isVisible = signal(false);
  
  projects = [
    {
      title: 'TyreGuard - IoT Monitoring System',
      description: 'IIoT-based wireless sensor system for monitoring tyre health in mining dumpers with real-time pressure, temperature, and TKPH data.',
      image: 'assets/dashboard 1.png',
      demo: '#',
      github: 'https://github.com/saravanan2004/tyreguard-project',
      tags: ['MERN Stack', 'Socket.IO', 'Arduino', 'IoT Sensors']
    },
    {
      title: 'Students Laboratory Foyer',
      description: 'Student attendance management system with admin reporting capabilities and responsive frontend for seamless data submission.',
      image: 'assets/Screenshot 2024-07-01 200813.png',
      demo: '#',
      github: 'https://github.com/saravanan2004/SLF',
      tags: ['MERN Stack', 'MongoDB', 'React', 'Node.js']
    },
    {
      title: 'Men\'s Hub Fashion Website',
      description: 'Dynamic fashion website for men\'s apparel with seamless shopping experience, built during internship at NXTLogic Software Solutions.',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo: 'https://mens-hub.netlify.app/',
      github: 'https://github.com/saravanan2004/Fashion-website',
      tags: ['HTML', 'CSS', 'JavaScript', 'ASP.NET']
    },
    {
      title: 'CRIC_KIT Shopping Website',
      description: 'React-based cricket gear shopping website with sleek UI, interactive order system, and product management features.',
      image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo: '#',
      github: 'https://github.com/saravanan2004/cricket-kit-e-commerce',
      tags: ['React.js', 'Node.js', 'MySQL', 'AppScript']
    }
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
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }
  }
}