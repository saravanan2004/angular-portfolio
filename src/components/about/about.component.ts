import { Component, OnInit, signal, AfterViewInit, ElementRef } from '@angular/core';
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
          <p class="section-subtitle">A blend of academic excellence and professional experience</p>
        </div>
        
        <div class="about-grid-top">
          <!-- Left: About Text and Stats -->
          <div class="about-main fade-in-up" [class.visible]="isVisible()">
            <div class="about-text">
              <p>
                I'm Saravanan B, an enthusiastic and self-driven B.Tech IT student from Francis Xavier Engineering College. 
                I'm passionate about leveraging technology to solve real-world problems, particularly in web development, 
                IoT systems, and data analytics.
              </p>
              <p>
                Currently, I am a Frontend Developer Intern at Trackerwave Private Limited, where I contribute to live enterprise projects using Angular. My focus is on creating high-performance, user-centric web applications and intelligent IIoT solutions.
              </p>
            </div>
            
            <div class="stats">
              <div class="stat-item" *ngFor="let stat of stats()">
                <div class="stat-number">{{ stat.animatedValue() }}{{ stat.label.includes('GPA') ? '' : '+' }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Right: My Journey Section -->
          <div class="journey-section fade-in-up" [class.visible]="isVisible()">
            <h3 class="subsection-title">Academic & Technical Milestones</h3>
            <div class="timeline">
              <div class="timeline-item" *ngFor="let item of journey">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <span class="timeline-year">{{ item.year }}</span>
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom: Professional Experience Section -->
        <div class="experience-section fade-in-up" [class.visible]="isVisible()">
          <h3 class="subsection-title">Professional Experience</h3>
          <div class="experience-grid">
            <div class="exp-card glass" *ngFor="let exp of experiences; let i = index" [style.transition-delay.ms]="i * 150">
              <div class="exp-badge">{{ exp.year }}</div>
              <h4 class="exp-title">{{ exp.title }}</h4>
              <p class="exp-desc">{{ exp.description }}</p>
              <div class="experience-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 8rem 0;
      background: var(--surface);
      overflow: hidden;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 5rem;
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }
    
    .about-grid-top {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 5rem;
      margin-bottom: 6rem;
      align-items: start;
    }

    .experience-section {
      padding-top: 2rem;
    }

    .subsection-title {
      font-size: 1.8rem;
      margin-bottom: 2.5rem;
      position: relative;
      display: inline-block;
    }

    .subsection-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 40px;
      height: 3px;
      background: var(--primary);
    }
    
    /* Stats Layout */
    .about-main {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .about-text p {
      margin-bottom: 1.5rem;
      color: var(--text-secondary);
      line-height: 1.8;
      font-size: 1.1rem;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    
    .stat-item {
      text-align: center;
      padding: 2rem 1rem;
      background: var(--glass);
      border-radius: 1.5rem;
      border: 1px solid var(--border);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .stat-item:hover {
      transform: translateY(-10px);
      border-color: var(--primary);
      box-shadow: 0 10px 30px -10px rgba(var(--primary-rgb), 0.3);
    }
    
    .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }
    
    /* Experience Cards */
    .experience-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .exp-card {
      position: relative;
      padding: 2.5rem;
      border-radius: 2rem;
      background: var(--glass);
      border: 1px solid var(--border);
      transition: all 0.5s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .exp-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
    }

    .exp-badge {
      display: inline-block;
      align-self: flex-start;
      padding: 0.4rem 1rem;
      background: rgba(var(--primary-rgb), 0.1);
      color: var(--primary);
      border-radius: 2rem;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid rgba(var(--primary-rgb), 0.2);
    }

    .exp-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .exp-desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .experience-glow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                  rgba(var(--primary-rgb), 0.1) 0%, 
                  transparent 70%);
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }

    .exp-card:hover .experience-glow {
      opacity: 1;
    }

    /* Refined Timeline */
    .timeline {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 1px;
      background: var(--border);
    }

    .timeline-item {
      position: relative;
      padding-bottom: 3rem;
    }

    .timeline-dot {
      position: absolute;
      left: -2rem;
      top: 0;
      width: 12px;
      height: 12px;
      background: var(--primary);
      border-radius: 50%;
      border: 4px solid var(--surface);
      transform: translateX(-50%);
      z-index: 1;
    }

    .timeline-content {
      padding-left: 1rem;
    }

    .timeline-year {
      font-size: 0.85rem;
      color: var(--primary);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .timeline-content h4 {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }

    .timeline-content p {
      color: var(--text-secondary);
      font-size: 1rem;
    }
    
    @media (max-width: 992px) {
      .about-grid-top {
        grid-template-columns: 1fr;
        gap: 4rem;
      }
      .stats {
        margin-top: 1rem;
      }
      .subsection-title {
        left: 50%;
        transform: translateX(-50%);
      }
      .subsection-title::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    @media (max-width: 768px) {
      .stats {
        grid-template-columns: 1fr;
      }
      .experience-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent implements OnInit, AfterViewInit {
  isVisible = signal(false);

  constructor(private el: ElementRef) { }

  stats = signal([
    { value: 8.5, label: 'B.Tech GPA', animatedValue: signal(0) },
    { value: 3, label: 'Internships', animatedValue: signal(0) },
    { value: 5, label: 'Projects Completed', animatedValue: signal(0) }
  ]);

  experiences = [
    {
      year: 'Jan 2026 - Present',
      title: 'Frontend Developer Intern - Trackerwave Private Limited',
      description: 'Developing Angular components, implementing routing and services, and contributing to live enterprise projects.'
    },
    {
      year: 'Nov 2025 - Jan 2026',
      title: 'Software Developer Intern - Colakin Private Limited',
      description: 'Built AI backend services using FastAPI, integrated local LLM models, and worked with LiveKit in a banking project.'
    },
    {
      year: 'Jun 2024 - Jul 2024',
      title: 'Full Stack Intern - NXTLogic Software Solutions',
      description: 'Developed and deployed "Men\'s Hub" fashion website using HTML, CSS, and ASP.NET.'
    }
  ];

  journey = [
    {
      year: 'April 2024',
      title: 'Journal Publication - TyreGuard',
      description: 'Published research on IIoT Smart Tyre Monitoring in the International Journal of Research Publication and Reviews (IJRPR).'
    },
    {
      year: '2024',
      title: 'Technical Achievements',
      description: 'Secured 1st place in Bright Hatch \'24 (Technical Presentation) and 3rd place in AATRAL Project Expo.'
    },
    {
      year: '2022 - 2026',
      title: 'B.Tech IT - Francis Xavier Engineering College',
      description: 'Pursuing Information Technology with focus on Web Development, IoT, and Data Analytics. Current CGPA: 8.5.'
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
            this.animateStats();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const section = this.el.nativeElement.querySelector('#about');
    if (section) {
      observer.observe(section);
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