import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="particles"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text fade-in-up" [class.visible]="isVisible()">
            <h1 class="hero-title">
              Hi, I'm <span class="gradient-text">Saravanan</span>
            </h1>
            <div class="typewriter">
              <span class="typewriter-text">{{ currentText() }}</span>
              <span class="cursor">|</span>
            </div>
            <p class="hero-description">
              Enthusiastic B.Tech IT student passionate about leveraging technology to solve real-world problems, 
              particularly in web development, IoT systems, and data analytics.
            </p>
            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary">
                View My Work
                <span class="arrow">→</span>
              </a>
              <a href="assets/Saravanan B.pdf" target="_blank" class="btn btn-outline">Download CV</a>
            </div>
          </div>
          <div class="hero-image fade-in-up" [class.visible]="isVisible()">
            <div class="image-container floating">
              <div class="image-bg"></div>
              <img src="assets/IMG_20241031_164718.jpg" 
                   alt="Profile" class="profile-image">
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-arrow pulse">↓</div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, var(--background) 0%, #1e1b4b 100%);
    }
    
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%);
      animation: particleFloat 20s ease-in-out infinite;
    }
    
    @keyframes particleFloat {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      33% { transform: translate(30px, -30px) rotate(120deg); }
      66% { transform: translate(-20px, 20px) rotate(240deg); }
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 2;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    
    .typewriter {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--primary);
      margin-bottom: 1.5rem;
      min-height: 2rem;
    }
    
    .cursor {
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    .hero-description {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      max-width: 500px;
    }
    
    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .arrow {
      transition: transform 0.3s ease;
    }
    
    .btn-primary:hover .arrow {
      transform: translateX(4px);
    }
    
    .hero-image {
      display: flex;
      justify-content: center;
    }
    
    .image-container {
      position: relative;
      width: 300px;
      height: 300px;
    }
    
    .image-bg {
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
      border-radius: 50%;
      opacity: 0.3;
      filter: blur(20px);
      animation: rotate 10s linear infinite;
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .profile-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--surface);
      position: relative;
      z-index: 2;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      color: var(--text-muted);
      font-size: 1.5rem;
    }
    
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .typewriter {
        font-size: 1.25rem;
      }
      
      .image-container {
        width: 250px;
        height: 250px;
      }
      
      .hero-actions {
        justify-content: center;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  isVisible = signal(false);
  currentText = signal('');

  roles = signal([
    'Frontend Developer',
    'MERN Stack Specialist',
    'IIoT Enthusiast',
    'Problem Solver'
  ]);
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit() {
    setTimeout(() => this.isVisible.set(true), 100);
    this.typeWriter();
  }

  typeWriter() {
    const current = this.roles()[this.textIndex];

    if (this.isDeleting) {
      this.currentText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.currentText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.roles().length;
      speed = 500;
    }

    setTimeout(() => this.typeWriter(), speed);
  }
}