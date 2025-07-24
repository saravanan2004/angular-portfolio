import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="gradient-text">Saravanan B</h3>
            <p>B.Tech IT Student passionate about web development, IoT systems, and data analytics.</p>
            <div class="social-links">
              <a *ngFor="let social of socialLinks" 
                 [href]="social.url" 
                 class="social-link" 
                 target="_blank">
                {{ social.icon }}
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">IoT Solutions</a></li>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">Technical Training</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p>📧 saravananb7804&#64;gmail.com</p>
              <p>📱 +91 9361409583</p>
              <p>📍 Tiruchendur, Tamil Nadu</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Saravanan B. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--surface);
      border-top: 1px solid var(--border);
      padding: 3rem 0 1rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .footer-section h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .footer-section h4 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }
    
    .footer-section p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .footer-section ul {
      list-style: none;
    }
    
    .footer-section ul li {
      margin-bottom: 0.5rem;
    }
    
    .footer-section ul li a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-section ul li a:hover {
      color: var(--primary);
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: var(--glass);
      border-radius: 50%;
      border: 1px solid var(--border);
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background: var(--primary);
      transform: translateY(-2px);
    }
    
    .contact-info p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    
    .footer-bottom {
      border-top: 1px solid var(--border);
      padding-top: 2rem;
      text-align: center;
      color: var(--text-secondary);
    }
    
    .footer-bottom p {
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: '💼', url: 'https://linkedin.com/in/saravanan-btechit' },
    { icon: '🐙', url: 'https://github.com/saravanan2004' },
    { icon: '📧', url: 'mailto:saravananb7804@gmail.com' },
    { icon: '🎓', url: '#' }
  ];
}