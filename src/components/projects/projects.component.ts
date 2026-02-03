import { Component, OnInit, signal, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModalComponent } from './project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
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
               [style.transition-delay.ms]="i * 200">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-links">
                  <button class="project-link" (click)="selectedProject.set(project)">
                    <span class="icon">🔍</span>
                    Details
                  </button>
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

      <app-project-modal 
        *ngIf="selectedProject()" 
        [project]="selectedProject()" 
        (close)="selectedProject.set(null)">
      </app-project-modal>
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
      opacity: 0;
      transform: translateY(30px);
    }
    
    .project-card.visible {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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
      border: none;
      cursor: pointer;
      font-family: inherit;
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
export class ProjectsComponent implements OnInit, AfterViewInit {
  isVisible = signal(false);
  selectedProject = signal<any>(null);

  constructor(private el: ElementRef) { }

  projects = [
    {
      title: 'Public Complaint Prioritization System',
      description: 'NLP-based classification system using TF-IDF and Logistic Regression to automatically prioritize citizen complaints by urgency.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#',
      tags: ['Python', 'NLP', 'Machine Learning', 'TF-IDF'],
      details: [
        'Automated urgency classification (High/Medium/Low)',
        'Built with Scikit-learn and NLTK',
        'Implemented Logistic Regression model',
        'Efficient text vectorized using TF-IDF'
      ]
    },
    {
      title: 'Government Scheme Awareness Dashboard',
      description: 'Data-driven Power BI dashboard analyzing welfare scheme awareness to identify high-risk regions and support policy decisions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#',
      tags: ['Power BI', 'Data Analytics', 'Excel'],
      details: [
        'Analyzed open government datasets',
        'Visualized scheme utilization trends',
        'Identified underserved regions',
        'Provided data-backed policy insights'
      ]
    },
    {
      title: 'TyreGuard - Smart Monitoring System',
      description: 'IIoT-based system monitoring tyre pressure, temperature, and TKPH in real time for mining dumpers with predictive alerts.',
      image: 'assets/dashboard 1.png',
      demo: '#',
      github: 'https://github.com/saravanan2004/tyreguard-project',
      tags: ['React.js', 'Socket.IO', 'Arduino', 'Sensors'],
      details: [
        'Real-time data streaming with Socket.IO',
        'Arduino-based sensor integration',
        'Predictive maintenance alert system',
        'Multi-vehicle monitoring dashboard'
      ]
    },
    {
      title: 'Students Laboratory Foyers',
      description: 'Web-based system to manage student laboratory attendance and administrative reporting with seamless database integration.',
      image: 'assets/Screenshot 2024-07-01 200813.png',
      demo: '#',
      github: 'https://github.com/saravanan2004/SLF',
      tags: ['MERN Stack', 'MongoDB', 'React', 'Node.js'],
      details: [
        'Streamlined attendance tracking',
        'Automated admin reporting panel',
        'Responsive MERN stack architecture',
        'Secure multi-user authentication'
      ]
    },
    {
      title: 'Men\'s Hub Fashion Website',
      description: 'Dynamic fashion platform providing a smooth shopping experience with efficient front-end design and back-end management.',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo: 'https://mens-hub.netlify.app/',
      github: 'https://github.com/saravanan2004/Fashion-website',
      tags: ['HTML', 'CSS', 'JavaScript', 'ASP.NET'],
      details: [
        'Comprehensive product management',
        'Modern, responsive shopping UI',
        'Seamless cart and checkout flow',
        'Developed as part of a tech team'
      ]
    },
    {
      title: 'CRIC_KIT Shopping Website',
      description: 'React-based cricket gear shopping website with sleek UI, interactive order system, and product management features.',
      image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600',
      demo: '#',
      github: 'https://github.com/saravanan2004/cricket-kit-e-commerce',
      tags: ['React.js', 'Node.js', 'MySQL', 'AppScript'],
      details: [
        'Dynamic product catalog with search/filter',
        'Smooth checkout process and order management',
        'Integration with AppScript for automation',
        'Responsive layout for all screen sizes'
      ]
    }
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const section = this.el.nativeElement.querySelector('#projects');
    if (section) {
      observer.observe(section);
    }
  }
}