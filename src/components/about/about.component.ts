import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="section-header fade-in-up" [class.visible]="isVisible()">
          <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
          <p class="section-subtitle">Get to know me better</p>
        </div>
        
        <div class="about-content">
          <div class="about-text fade-in-up" [class.visible]="isVisible()">
            <p>
              I'm Saravanan B, an enthusiastic and self-driven B.Tech IT student from Francis Xavier Engineering College. 
              I'm passionate about leveraging technology to solve real-world problems, particularly in web development, 
              IoT systems, and data analytics.
            </p>
            <p>
              With hands-on experience in building dynamic applications using the MERN stack, I enjoy designing intuitive interfaces, optimizing performance, and integrating smart systems. I'm always eager to learn, collaborate, and innovate—whether it's crafting scalable web platforms, building intelligent IoT prototypes, or uncovering insights through data.
              </p>
              <p>
              Currently seeking opportunities to apply and expand my skills through internships, projects, and collaborative tech ventures.
            </p>
            
            <div class="stats">
              <div class="stat-item" *ngFor="let stat of stats()">
                <div class="stat-number" [attr.data-target]="stat.value">
                  {{ stat.animatedValue() }}+
                </div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          
          <div class="timeline fade-in-up" [class.visible]="isVisible()">
            <h3>My Journey</h3>
            <div class="timeline-items">
              <div class="timeline-item" *ngFor="let item of timeline; let i = index">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <div class="timeline-year">{{ item.year }}</div>
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
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
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }
    
    .about-text p {
      margin-bottom: 1.5rem;
      color: var(--text-secondary);
      line-height: 1.7;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .stat-item {
      text-align: center;
      padding: 1.5rem;
      background: var(--glass);
      border-radius: 1rem;
      border: 1px solid var(--border);
      transition: transform 0.3s ease;
    }
    
    .stat-item:hover {
      transform: translateY(-5px);
    }
    
    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    
    .timeline h3 {
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
    
    .timeline-items {
      position: relative;
    }
    
    .timeline-items::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--primary), var(--accent));
    }
    
    .timeline-item {
      position: relative;
      padding-left: 3rem;
      margin-bottom: 2rem;
    }
    
    .timeline-marker {
      position: absolute;
      left: 5px;
      top: 0;
      width: 12px;
      height: 12px;
      background: var(--primary);
      border-radius: 50%;
      border: 3px solid var(--surface);
    }
    
    .timeline-content {
      background: var(--glass);
      padding: 1.5rem;
      border-radius: 1rem;
      border: 1px solid var(--border);
    }
    
    .timeline-year {
      color: var(--primary);
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    
    .timeline-content h4 {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    
    .timeline-content p {
      color: var(--text-secondary);
      margin: 0;
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .stats {
        grid-template-columns: 1fr;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  isVisible = signal(false);
  
  stats = signal([
    { value: 4, label: 'Projects Completed', animatedValue: signal(0) },
    { value: 4, label: 'Years Learning', animatedValue: signal(0) },
    { value: 3, label: 'Achievements', animatedValue: signal(0) }
  ]);
  
  timeline = [
    {
      year: '2024',
      title: 'Full Stack Intern - NXTLogic Software Solutions',
      description: 'Developed and deployed "Men\'s Hub" fashion website using HTML, CSS, and ASP.NET during 6-week internship.'
    },
    {
      year: '2024',
      title: 'Technical Achievements',
      description: 'Secured 1st place in Bright Hatch \'24 and 3rd place in AATRAL Project Expo. Published research paper on TyreGuard system.'
    },
    {
      year: '2022',
      title: 'Started B.Tech IT Journey',
      description: 'Began pursuing B.Tech in Information Technology at Francis Xavier Engineering College with focus on web development and IoT.'
    },
    {
      year: '2020',
      title: 'Higher Secondary Education',
      description: 'Completed HSC with 75% from Kamlavati Senior Secondary School, CBSE board.'
    },
    {
      year: '2019',
      title: 'Secondary School Leaving Certificate',
      description: 'Completed SSLC with 71% from Kamlavati Senior Secondary School, CBSE board.'
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
            this.animateStats();
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }

  animateStats() {
    this.stats().forEach(stat => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          stat.animatedValue.set(stat.value);
          clearInterval(timer);
        } else {
          stat.animatedValue.set(Math.floor(current));
        }
      }, 30);
    });
  }
}